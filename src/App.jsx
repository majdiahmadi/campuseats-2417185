
import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import CartPage from './components/CartPage.jsx'
import DailySpecial from './components/DailySpecial.jsx'
import Footer from './components/Footer.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  // Vendor states
  const [vendors, setVendors] = useState([])
  const [selectedVendorId, setSelectedVendorId] = useState(null)

  // Cart and navigation states
  const [cart, setCart] = useState([])
  const [view, setView] = useState('menu')
  const [lastOrder, setLastOrder] = useState(null)

  // Fetch states
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  // B2: Fetch vendors from mock API
  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', {
      signal: controller.signal
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (controller.signal.aborted) return

        setVendors(data)
        setSelectedVendorId(data[0]?.id ?? null)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [reloadKey])

  // Find selected vendor
  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId
  )

  // B6: Select the daily special from Kafe Mahallah Ali
const specialVendor = vendors.find(
  (vendor) => vendor.id === '2417185-my-restaurant'
)

const specialItem = specialVendor?.menu.find(
  (item) => item.id === '2417185-my-1'
)

  // B3: Calculate total cart quantity
  const cartCount = cart.reduce(
    (total, line) => total + line.qty,
    0
  )

  // B3: Add item to cart
  function handleAddToCart(item) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (line) => line.item.id === item.id
      )

      if (existingItem) {
        return prevCart.map((line) =>
          line.item.id === item.id
            ? { ...line, qty: line.qty + 1 }
            : line
        )
      }

      return [...prevCart, { item, qty: 1 }]
    })
  }

  // B3: Increase or decrease quantity
  function handleChangeQty(itemId, delta) {
    setCart((prevCart) =>
      prevCart
        .map((line) =>
          line.item.id === itemId
            ? { ...line, qty: line.qty + delta }
            : line
        )
        .filter((line) => line.qty > 0)
    )
  }

  // B3: Remove an item
  function handleRemove(itemId) {
    setCart((prevCart) =>
      prevCart.filter(
        (line) => line.item.id !== itemId
      )
    )
  }

  // B5: Place order
  function handlePlaceOrder(details) {
    const total = cart.reduce(
      (sum, line) => sum + line.item.price * line.qty,
      0
    )

    setLastOrder({
      ...details,
      total
    })

    setCart([])
    setView('done')
  }

  // B2: Retry fetching vendors
  function handleRetry() {
    setLoading(true)
    setError(null)
    setReloadKey((prev) => prev + 1)
  }

  // B3-B5: Choose which page to display
  let content

  if (loading) {
    content = <Loading />
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={handleRetry}
      />
    )
  } else if (view === 'cart') {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    )
  } else if (view === 'done') {
    content = (
      <section className="card">
        <h2>Order placed!</h2>

        <p>
          Thank you, {lastOrder?.name}!
        </p>

        <p>
          Mahallah: {lastOrder?.mahallah}
        </p>

        <p>
          Pickup time: {lastOrder?.pickupTime}
        </p>

        <p>
          Total: RM {lastOrder?.total.toFixed(2)}
        </p>

        <button
          type="button"
          className="btn"
          onClick={() => setView('menu')}
        >
          Back to Vendors
        </button>
      </section>
    )
  
  } else {
    content = (
      <>
        {/* B6: Daily Special Countdown */}
        {specialItem && (
          <DailySpecial
            item={specialItem}
            endTime="22:00"
          />
        )}

        <section>
          <h2 className="section-title">
            Choose a vendor
          </h2>

          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={
                  vendor.id === selectedVendorId
                }
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>

        {selectedVendor && (
          <section>
            <h2 className="section-title">
              Menu: {selectedVendor.name}
            </h2>

            <MenuList
              items={selectedVendor.menu}
              onAdd={handleAddToCart}
            />
          </section>
        )}
      </>
    )
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />

      <main className="container">
        {content}
      </main>

      <Footer />
    </>
  )
}

export default App
