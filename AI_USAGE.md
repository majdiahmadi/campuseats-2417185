
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

## Week 3

### Tool(s)
- ChatGPT (OpenAI)

### What I Asked For
- Asked for step-by-step guidance to complete Lab 3 Part B.
- Asked how to convert `vendors.js` into `vendors.json`.
- Asked how to fetch vendor data using `useEffect` and `fetch()`.
- Asked how to display loading and error messages.
- Asked how to manage cart items and quantities using React state.
- Asked how to create `CartItem.jsx` and `CartPage.jsx`.
- Asked how to create a checkout form with input validation.
- Asked how to create a Daily Special countdown using `useEffect` and `setInterval`.

### What I Kept or Changed
- Used the suggested code and added it to my existing Week 2 project.
- Kept my original CampusEats components and vendor information.
- Updated the vendor IDs and added more menu items.
- Added functions to increase, decrease, and remove cart items.
- Connected the cart page and checkout form.
- Added my Daily Special countdown feature.

### One Thing AI Got Wrong and How I Fixed It
- At first, the cart page was only a placeholder.
- The cart and checkout components were not connected yet.
- I continued following the steps to create `CartPage.jsx` and `CheckoutForm.jsx`.
- I then updated `App.jsx` to connect everything.

### What I Learned
- I learned how to create forms and check user input.
- I learned how to share state between React components.
- I learned how to calculate cart totals using `reduce()`.
- I learned how to fetch data using `useEffect`.
- I also learned how to use `clearInterval()` to stop a countdown timer.
