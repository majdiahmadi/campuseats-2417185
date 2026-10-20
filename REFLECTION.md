
# Week 1 Reflection

## 1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

Imperative programming requires us to manually update the DOM step by step using JavaScript. Declarative programming in React allows us to describe what the UI should look like, and React handles the updates automatically when the state changes.

## 2. Why must a component name start with a capital letter?

React components must start with a capital letter because React uses capital letters to distinguish custom components from normal HTML elements. For example, `<Welcome />` is treated as a React component, while `<welcome />` is treated as an HTML tag.

## 3. What does a fragment <>...</> do, and why not just use a <div>?

A React fragment allows us to group multiple elements without adding an extra HTML element to the DOM. It is useful because it keeps the HTML structure cleaner compared to wrapping everything inside an unnecessary `<div>`.

## 4. Name one benefit of splitting the UI into small components.

One benefit is code reusability. By splitting the UI into smaller components, we can reuse them in different parts of the application without rewriting the same code. It also makes the code easier to maintain and understand.


# Week 2 Reflection

## 1. What did you learn about props in React?

I learned that props are used to pass data and functions from one component to another. In CampusEats, I used props to pass vendor information to VendorCard and menu items to MenuList. This helped me understand how different components communicate with each other.

## 2. What is the difference between props and state?

Props are values passed from a parent component, while state is data that a component manages and can update. In this lab, I used useState to store the selected vendor and cart items. When the state changes, React automatically updates the interface.

## 3. How did you implement the Add to Cart feature?

I used useState in App.jsx to store the cart items. When the user clicks Add to Cart, the onAdd function passes the selected item to App.jsx. The handleAddToCart function then adds the item to the cart. The cart badge in the header updates based on the number of items added.

## 4. Why is it useful to split CampusEats into multiple components?

Splitting the application into smaller components makes the code easier to understand and maintain. For example, Header handles the navigation area, VendorCard displays vendor information, and MenuList displays the food menu. It also makes it easier to update one part of the application without changing everything.

## 5. What challenges did you face during Week 2?

One challenge was fixing a JavaScript syntax error in vendors.js. I also faced an issue where cartCount was declared twice in Header.jsx, causing an error. I fixed it by removing the unnecessary declaration and passing cartCount from App.jsx through props. I used ChatGPT to help me understand the errors and correct the code.

## 6. What did you learn about Git and GitHub?

I learned how to use Git commands such as git add, git commit, and git push to save and upload my project changes. I also learned how to check my commit history. This helped me understand how Git tracks changes and why committing my work regularly is important.


# Week 3 Reflection

## 1. What did you learn about controlled inputs in React?

I learned that controlled inputs use React state to manage the values entered by users. When a user types something, the onChange function updates the state. This makes it easier to check user input and display validation errors.

## 2. Why do we need to lift state up in React?

Lifting state up allows multiple components to share the same data through their parent component. In CampusEats, I kept the cart state in App.jsx so that the header, menu, and cart page could use the same cart information.

## 3. Why should we calculate values using reduce() instead of storing them in state?

Using reduce() allows us to calculate values directly from existing data. For example, I used it to calculate the total cart quantity and order price. This helps avoid unnecessary state and keeps the total updated whenever the cart changes.

## 4. What did you learn about useEffect and fetching data?

I learned that useEffect can be used to fetch data when a component loads. In this lab, I used fetch() to load restaurant information from vendors.json. I also learned how to handle loading and error messages and use AbortController to clean up requests.

## 5. What challenges did you face during this lab?

One challenge was connecting the different components to make the cart and checkout work properly. At first, the cart page was only a placeholder. I also needed to understand how the quantity functions and form validation worked. I used ChatGPT to guide me through the implementation step by step.

## 6. What did you learn from your personal feature?

For my personal feature, I created a Daily Special countdown. I learned how to use setInterval inside useEffect to update the countdown every second. I also learned why clearInterval is important to stop the timer when the component is removed.
