
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
