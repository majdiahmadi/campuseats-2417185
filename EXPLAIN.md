
# CampusEats — React Milestone Explanation

**Student ID:** 2417185  
**Course:** BICS 3301 — Cross-Platform Software Development  
**Restaurant:** Jackal's Corner  
**Framework:** React with Vite

## 1. Project Overview

CampusEats is a React-based campus food ordering application developed through the Week 1–4 practical labs.

My restaurant is **Jackal's Corner**, located in Nilai, Negeri Sembilan. The application allows users to browse restaurants, view menus, add food items to a shopping cart, complete a simulated checkout, and review their orders.

## 2. Component Architecture

The application uses reusable components, custom React hooks, React Context, and React Router.

The main architecture is:

```text
BrowserRouter
└── CartProvider
    └── Routes
        └── Layout
            ├── Header
            ├── Outlet
            │   ├── HomePage
            │   ├── VendorPage
            │   ├── CartPage
            │   ├── OrdersPage
            │   └── NotFoundPage
            └── Footer
```

### Components

Reusable user interface elements include:

- `VendorCard.jsx` — Displays restaurant information.
- `MenuList.jsx` — Displays menu items for a restaurant.
- `MenuItemCard.jsx` — Displays an individual food item.
- `CartItem.jsx` — Displays an item in the shopping cart.
- `CheckoutForm.jsx` — Collects and validates checkout information.
- `DailySpecial.jsx` — Displays the featured food item and countdown.
- `Header.jsx` — Provides navigation and the cart badge.
- `Footer.jsx` — Displays the application footer.
- `Layout.jsx` — Provides the shared layout for all pages.

### Pages

The application separates its main views into:

- `HomePage.jsx`
- `VendorPage.jsx`
- `CartPage.jsx`
- `OrdersPage.jsx`
- `NotFoundPage.jsx`

### Custom Hooks

- `useVendors.js` — Handles fetching restaurant data.
- `useCart.js` — Provides access to shared cart state and actions.
- `useLocalStorage.js` — Provides persistent browser storage.

### React Context

`CartProvider.jsx` manages the shared shopping cart and order history, while `cart-context.js` defines the context.

This structure separates reusable UI, application pages, and state-management logic.

## 3. State Management and Data Flow

Restaurant information is fetched from `/api/vendors.json` using the custom `useVendors()` hook.

The application uses `CartProvider` to manage shared shopping cart state. The custom `useCart()` hook allows components to access shopping cart actions without passing the same props through multiple parent components.

### Example: Adding an Item to the Cart

1. The user opens Jackal's Corner.
2. The user clicks **Add to Cart** on a menu item.
3. `MenuItemCard` calls the function provided by `MenuList`.
4. `MenuList` obtains `addToCart` using the `useCart()` hook.
5. `CartProvider` updates the shared shopping cart state.
6. The Header cart badge updates automatically.
7. The Cart page displays the updated items, quantities, and total price.

This approach reduces prop drilling and makes the shopping cart accessible across different pages.

## 4. React Router Navigation

The application uses React Router to manage navigation.

| Route | Purpose |
|---|---|
| `/` | Display restaurants and today's special |
| `/vendor/:id` | Display a selected restaurant's menu |
| `/cart` | Display the shopping cart and checkout |
| `/orders` | Display previously placed orders |
| `*` | Display the not-found page |

The shared `Layout` component displays the Header and Footer across different pages.

`NavLink` is used for navigation links in the Header, while `Link` is used for restaurant cards and other page links.

React Router allows users to navigate between views without requiring a full browser reload.

## 5. Local Storage Persistence

The application uses the custom `useLocalStorage()` hook to save shopping cart and order information in the browser.

Two storage keys are used:

- `campuseats-cart` — Stores shopping cart items.
- `campuseats-orders` — Stores previously placed orders.

The hook initializes state from browser local storage and updates the stored data when the corresponding state changes.

As a result:

1. Cart items remain available after refreshing the browser.
2. Order history remains available after refreshing the browser.
3. Navigation between pages does not reset the cart.

This is browser-based persistence rather than server-side storage.

## 6. Personal Feature — Daily Special Countdown

Based on the final digit of my student ID (**5**), my assigned personal feature is **Daily Special with Countdown**.

The featured menu item is **Jackal's Signature Chicken Chop** from Jackal's Corner.

