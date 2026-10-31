
# CampusEats

**A React-based campus food ordering application developed for BICS 3301 - Cross-Platform Software Development at International Islamic University Malaysia (IIUM).**

CampusEats is a coursework project that allows users to browse campus food vendors, view restaurant menus, add food items to a shopping cart, complete simulated checkout, and view order history.

The application is developed progressively through weekly practical labs to learn React and cross-platform software development concepts.

> **Project Status:** React Weeks 1-4 completed. The application includes React Router, Context API, custom hooks, localStorage persistence, and a Daily Special countdown.

## Features

### Implemented (Weeks 1-4)

**Vendor and Menu**
- Browse campus food vendors.
- View each vendor's menu on a separate page.
- View food names, descriptions, categories, and prices in RM.
- See vendor opening status and food availability.
- Fetch vendor data from a local JSON API using `fetch()`.
- Display loading and error messages.
- Retry loading vendor data if an error occurs.
- Navigate between vendors using React Router.

**Shopping Cart**
- Add available food items to the cart.
- Increase the quantity when the same item is added again.
- Increase or decrease quantities using + and - buttons.
- Remove items from the cart.
- Display the total cart quantity in the Header.
- Calculate the total price automatically.
- Share shopping cart state using React Context.
- Access cart actions through the custom `useCart()` hook.
- Preserve cart items after refreshing the browser using localStorage.

**Checkout**
- Enter a customer name.
- Select a mahallah.
- Choose a pickup time.
- Validate user input before placing an order.
- Display error messages for invalid inputs.
- Create a simulated order after successful checkout.
- Clear the shopping cart after an order is placed.
- Navigate automatically to the Orders page.

**Order History**
- View previously placed orders.
- Display order details, items, and total prices.
- Display the initial order status as Received.
- Store order history in localStorage.
- Preserve order history after refreshing the browser.

**React Router Navigation**
- Home page at `/`.
- Vendor menu page at `/vendor/:id`.
- Shopping cart at `/cart`.
- Order history at `/orders`.
- Not-found page for invalid routes.
- Shared Header and Footer through the Layout component.
- Navigation links implemented using `Link` and `NavLink`.

**Custom Hooks and Context**
- `useVendors()` for fetching restaurant data.
- `useCart()` for accessing shared shopping cart state.
- `useLocalStorage()` for browser persistence.
- `CartProvider` for managing shopping cart and order history.

**Personal Feature - Daily Special Countdown**
- Display a featured menu item from Jackal's Corner.
- Show a live countdown to the special's end time.
- Update the countdown every second using `setInterval()`.
- Clean up the timer using `clearInterval()`.
- Display remaining time in HH:MM:SS format.
- Show an expired message when the special has ended.
- Display the Daily Special on the Home page.
- Provide a link from the Daily Special to Jackal's Corner menu.

### Planned Features

The following features may be implemented in future labs:

- Firebase integration and database features.
- Authentication and user management.
- Additional order management features.
- Other functionality introduced in upcoming practical labs.

## Tech Stack

- **React** - Building reusable user interface components.
- **JavaScript (JSX)** - Application logic and component structure.
- **Vite** - Development server and production build tool.
- **React Router** - Client-side navigation and page routing.
- **React Context API** - Shared shopping cart and order state.
- **React Hooks** - State management, side effects, and reusable logic.
- **localStorage** - Browser-based cart and order persistence.
- **CSS** - Application styling.
- **JSON** - Mock vendor and menu data.
- **Git and GitHub** - Version control and development history.

