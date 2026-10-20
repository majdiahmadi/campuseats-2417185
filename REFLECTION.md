
# Week 1 Reflection

## 1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

In imperative programming, we need to update the DOM manually using JavaScript. In React, we only need to describe what the UI should look like. React will update the UI automatically when the state changes.

## 2. Why must a component name start with a capital letter?

React uses capital letters to tell the difference between components and normal HTML elements. For example, `<Welcome />` is a React component, while `<welcome />` is treated as an HTML element.

## 3. What does a fragment <>...</> do, and why not just use a <div>?

A React fragment allows us to group multiple elements without adding an extra HTML element. This helps keep the HTML structure clean and simple.

## 4. Name one benefit of splitting the UI into small components.

One benefit is that we can reuse the same components in different parts of the application. It also makes the code easier to read, update, and maintain.

---

# Week 2 Reflection

## 1. What did you learn about props in React?

I learned that props are used to pass data and functions between components. In CampusEats, I used props to pass vendor information to `VendorCard` and menu items to `MenuList`. This helped me understand how components work together.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store data that can change. In this lab, I used `useState` to store the selected vendor and cart items. When the state changes, React updates the UI automatically.

## 3. How did you implement the Add to Cart feature?

I used `useState` in `App.jsx` to store cart items. When a user clicks Add to Cart, the selected item is passed to `App.jsx`. The `handleAddToCart` function adds the item to the cart. The cart badge then updates to show the number of items.

## 4. Why is it useful to split CampusEats into multiple components?

Splitting the application into smaller components makes the code easier to understand. For example, `Header` displays the navigation, `VendorCard` shows vendor information, and `MenuList` shows food items. It also makes the application easier to update.

## 5. What challenges did you face during Week 2?

One challenge was fixing a syntax error in `vendors.js`. I also had an error because `cartCount` was declared twice in `Header.jsx`. I fixed it by removing the extra declaration and passing `cartCount` from `App.jsx`. I used ChatGPT to help me understand and fix these errors.

## 6. What did you learn about Git and GitHub?

I learned how to use Git commands such as `git add`, `git commit`, and `git push`. I also learned how to check my commit history. This helped me understand how to save my work and upload changes to GitHub.

---

# Week 3 Reflection

## 1. What did you learn about controlled inputs in React?

I learned that controlled inputs use React state to manage user input. When a user types something, the `onChange` function updates the state. This makes it easier to check the input and show error messages.

## 2. Why do we need to lift state up in React?

Lifting state up allows different components to share the same data. In CampusEats, I stored the cart state in `App.jsx`. This allows the header, menu, and cart page to use the same cart information.

## 3. Why should we calculate values using reduce() instead of storing them in state?

Using `reduce()` allows us to calculate values from existing data. In CampusEats, I used it to calculate the total cart quantity and price. This keeps the totals updated when items are added or removed.

## 4. What did you learn about useEffect and fetching data?

I learned that `useEffect` can be used to load data when a component starts. In this lab, I used `fetch()` to get restaurant data from `vendors.json`. I also learned how to show loading and error messages and use `AbortController` to stop unfinished requests.

## 5. What challenges did you face during this lab?

One challenge was connecting the cart and checkout components. At first, the cart page was only a placeholder. I also needed to understand how the quantity buttons and form validation worked. I used ChatGPT to guide me through the steps and understand the code.

## 6. What did you learn from your personal feature?

For my personal feature, I created a Daily Special countdown. I learned how to use `setInterval` with `useEffect` to update the countdown every second. I also learned how to use `clearInterval` to stop the timer when the component is removed.
