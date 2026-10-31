
# AI Usage Log

## Week 1

### Tool(s)
- ChatGPT (OpenAI)

### What I Asked For
- Asked for step-by-step help to set up a React project using Vite.
- Asked how to fix npm errors caused by a missing `package.json`.
- Asked how to remove the default Vite starter files.
- Asked for help fixing an error related to a missing `hero.png` file.
- Asked for explanations about React components and JSX.
- Asked how to create and use `Welcome.jsx` and `CourseInfo.jsx`.
- Asked how to combine different components in `App.jsx`.

### What I Kept or Changed
- Followed the instructions to run npm commands in the correct project folder.
- Removed unnecessary starter code.
- Updated the React components based on the lab instructions.
- Used the suggested code to understand how React components work together.
- Checked my code against the lab sheet.

### One Thing AI Got Wrong and How I Fixed It
- The code still tried to import `hero.png`, but the image was missing.
- This caused an error when running the project.
- I fixed it by updating `App.jsx` to use the required `Welcome` and `CourseInfo` components.

---

## Week 2

### Tool(s)
- ChatGPT (OpenAI)

### What I Asked For
- Asked for explanations of Git commands such as `git add`, `git commit`, and `git push`.
- Asked how to check commit history in Git and GitHub.
- Asked for help fixing a syntax error in `vendors.js`.
- Asked how to create an Add to Cart feature using React.
- Asked for help updating `MenuItemCard.jsx`, `MenuList.jsx`, and `App.jsx`.
- Asked for code reviews of `Header.jsx`, `VendorCard.jsx`, `Footer.jsx`, and `main.jsx`.

### What I Kept or Changed
- Used the explanations to understand Git and React state.
- Fixed the syntax error in `vendors.js`.
- Updated the components to pass the `onAdd` function using props.
- Used `useState` to store cart items.
- Updated the cart badge to show the number of items.
- Checked the code against the lecturer's instructions.

### One Thing AI Got Wrong and How I Fixed It
- During the cart implementation, `cartCount` was declared twice in `Header.jsx`.
- This caused an error in the application.
- I removed `const cartCount = 0` and used `cartCount` from `App.jsx` through props.

---

## Week 3

### Tool(s)
- ChatGPT (OpenAI)

### What I Asked For
- Asked for step-by-step guidance to complete Lab 3 Part B.
- Asked for clarification about creating my own restaurant instead of using the default example restaurants.
- Asked how to create Jackal's Corner with at least 8 menu items across 3 categories.
- Asked how to move vendor data from `vendors.js` to `vendors.json`.
- Asked how to fetch vendor data using `useEffect` and `fetch()`.
- Asked how to implement loading, error handling, and retry functionality.
- Asked how to manage cart quantities using shared React state.
- Asked how to create `CartItem.jsx` and `CartPage.jsx`.
- Asked how to calculate cart totals using `reduce()`.
- Asked how to create a checkout form with input validation.
- Asked how to implement a Daily Special countdown using `useEffect` and `setInterval()`.
- Asked for help troubleshooting restaurant data that was not appearing in the application.
- Asked how to integrate restaurant JSON data shared by classmates.
- Asked how to handle optional fields such as `description` and `available`.
- Asked for help fixing React lint warnings and checking the production build.
- Asked how to update project documentation and manage Git commits.

### What I Kept or Changed
- Kept my existing CampusEats React components and application structure.
- Created Jackal's Corner as my own restaurant, located in Nilai, Negeri Sembilan.
- Added 10 menu items across 5 categories with unique IDs prefixed by my matric number.
- Used `public/api/vendors.json` as the mock API data source.
- Removed the old `src/data/vendors.js` file.
- Removed the default example restaurants, Kafe Mahallah Ali and Kafe Mahallah Aminah.
- Integrated restaurant JSON data shared by three classmates:
  - Sarap Pagi (2415663) - 8 menu items across 4 categories.
  - Mahasiswa Vendor (2410319) - 5 menu items across 2 categories.
  - Chef Haddif Expert (2412181) - 8 menu items across 3 categories.
- Kept the original vendor and menu item IDs provided by each classmate.
- Corrected the JSON formatting where necessary.
- Updated `MenuItemCard.jsx` to handle optional `description` and `available` fields.
- Kept the existing cart and checkout components and connected them through shared state in `App.jsx`.
- Implemented and tested loading, error handling, and retry functionality.
- Tested cart quantity merging, quantity controls, item removal, and total calculations.
- Tested checkout form validation and successful order confirmation.
- Updated the Daily Special feature to display Jackal's Signature Chicken Chop.
- Tested the countdown timer to ensure it updates correctly.
- Fixed React lint warnings in `Footer.jsx` and `App.jsx`.
- Verified that the application passed ESLint with 0 warnings and 0 errors.
- Successfully completed the production build using `npm run build`.
- Updated the README and reflection to document the changes made during Lab 3.

### One Thing AI Got Wrong and How I Fixed It
- Initially, the AI suggested renaming one of the default restaurants instead of creating a separate restaurant.
- After reviewing the lab instructions, I clarified that I needed to create my own restaurant, Jackal's Corner.
- The initial guidance was also unclear about which vendor data file needed to be updated.
- Jackal's Corner did not appear because the application was fetching data from `public/api/vendors.json`, while the old vendor data file was still being used during the editing process.
- I checked `App.jsx`, identified the correct data source, and updated `vendors.json`.
- I verified the JSON using PowerShell and confirmed that Jackal's Corner appeared in the application.
- I also reviewed the final code and tested the application instead of relying only on the AI suggestions.

