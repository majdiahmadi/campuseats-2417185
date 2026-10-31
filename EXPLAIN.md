# CampusEats - React Milestone Explanation

**Student ID:** 2417185
**Course:** BICS 3301 - Cross-Platform Software Development
**My restaurant:** Jackal's Corner
**Built with:** React and Vite

## 1. About my project

CampusEats is a simple food ordering app that I built during React Labs 1-4. Users can choose a restaurant, look at its menu, add items to a cart, and place a sample order. They can also view their previous orders.

My restaurant is **Jackal's Corner** in Nilai, Negeri Sembilan. It has 10 menu items in five categories.

## 2. How I organized the app

In Week 4, I split the app into pages, reusable components, hooks, and Context. Before this, most of the app logic was inside `App.jsx`.

```text
BrowserRouter
`-- CartProvider
    `-- Routes
        `-- Layout
            |-- Header
            |-- Outlet
            |   |-- HomePage
            |   |-- VendorPage
            |   |-- CartPage
            |   |-- OrdersPage
            |   `-- NotFoundPage
            `-- Footer
```

Here is what each part does:

- **Pages:** Show the different parts of the app, such as Home, Cart, and Orders.
- **Components:** Reusable parts like `VendorCard`, `MenuItemCard`, `CartItem`, `CheckoutForm`, and `DailySpecial`.
- **Hooks:** Hold logic that can be reused, such as loading vendors or saving data.
- **Context:** Keeps the cart and orders in one shared place.

This makes the project easier for me to read and update.

## 3. How the shopping cart works

I use `CartProvider.jsx` to keep the cart and order information. Other components can get this data through the `useCart()` hook.

For example, when I add a food item:

1. I open a restaurant menu and click **Add to Cart**.
2. `MenuItemCard` calls the function passed to it by `MenuList`.
3. `MenuList` uses `useCart()` to get `addToCart()`.
4. `CartProvider` updates the cart.
5. The number in the Header changes, and the Cart page shows the new item.

Before Week 4, I passed more cart functions through props from `App.jsx`. Using Context means I no longer need to pass the same functions through several components.

## 4. Pages and navigation

I use React Router so the app can show different pages without doing a full page reload each time.

| Route | Page |
| --- | --- |
| `/` | Home page with restaurants and Daily Special |
| `/vendor/:id` | Menu for a restaurant |
| `/cart` | Cart and checkout |
| `/orders` | Order history |
| `*` | Not-found page |

The Header uses `NavLink`. Restaurant cards and the Daily Special use `Link`. After a successful checkout, `useNavigate()` sends the user to the Orders page.

`Layout.jsx` keeps the same Header and Footer on every page.

## 5. Saving the cart and orders

I created `useLocalStorage()` to save data in the browser. The app uses:

- `campuseats-cart` for cart items.
- `campuseats-orders` for placed orders.

I tested this by adding items, refreshing the page, and checking that they were still there. I also refreshed the Orders page after placing an order.

The data is only saved in that browser. It is not stored in an online database.

## 6. My personal feature: Daily Special countdown

My matric number ends with **5**, so my assigned feature is a Daily Special countdown.

I chose **Jackal's Signature Chicken Chop** from Jackal's Corner. The countdown ends at **10:00 PM (22:00)** based on the user's device time.

I used `useState()` to store the remaining time and `useEffect()` to update it every second. I also used `clearInterval()` so the timer stops when the component is removed.

This is part of the code in `DailySpecial.jsx`:

```jsx
const [remaining, setRemaining] = useState(
  () => getRemainingSeconds(endTime)
)

useEffect(() => {
  function updateCountdown() {
    setRemaining(getRemainingSeconds(endTime))
  }

  updateCountdown()
  const intervalId = setInterval(updateCountdown, 1000)

  return () => clearInterval(intervalId)
}, [endTime])
```

The remaining time appears as `HH:MM:SS`. After the time reaches zero, the app shows **"Today's special has ended."** instead of a negative countdown.

For Week 4, I also added the Daily Special to the Home page with a link to Jackal's Corner menu. The featured item is fixed for now; it does not change automatically each day.

## 7. Checkout and order history

On the Cart page, users can change quantities, remove food, and fill in the checkout form. The form checks the name, mahallah, and pickup time before accepting the order.

When a valid order is placed, the app saves it to the order history, clears the cart, and opens `/orders`. The new order starts with the status **Received**.

## 8. What I tested

| Test | Result |
| --- | --- |
| Open a restaurant from the Home page | Passed |
| Add the same item more than once | Passed |
| Change item quantities and totals | Passed |
| Refresh the Cart page | Cart stayed saved |
| Submit an empty or invalid checkout form | Form blocked the order |
| Place a valid order | Opened the Orders page |
| Refresh the Orders page | Order stayed saved |
| Open an unknown URL | Not-found page appeared |
| Open the Daily Special link | Opened Jackal's Corner |
| Check the countdown | Timer or expired message displayed |

I also ran:

```bash
npm run lint
npm run build
```

The last lint check showed **0 warnings and 0 errors**, and the build passed.

## 9. Problems I faced

The biggest change was moving from one main `App.jsx` file to separate pages and shared cart state. I needed to make sure that the cart, checkout, and Daily Special still worked after the changes.

At first, the Daily Special could have been left behind during the move. I made sure it was included on the Home page. I also removed a duplicate **Today's Special** heading and deleted an old `CartPage.jsx` that was no longer needed.

I checked the app in the browser after making these changes instead of relying only on the build result.

## 10. What the app cannot do yet

CampusEats is still a class project. It uses a local JSON file for restaurant data and browser storage for orders. There is no real payment, online database, or restaurant system connected to it.

## 11. AI help

I used ChatGPT to help me understand React, check errors, and work through the Week 4 changes. It also helped me organize my documentation. I checked the suggestions against my existing code and tested the app after making changes.

I wrote down the details in [AI_USAGE.md](AI_USAGE.md).

## 12. What I learned

These labs helped me understand how React components, hooks, routing, and shared state work together. I also learned that when I reorganize an app, I need to test older features again to make sure nothing has stopped working.
