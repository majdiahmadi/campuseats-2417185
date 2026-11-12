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

---

## Week 5

### Tool used

- ChatGPT (OpenAI)

### What I asked for

I asked for help understanding Firebase Authentication and how to connect it to my existing CampusEats React application.

I wanted to understand how Firebase works, how to register and log in users, and how to protect pages that should only be accessible after login.

I also asked for help with:

- Setting up Firebase and connecting it using `.env.local`.
- Understanding `firebase.js` and the Firebase configuration.
- Creating an `AuthProvider` to manage authentication.
- Using `useAuth()` to access the signed-in user.
- Updating my existing `App.jsx` for Lab 5.
- Updating `Header.jsx` to show the user's name and a Log out button.
- Adding the Login and Register pages.
- Understanding how `ProtectedRoute` works.
- Checking whether my existing CSS needed changes.
- Updating my documentation after completing Lab 5.

### What I used or changed

- Connected CampusEats to my Firebase project.
- Added Firebase configuration using environment variables in `.env.local`.
- Used Firebase Authentication for email/password registration and login.
- Added Google sign-in and logout functionality.
- Created `AuthProvider.jsx` to manage the authentication state.
- Added `auth-context.js` and `useAuth.js` so components can access the current user.
- Used `onAuthStateChanged()` to listen for authentication changes.
- Added a loading state while Firebase checks whether a user is signed in.
- Added `LoginPage.jsx` and `RegisterPage.jsx`.
- Added error handling to show understandable authentication messages.
- Created `ProtectedRoute.jsx` to restrict access to the Cart and Orders pages.
- Updated `App.jsx` to wrap the application with `AuthProvider`.
- Kept `CartProvider` inside `AuthProvider` so the existing cart system continues to work.
- Updated `Header.jsx` to show a Log in link for guests.
- Added the signed-in user's name and a Log out button to the Header.
- Kept the existing vendor navigation and shopping cart badge.
- Updated the Daily Special feature for signed-in users.
- Reviewed `index.css` and confirmed the required Week 5 authentication styles were already included.
- Updated the project documentation to reflect the new authentication features.

### One thing AI got wrong

The first suggestions focused mainly on updating `App.jsx` and `Header.jsx`. However, changing only these two files would not be enough to make Firebase Authentication work.

I needed the other files, including `AuthProvider.jsx`, `useAuth.js`, `ProtectedRoute.jsx`, `LoginPage.jsx`, and `RegisterPage.jsx`, to complete the authentication flow.

I also initially thought I might need to add more CSS for the login and registration pages. After reviewing the stylesheet, I found that the lecturer had already provided the required styles.

This reminded me to check the existing project before adding or replacing code unnecessarily.

### What I learned

I learned that Firebase Authentication provides a way to manage real user accounts without building my own authentication server.

I also learned the difference between authentication and authorization.

Authentication checks who the user is. In my application, `ProtectedRoute` checks whether the user is signed in before allowing access to certain pages.

I learned how `onAuthStateChanged()` helps the application detect login and logout changes and restore authentication state after refreshing the browser.

I also understood that `AuthProvider` follows a similar pattern to `CartProvider`. Both use React Context to share information across components, but they manage different things.

Another important lesson was that protecting a page in React is not the same as securing a database. Firebase security rules will be needed when the application starts storing data in Firestore.

### How I checked AI suggestions

I compared the suggestions with the Week 5 lab sheet and the code I had already written in Weeks 1–4.

I reviewed the authentication flow, including registration, login, logout, navigation, and access to protected pages.

I also checked that the existing shopping cart, order history, and restaurant navigation were not accidentally removed while adding authentication.

The main lesson was to understand how the new Firebase components connect to the existing application rather than simply replacing files with AI-generated code.

---

## Overall Reflection on AI Usage

Across Weeks 1–5, I used ChatGPT mainly as a learning and debugging assistant.

It helped me understand React concepts, find mistakes, and organize my code. However, I also found that AI suggestions do not always match my existing project or the lecturer's requirements.

When this happened, I needed to check the actual files, compare the instructions, and make adjustments.

I learned that AI can help me understand a problem, but I still need to know what the code does and test whether it works in my application.

---

## Week 6

### Tool used

- ChatGPT (OpenAI)

### What I asked for

I asked for help with Lab 6, mainly about connecting Cloud Firestore to my existing CampusEats application. I wanted to understand how to move my restaurant menus and orders from local storage into a cloud database.

I also asked for help with:

- Setting up Cloud Firestore in my Firebase project.
- Creating a services folder to handle Firestore operations.
- Uploading restaurant and menu data using the `/seed` page.
- Replacing `fetch()` with `onSnapshot()` for real-time updates.
- Saving orders to Firestore instead of `localStorage`.
- Updating the Orders page to show live order statuses.
- Adding functions to change pickup times and cancel orders.
- Updating my Daily Special countdown to use a Firestore Timestamp.
- Fixing lint warnings and checking my existing code.

### What I used or changed

- Connected Cloud Firestore to my existing Firebase application.
- Created `vendors.js` and `orders.js` inside the services folder.
- Added a Seed page to upload my restaurant data to Firestore.
- Updated `useVendors.js` to listen for changes using `onSnapshot()`.
- Created `useVendor.js` to load restaurant details and menu items separately.
- Updated the Home and Vendor pages to read data from Firestore.
- Changed the order system so completed orders are saved in Firestore while the cart stays in `localStorage`.
- Added `useMyOrders.js` to load orders belonging to the signed-in user.
- Created an order status tracker with Received, Preparing, Ready, and Collected stages.
- Added functions to update pickup times and cancel orders.
- Updated my Daily Special feature to use the `special` and `specialEndsAt` fields.
- Updated the seeding function to preserve the Daily Special Timestamp.
- Used `npm run lint` and `npm run build` to check my code.

### One thing AI got wrong

One problem I faced was when the Home page showed "No restaurants are available at the moment." At first, I was focusing on the React code, but the real problem was that my Firestore database was still empty.

I checked Firebase Console and found that the vendors had not been uploaded yet. I then needed to use the `/seed` page to upload the data from `vendors.json`.

I also received a React lint warning because the suggested `useVendors.js` code called `setLoading()` and `setError()` directly inside `useEffect()`. I fixed this by moving those calls into the retry function.

These problems reminded me that AI-generated code can still have issues, even when the overall approach is correct.

### What I learned

I learned how Cloud Firestore stores information using collections and documents. I also learned that a restaurant's menu can be stored as a subcollection instead of keeping everything in one JSON file.

Another important thing I learned was how `onSnapshot()` works. Unlike `fetch()`, which loads data once, `onSnapshot()` listens for changes and updates the application automatically.

I also understood why it is better to keep Firestore functions in separate service files instead of putting all the database code inside React components.

For my Daily Special feature, I learned how to use a Firestore Timestamp to control the countdown instead of using a fixed time in the code.

Overall, Week 6 helped me understand how a React application can work with a real cloud database.

### How I checked AI suggestions

I compared the suggested code with my Week 6 lab sheet and the files I had already created in previous weeks.

I tried to keep my existing cart, authentication, restaurant pages, and Daily Special working while adding Firestore.

I also checked the Firebase Console when my restaurant data did not appear and used the terminal to find lint and build problems.

This lab taught me that getting the code to compile is not enough. I also need to check the actual data in Firebase and test how the application behaves in the browser.

---
