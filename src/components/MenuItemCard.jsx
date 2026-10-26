
function MenuItemCard({ item, onAdd }) {
  // Items are available unless explicitly marked false
  const isAvailable = item.available !== false

  return (
    <article className="card menu-card">
      <div className="thumb" aria-hidden="true">
        {item.name.charAt(0)}
      </div>

      <p className="tag">{item.category}</p>

      <h3>{item.name}</h3>

      {item.description && (
        <p className="muted">{item.description}</p>
      )}

      <p className="price">
        RM {item.price.toFixed(2)}
      </p>

      <button
        type="button"
        className="btn"
        disabled={!isAvailable}
        onClick={() => onAdd(item)}
      >
        {isAvailable ? 'Add to cart' : 'Sold out'}
      </button>
    </article>
  )
}

export default MenuItemCard