## Getting Started

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) with npm
- [Git](https://git-scm.com/)

### Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/majdiahmadi/campuseats-2417185.git
```

**2. Open the project folder**

```bash
cd campuseats-2417185
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the Local URL displayed by Vite, usually:

http://localhost:5173/

### Other Commands

```bash
npm run build
npm run preview
npm run lint
```

## Project Structure

```text
campuseats-2417185/
|
|-- public/
|   `-- api/
|       `-- vendors.json
|
|-- src/
|   |-- components/
|   |   |-- CartItem.jsx
|   |   |-- CheckoutForm.jsx
|   |   |-- DailySpecial.jsx
|   |   |-- Footer.jsx
|   |   |-- Header.jsx
|   |   |-- Layout.jsx
|   |   |-- MenuItemCard.jsx
|   |   |-- MenuList.jsx
|   |   |-- Status.jsx
|   |   `-- VendorCard.jsx
|   |
|   |-- context/
|   |   |-- cart-context.js
|   |   `-- CartProvider.jsx
|   |
|   |-- hooks/
|   |   |-- useCart.js
|   |   |-- useLocalStorage.js
|   |   `-- useVendors.js
|   |
|   |-- pages/
|   |   |-- CartPage.jsx
|   |   |-- HomePage.jsx
|   |   |-- NotFoundPage.jsx
|   |   |-- OrdersPage.jsx
|   |   `-- VendorPage.jsx
|   |
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|
|-- AI_USAGE.md
|-- EXPLAIN.md
|-- REFLECTION.md
|-- README.md
|-- package.json
|-- package-lock.json
|-- index.html
`-- vite.config.js
```

## Weekly Development Progress

| Week | Focus | Status |
|---|---|---|
| 1 | Git/GitHub setup, JSX and React components | Completed |
| 2 | Props, useState, vendor selection and Add to Cart | Completed |
| 3 | Cart quantities, checkout validation, API fetching and Daily Special countdown | Completed |
| 4 | React Router, Context, custom hooks, localStorage and order history | Completed |

The project uses Git commits and weekly tags to track development progress.

See the [repository tags](https://github.com/majdiahmadi/campuseats-2417185/tags) for available milestones.

## React Concepts Learned

### Week 1

- React components and JSX.
- Declarative user interfaces.
- Reusable components.
- React fragments.
- Basic application structure.

### Week 2

- Props and state.
- `useState()`.
- Rendering lists using `.map()`.
- Passing functions between components.
- Updating the UI when state changes.

### Week 3

- Controlled form inputs.
- Form validation.
- Lifting state up.
- Calculating derived values using `reduce()`.
- Fetching data using `useEffect()`.
- Loading and error handling.
- Cleanup using `AbortController`.
- Countdown timers using `setInterval()` and `clearInterval()`.

### Week 4

- Client-side routing using React Router.
- Dynamic routes using URL parameters.
- Navigation using `Link` and `NavLink`.
- Shared page layouts using `Outlet`.
- Global state management using React Context.
- Accessing shared state using custom hooks.
- Creating reusable hooks.
- Persisting state using localStorage.
- Organizing an application into components, pages, hooks, and context.
- Managing shopping cart and order history across routes.

## Application Routes

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Restaurant list and Daily Special |
| `/vendor/:id` | VendorPage | Selected restaurant menu |
| `/cart` | CartPage | Shopping cart and checkout |
| `/orders` | OrdersPage | Order history |
| `*` | NotFoundPage | Invalid or unknown routes |

All pages share the common `Layout` component.

## State Management

CampusEats uses React Context to manage shopping cart and order history.

The `CartProvider` component provides shared cart data and functions to the application.

The `useCart()` custom hook allows components to access this shared state without passing cart props through multiple components.

For example:

1. A user adds an item from the restaurant menu.
2. `MenuList` calls `addToCart()` through `useCart()`.
3. `CartProvider` updates the cart state.
4. The Header displays the updated cart quantity.
5. The Cart page displays the updated items and total.

This structure reduces prop drilling and improves code organization.

## Browser Persistence

CampusEats uses the custom `useLocalStorage()` hook to preserve shopping cart and order information.

The following localStorage keys are used:

- `campuseats-cart`
- `campuseats-orders`

Cart contents and order history remain available after a browser refresh when localStorage is available.

This information is stored locally in the user's browser and is not synchronized between devices.

## Personal Feature - Daily Special

My student ID is **2417185**.

The final digit, **5**, corresponds to the Daily Special Countdown feature.

The featured item is **Jackal's Signature Chicken Chop** from Jackal's Corner.

The feature uses:

- `useState()` to store remaining time.
- `useEffect()` to update and clean up the countdown.
- `setInterval()` to refresh the timer every second.
- `clearInterval()` to prevent unnecessary background intervals.

The countdown ends at **22:00 based on the device's local time**.

When the time expires, the application displays:

**Today's special has ended.**

The Home page also provides a direct link to Jackal's Corner menu.

## Testing

The application was tested for the following functionality:

- Restaurant data fetching.
- Vendor navigation.
- Shopping cart operations.
- Quantity adjustments.
- Cart total calculations.
- Checkout validation.
- Successful order placement.
- Navigation to order history.
- Cart persistence after refresh.
- Order history persistence after refresh.
- Invalid route handling.
- Daily Special countdown.
- Navigation from Daily Special to vendor menu.

### Code Quality

The project was checked using:

```bash
npm run lint
npm run build
```

The linting process completed without warnings or errors, and the Vite production build completed successfully.

## Academic Documentation

- [AI_USAGE.md](AI_USAGE.md) - Records AI assistance used during development.
- [REFLECTION.md](REFLECTION.md) - Contains weekly reflections and learning experiences.
- [EXPLAIN.md](EXPLAIN.md) - Explains the React architecture, application features, state management, personal feature, and testing.

ChatGPT was used to explain React concepts, assist with debugging, review implementation decisions, and prepare documentation.

The code was integrated into the coursework project and tested against the practical lab requirements.

## Project Limitations

CampusEats is currently a front-end coursework prototype.

- Vendor data is loaded from a local JSON file.
- Orders are simulated and are not sent to a real restaurant.
- Cart and order history are stored in browser localStorage.
- Data is not synchronized between devices.
- Real payment processing is not implemented.
- Firebase integration is not implemented yet.
- The Daily Special currently uses a fixed featured menu item.

## Vendor Credits

The following vendor information was documented during the earlier development stages.

| Restaurant | Matric Number | Menu Items | Categories |
|---|---|---|---|
| Jackal's Corner | 2417185 | 10 | 5 |
| Sarap Pagi | 2415663 | 8 | 4 |
| Mahasiswa Vendor | 2410319 | 5 | 2 |
| Chef Haddif Expert | 2412181 | 8 | 3 |

The vendor records currently available in the application are determined by `public/api/vendors.json`.

### My Restaurant

**Jackal's Corner (2417185)**

- Location: Nilai, Negeri Sembilan
- Operating Hours: 8:00 AM - 10:00 PM
- Menu: 10 items across 5 categories
- Categories: Western, Pasta, Rice, Drinks, and Desserts
- Daily Special: Jackal's Signature Chicken Chop

### Classmates' Restaurant Data

The earlier development stages included restaurant and menu data shared by classmates.

The shared information was used as mock vendor data for the CampusEats application.

### Acknowledgement

Restaurant and menu data were shared between classmates during development. React components, shopping cart functionality, checkout, API fetching, routing integration, and the Daily Special feature were developed as part of my own CampusEats coursework.

---

*This repository is an academic learning project and remains under development for future practical labs.*