### What I Learned
- I learned how to create my own restaurant data using JSON.
- I learned how to structure vendor and menu item data consistently.
- I learned how to integrate restaurant data shared by classmates while keeping unique IDs.
- I learned how to fetch data from a mock API using `useEffect` and `fetch()`.
- I learned how to handle loading states, errors, and retry requests.
- I learned how to use `AbortController` to clean up unfinished requests.
- I learned how to share cart state between React components.
- I learned how to calculate cart quantities and totals using `reduce()`.
- I learned how to create controlled forms and validate user inputs.
- I learned how to use `setInterval()` and `clearInterval()` for a countdown timer.
- I learned how to handle missing optional fields in JSON without breaking the application.
- I learned how to troubleshoot an application by checking which data files it actually uses.
- I learned how to use ESLint to identify coding issues and improve code quality.
- I learned how to verify a production build and review changes before committing them to Git.

---

## Week 4

### Tool(s)
- ChatGPT (OpenAI)

### What I Asked For
- Asked for step-by-step guidance to complete the Week 4 React lab.
- Asked how to install and use React Router.
- Asked how to separate the application into individual pages.
- Asked how to implement `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `Outlet`, and `useNavigate`.
- Asked how to create a shared Layout component with Header and Footer.
- Asked how to create custom hooks for vendor fetching, cart access, and localStorage.
- Asked how to use React Context to manage shopping cart and order state.
- Asked how to migrate cart functionality from `App.jsx` to `CartProvider.jsx`.
- Asked how to preserve shopping cart items and order history after refreshing the browser.
- Asked how to create the Orders page and navigate to it after checkout.
- Asked how to integrate my Daily Special countdown into the new Home page.
- Asked for help removing old Week 3 compatibility code.
- Asked for guidance when the application appeared without its original colors.
- Asked for help understanding PowerShell errors caused by accidentally pasting terminal output.
- Asked for code reviews, Git guidance, testing instructions, and documentation updates.

### What I Kept or Changed
- Installed React Router and reorganized the application into separate pages.
- Created `HomePage.jsx`, `VendorPage.jsx`, `CartPage.jsx`, `OrdersPage.jsx`, and `NotFoundPage.jsx`.
- Created `Layout.jsx` to provide a shared Header and Footer.
- Created `useVendors.js` to separate restaurant fetching logic from page components.
- Created `useLocalStorage.js` to manage persistent browser storage.
- Created `useCart.js` to access shared shopping cart state.
- Created `cart-context.js` and `CartProvider.jsx` for shared cart and order management.
- Updated `Header.jsx` to use React Router navigation and the shared cart count.
- Updated `VendorCard.jsx` to navigate directly to the corresponding restaurant page.
- Updated `MenuList.jsx` to use `useCart()` instead of receiving the cart action from `App.jsx`.
- Kept the existing cart quantity controls and checkout functionality.
- Added an Orders page to display completed orders.
- Used localStorage to preserve cart contents and order history.
- Preserved the Daily Special countdown from Week 3.
- Displayed the featured item on the Home page with a link to Jackal's Corner.
- Removed the duplicate Daily Special heading.
- Removed the unused Week 3 `components/CartPage.jsx`.
- Retained the original CampusEats CSS provided for the practical labs.
- Tested navigation, cart persistence, checkout, order history, and the Daily Special.
- Verified that `npm run lint` completed with zero warnings and zero errors.
- Verified that `npm run build` completed successfully.
- Created `EXPLAIN.md` and updated the project README.

### One Thing AI Got Wrong and How I Fixed It
- During the Week 4 migration, an early suggestion to replace `App.jsx` with the new React Router structure did not fully account for preserving my existing Daily Special feature.
- Replacing the old application structure without relocating this feature could have removed it from the interface.
- I reviewed the existing implementation and ensured that the Daily Special was included in `HomePage.jsx` before completing the migration.
- I also kept the original `DailySpecial.jsx` countdown logic instead of unnecessarily rewriting it.
- Later, I noticed that the Today's Special heading appeared twice because both `HomePage.jsx` and `DailySpecial.jsx` displayed the heading.
- I removed the duplicate heading from `HomePage.jsx` while preserving the original component.
- I tested the application again to confirm that the countdown and vendor navigation continued working.

### What I Learned
- I learned how React Router manages navigation between pages in a single-page application.
- I learned how to use dynamic URL parameters to display a selected restaurant.
- I learned how to create a shared page layout using `Outlet`.
- I learned the difference between passing props and accessing shared state through React Context.
- I learned how to create custom hooks to reuse logic across components.
- I learned how `CartProvider` makes shopping cart data available to different pages.
- I learned how to use localStorage to preserve cart and order information after refreshing the browser.
- I learned how to connect checkout with order history and page navigation.
- I learned how to migrate an existing React application without losing previously implemented features.
- I learned that a successful production build does not automatically guarantee that every visual or interactive feature works correctly.
- I learned how to verify application functionality through browser testing.
- I learned how to identify and remove unused components safely.
- I learned how to check Git changes before committing.
- I learned that AI-generated suggestions must be reviewed against the existing application and lecturer's instructions.

### Reflection on AI Assistance
ChatGPT was useful for explaining unfamiliar React concepts and guiding the migration from the Week 3 structure to the Week 4 architecture.

However, I did not treat every suggestion as automatically correct. I compared the suggested changes with my existing components, preserved working functionality, and tested the application after important modifications.

This helped me understand both the benefits and limitations of using AI as a programming assistant.
