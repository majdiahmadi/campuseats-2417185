
# CampusEats

**A React-based campus food ordering application developed for BICS 3301 – Cross-Platform Software Development at International Islamic University Malaysia (IIUM).**

CampusEats is a coursework project that allows users to browse campus food vendors, view their menus, add food items to a shopping cart, and place simulated orders.

The application is developed through weekly labs to learn React and cross-platform development concepts.

> **Project Status:** Weeks 1–3 completed. More features will be added in future labs.

## Features

### Implemented (Weeks 1–3)

**Vendor and Menu**
- Browse campus food vendors.
- Select a vendor to view its menu.
- View food names, descriptions, categories, and prices in RM.
- See vendor opening status and food availability.
- Load vendor data from a local JSON API using `fetch()`.
- Display loading and error messages.
- Retry loading vendor data if an error occurs.

**Shopping Cart**
- Add available food items to the cart.
- Increase the quantity when the same item is added again.
- Increase or decrease quantities using + and - buttons.
- Remove items from the cart.
- Display the total quantity in the header.
- Calculate the total price automatically.
- Switch between the Vendors and Cart views.

**Checkout**
- Enter a customer name.
- Select a mahallah.
- Choose a pickup time.
- Validate user input before placing an order.
- Display error messages for invalid inputs.
- Show an order confirmation with pickup time and total price.
- Clear the cart after an order is placed.

**Personal Feature - Daily Special Countdown**
- Display a daily special menu item.
- Show a live countdown to the special's end time.
- Update the countdown every second using `setInterval`.
- Stop the timer using `clearInterval` during cleanup.
- Show a message when the special has ended.

### Planned Features

The following features are planned for future labs:

- Multiple pages using React Router.
- Shared state using React Context and custom hooks.
- Local storage to keep cart items after refreshing.
- Firebase integration and database features.
- Other features based on future lab requirements.

## Tech Stack

- **React** - Building the user interface.
- **JavaScript (JSX)** - Application logic and components.
- **Vite** - Development server and build tool.
- **CSS** - Styling the application.
- **JSON** - Storing mock vendor and menu data.
- **Git and GitHub** - Version control and project tracking.

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

Open the URL shown in the terminal, usually:

http://localhost:5173

### Other Commands

```bash
npm run build
npm run preview
npm run lint
```

## Project Structure

```text
campuseats-2417185/
├── public/
│   └── api/
│       └── vendors.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── VendorCard.jsx
│   │   ├── MenuItemCard.jsx
│   │   ├── MenuList.jsx
│   │   ├── Status.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutForm.jsx
│   │   └── DailySpecial.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── AI_USAGE.md
├── REFLECTION.md
├── package.json
└── README.md
```

## Weekly Development Progress

| Week | Focus | Status |
|------|-------|--------|
| 1 | Git/GitHub setup, JSX and React components | Completed |
| 2 | Props, useState, vendor selection and Add to Cart | Completed |
| 3 | Cart quantities, checkout validation, API fetching and Daily Special countdown | Completed |
| 4 | React Router, Context, custom hooks and local storage | Planned |

The project uses Git commits and weekly tags to track development progress.

See the [repository tags](https://github.com/majdiahmadi/campuseats-2417185/tags) for available milestones.

## React Concepts Learned

### Week 1
- React components and JSX.
- Declarative UI.
- Reusable components.
- React fragments.

### Week 2
- Props and state.
- `useState`.
- Rendering lists with `.map()`.
- Passing functions between components.
- Updating the UI when state changes.

### Week 3
- Controlled form inputs.
- Form validation.
- Lifting state up.
- Calculating derived values using `reduce()`.
- Fetching data using `useEffect`.
- Loading and error handling.
- Cleanup using `AbortController`.
- Countdown timers using `setInterval` and `clearInterval`.

## Academic Documentation

- [AI_USAGE.md](AI_USAGE.md) - Records how AI tools were used during each lab, including what was kept, changed, and corrected.
- [REFLECTION.md](REFLECTION.md) - Contains weekly reflections about what I learned and the challenges I faced.

ChatGPT was used to help explain React concepts, understand errors, and guide the implementation. The code was integrated into the coursework project and checked against the lab instructions.

## Project Limitations

CampusEats is currently a front-end application.

- Vendor data is loaded from a local JSON file.
- Orders are simulated and are not saved to a database.
- Cart data is stored in React state and resets after refreshing the page.
- React Router and Firebase are not implemented yet.

## Vendor Credits

Kafe Mahallah Ali is my own vendor.

Additional vendor data should be credited to the classmates who provided it, where applicable.

---

*This repository is an academic learning project and is still under development.*