The feature is implemented in `DailySpecial.jsx`.

### React Concepts Used

- `useState()` stores the remaining countdown time.
- `useEffect()` manages the countdown lifecycle.
- `setInterval()` updates the countdown every second.
- `clearInterval()` cleans up the interval when the component unmounts.
- Helper functions calculate and format the remaining time.

### Countdown Implementation

The countdown is calculated using the current device time and the configured ending time.

The remaining time is displayed in `HH:MM:SS` format.

The Daily Special ends at **22:00 according to the device's local time**.

When the remaining time reaches zero, the component displays:

**Today's special has ended.**

The countdown does not display a negative value.

### Week 4 Integration

The Home page displays the featured item and its countdown.

A link labelled **View Jackal's Corner Menu** allows the user to navigate directly to the restaurant's menu page.

The featured item is selected using its unique ID:

`2417185-jc-1`

The restaurant is identified using:

`2417185-jackals-corner`

The current implementation uses a fixed featured menu item rather than rotating specials automatically.

## 7. Checkout and Order History

Users can add menu items to the cart, change quantities, remove items, and complete a simulated checkout.

The checkout form collects customer information and validates the submitted details.

### Checkout Process

1. The user reviews the shopping cart.
2. The user enters the required checkout information.
3. The form validates the information.
4. A valid submission creates an order record.
5. The order is added to the order history.
6. The shopping cart is cleared.
7. The application navigates to the Orders page.

Each order contains information about the customer, purchased items, total price, and order status.

The initial order status is **Received**.

Order history is saved in browser local storage and remains available after refreshing the page.

## 8. Testing

The application was tested during development to verify its main features.

| Test | Expected Outcome |
|---|---|
| Load restaurant data | Restaurant cards appear |
| Open Jackal's Corner | Correct restaurant menu appears |
| Add an item to cart | Cart badge increases |
| Add the same item twice | Item quantity increases |
| Change item quantity | Total price recalculates |
| Remove an item | Item disappears from cart |
| Refresh cart page | Cart contents persist |
| Submit invalid checkout | Validation prevents submission |
| Submit valid checkout | Order is created |
| Complete checkout | Cart becomes empty |
| Open order history | Previous orders are displayed |
| Refresh orders page | Order history persists |
| Navigate to invalid route | Not-found page appears |
| Display Daily Special | Featured item and countdown appear |
| End countdown | Expired message appears |
| Click Daily Special link | Correct vendor page opens |

### Code Quality Checks

The project was also checked using:

```powershell
npm run lint
npm run build
```

The linting process completed with **0 warnings and 0 errors**, and the Vite production build completed successfully.

## 9. Challenges and Improvements

One important change during development was migrating from the Week 3 application structure to the Week 4 React Router and Context architecture.

Previously, the application managed navigation and shopping cart state directly within `App.jsx`.

The Week 4 implementation separates pages into individual components and moves shared shopping cart state into `CartProvider`.

This makes the application easier to maintain, reduces prop drilling, and supports navigation between pages.

Another improvement was removing unused Week 3 compatibility code after the migration was completed.

The original CSS was retained to preserve the CampusEats design.

## 10. Current Limitations

CampusEats is a coursework prototype.

The current implementation has several limitations:

- Restaurant data is loaded from a local JSON file.
- Shopping cart and order history are stored in browser local storage.
- Orders are not synchronized between different devices.
- The checkout process does not process real payments.
- The Daily Special uses a fixed featured item.
- There is no production backend or restaurant order management system.

These limitations are appropriate for the current React development milestone.

## 11. AI Assistance

AI assistance was used during development for:

- Understanding React concepts.
- Explaining React Router navigation.
- Understanding React Context and custom hooks.
- Reviewing and debugging code.
- Improving component organization.
- Checking functionality and testing procedures.
- Preparing project documentation.

The separate `AI_USAGE.md` file records AI assistance and development reflections.

The project was developed and tested as part of the BICS 3301 practical coursework.

## 12. Conclusion

Through the Week 1–4 CampusEats development activities, I implemented a React application using reusable components, hooks, Context, React Router, and browser local storage.

The application supports restaurant browsing, menu viewing, shopping cart management, checkout, order history, and the Daily Special countdown feature.

The project demonstrates how React components and shared state can work together to build an interactive single-page application.
