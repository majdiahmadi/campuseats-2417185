# AI Usage Log

I used **ChatGPT (OpenAI)** during my CampusEats React labs. I mainly used it to explain things I did not understand, help with errors, and check my work. I still needed to compare the suggestions with my lab instructions and test them in my project.

## Week 1

### Tool used

- ChatGPT (OpenAI)

### What I asked for

I asked how to set up React with Vite, use JSX, and make simple components. I also asked for help when npm could not find `package.json` and when my app tried to load a missing `hero.png` file.

### What I used or changed

- Ran npm commands in the correct folder.
- Removed the starter code I did not need.
- Created `Welcome.jsx` and `CourseInfo.jsx` and added them to `App.jsx`.
- Checked my work against the Week 1 lab sheet.

### One thing AI got wrong

The suggested code still tried to import `hero.png`, even though the file was not there. I fixed `App.jsx` so it used my required components instead.

### What I learned

I learned how to start a React project, write JSX, and split a page into smaller components.

---

## Week 2

### Tool used

- ChatGPT (OpenAI)

### What I asked for

I asked about Git commands, React props and state, and how to make an Add to Cart feature. I also asked for help fixing a syntax error in `vendors.js` and reviewing some of my components.

### What I used or changed

- Fixed the error in `vendors.js`.
- Used `useState()` to store cart items in `App.jsx`.
- Passed the Add to Cart function to other components through props.
- Updated the cart badge in the Header.
- Used Git to check and save my work.

### One thing AI got wrong

At one point, `cartCount` was declared twice in `Header.jsx`. This caused an error. I removed the extra declaration and used the value passed from `App.jsx`.

### What I learned

I learned how props help components communicate, how state changes the screen, and how Git tracks my changes.

---

## Week 3

### Tool used

- ChatGPT (OpenAI)

### What I asked for

I asked for help with Lab 3 Part B, including my own restaurant, JSON data, fetching vendors, cart quantities, checkout validation, and the Daily Special countdown. I also asked about loading errors, missing fields in the vendor data, and lint problems.

### What I used or changed

- Created **Jackal's Corner** with 10 food items in five categories.
- Moved vendor data to `public/api/vendors.json` and removed the old `vendors.js` file.
- Replaced the example restaurants with Jackal's Corner and data shared by three classmates.
- Kept the original IDs for the classmates' restaurants and food items.
- Updated `MenuItemCard.jsx` to handle optional fields such as `description` and `available`.
- Added loading, error, and retry handling when fetching vendors.
- Built cart quantity controls, item removal, total price calculation, and checkout validation.
- Added the Daily Special countdown for Jackal's Signature Chicken Chop.
- Fixed lint issues and checked the production build.

The three classmates' restaurants were Sarap Pagi (8 items), Mahasiswa Vendor (5 items), and Chef Haddif Expert (8 items).

### One thing AI got wrong

At first, the suggestion was to rename an example restaurant. That was not what I needed for the lab. I clarified that I had to make my own restaurant.

I also had trouble because I was editing an old vendor data file while the app was reading `public/api/vendors.json`. I checked the fetch path, updated the correct file, and confirmed the data using PowerShell.

### What I learned

I learned how to fetch JSON data, deal with loading errors, use `reduce()` for cart totals, validate a form, and clean up a countdown timer with `clearInterval()`. I also learned to check the actual file the app is using when something does not appear.

---

## Week 4

### Tool used

- ChatGPT (OpenAI)

### What I asked for

I asked how to add React Router, separate my pages, use Context for the cart, and make custom hooks. I also asked how to save cart and order data with `localStorage` and how to keep my Daily Special working after moving the code.

I asked for help checking the new pages, fixing layout concerns, removing unused files, understanding PowerShell errors, and updating my Git and documentation.

### What I used or changed

- Added routes for Home, Vendor, Cart, Orders, and Not Found.
- Created `Layout.jsx` so the Header and Footer stay on every page.
- Created `useVendors.js`, `useCart.js`, and `useLocalStorage.js`.
- Used `CartProvider.jsx` and `cart-context.js` to share cart and order state.
- Updated `Header.jsx`, `VendorCard.jsx`, and `MenuList.jsx` to use the new setup.
- Kept the existing checkout and quantity controls working.
- Saved cart items and order history in the browser.
- Added the Daily Special to the Home page and linked it to Jackal's Corner.
- Removed the old `components/CartPage.jsx` and a repeated Daily Special heading.
- Checked the app in the browser and ran `npm run lint` and `npm run build`.
- Updated `README.md`, `EXPLAIN.md`, and my reflection.

### One thing AI got wrong

An early plan to replace `App.jsx` did not fully cover what would happen to my Daily Special. I made sure to add it to `HomePage.jsx` before changing the main app structure.

I also found that the Daily Special heading appeared twice. I removed the extra heading without changing the countdown component.

### What I learned

I learned how React Router, Context, and custom hooks fit together. I also learned how to keep data after a refresh and how to move code without losing older features.

I accidentally pasted PowerShell output back into the terminal once, which caused several errors. I learned to copy only the commands and check the project again before assuming something was broken.

### How I checked AI suggestions

I used the suggestions as a guide, but I still compared them with the lab instructions and my own code. I tested the cart, checkout, orders, and countdown after making changes. This showed me why it is important to check AI answers instead of copying everything without testing.
