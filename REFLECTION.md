
# Week 1 Reflection

## 1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

In imperative programming, we need to update the DOM manually using JavaScript. In React, we describe what the UI should look like based on the current state. React automatically updates the UI when the state changes.

## 2. Why must a component name start with a capital letter?

React uses capital letters to distinguish custom components from normal HTML elements. For example, `<Welcome />` is treated as a React component, while `<welcome />` is treated as an HTML element.

## 3. What does a fragment <>...</> do, and why not just use a div?

A React fragment allows us to group multiple elements without adding an extra HTML element to the DOM. This keeps the HTML structure clean and avoids unnecessary wrappers.

## 4. Name one benefit of splitting the UI into small components.

One benefit is reusability. We can use the same components in different parts of the application. Smaller components also make code easier to understand, update, and maintain.

---

# Week 2 Reflection

## 1. What did you learn about props in React?

I learned that props are used to pass data and functions between components. In CampusEats, I used props to pass vendor information to `VendorCard` and menu items to `MenuList`. This helped me understand how components communicate.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component, while state stores data that can change within an application. In this lab, I used `useState` to store the selected vendor and cart items. When state changes, React updates the UI.

## 3. How did you implement the Add to Cart feature?

I used `useState` in `App.jsx` to store cart items. When the user clicks Add to Cart, the selected item is passed to `App.jsx` through a function. The `handleAddToCart` function updates the cart, and the cart badge shows the number of items added.

## 4. Why is it useful to split CampusEats into multiple components?

Splitting CampusEats into smaller components makes the application easier to understand and maintain. For example, `Header` handles navigation, `VendorCard` displays restaurant information, and `MenuList` displays food items. This structure makes it easier to modify one part without affecting the others.

## 5. What challenges did you face during Week 2?

One challenge was fixing a syntax error in `vendors.js`. I also encountered an error because `cartCount` was declared twice in `Header.jsx`. I fixed this by removing the extra declaration and passing `cartCount` from `App.jsx` through props. I used ChatGPT to help me understand the errors and solutions.

## 6. What did you learn about Git and GitHub?

I learned how to use Git commands such as `git add`, `git commit`, and `git push`. I also learned how to check commit history and use Git tags to mark completed lab work. This helped me understand how version control tracks changes.

---

# Week 3 Reflection

## 1. What did you learn about controlled inputs in React?

I learned that controlled inputs use React state to manage user input. The input value is connected to a state variable, and the `onChange` function updates that state when the user enters something.

In CampusEats, I used controlled inputs for the checkout form, including the customer's name, mahallah, and pickup time. I also learned how to validate these inputs and display error messages when information is invalid.

## 2. Why do we need to lift state up in React?

Lifting state up allows multiple components to share the same data by keeping the state in their common parent component.

In CampusEats, I stored the cart state in `App.jsx` instead of keeping separate cart states in different components. This allows the header, menu, and cart page to access the same cart information. When an item is added or its quantity changes, the cart badge and total price update accordingly.

## 3. Why should we calculate values using reduce() instead of storing them in state?

Using `reduce()` allows us to calculate values from existing data instead of storing additional state variables.

In CampusEats, I used `reduce()` to calculate the total quantity of cart items and the total order price. This keeps the calculated values consistent when items are added, removed, or their quantities change. It also reduces the possibility of outdated totals.

## 4. What did you learn about useEffect and fetching data?

I learned that `useEffect` can be used to perform side effects, such as fetching data from an API.

In CampusEats, I used `fetch()` inside `useEffect` to load restaurant information from `public/api/vendors.json`. I implemented loading and error states so users can see whether data is loading or something went wrong.

I learned how to use `AbortController` to cancel unfinished requests during cleanup. I also implemented a Try Again button to retry fetching restaurant data after an error.

I tested the error handling by temporarily renaming the JSON file and checking whether the application displayed an error message. After restoring the file, I used the Try Again button to reload the restaurant data successfully.

## 5. What challenges did you face during this lab?

One of the main challenges was creating my own restaurant, Jackal's Corner, and connecting its menu data to CampusEats.

At first, I was confused about whether I needed to create a new restaurant or modify the example restaurants. After reviewing the lab instructions, I created Jackal's Corner as a separate restaurant located in Nilai, Negeri Sembilan, with 10 menu items across 5 categories.

Another challenge was that my new restaurant did not appear in the application. I discovered that I had been working with the wrong vendor data file. The application fetched data from `public/api/vendors.json`, so I updated that file and removed the old `vendors.js`.

I also obtained restaurant data from three classmates:

- Sarap Pagi (2415663) - 8 menu items across 4 categories.
- Mahasiswa Vendor (2410319) - 5 menu items across 2 categories.
- Chef Haddif Expert (2412181) - 8 menu items across 3 categories.

I removed the original example restaurants, Kafe Mahallah Ali and Kafe Mahallah Aminah, and replaced them with the restaurant data provided by my classmates. The application now contains four restaurants with a total of 31 menu items.

One challenge during the integration was that not all classmates used exactly the same menu fields. For example, Mahasiswa Vendor did not include `description` and `available` in its menu data, while Chef Haddif Expert did not include the `popular` field.

To handle these differences, I updated `MenuItemCard.jsx` so that missing optional fields would not cause problems. Items without an `available` field are treated as available, while items explicitly marked as unavailable remain sold out. This allowed me to keep the original menu data without changing the intended availability of existing items.

I also encountered React lint warnings related to `new Date()` in `Footer.jsx` and state updates inside `useEffect` in `App.jsx`. I fixed these issues and tested the application again.

With guidance from ChatGPT, I was able to troubleshoot these problems and understand why the changes were necessary. After the corrections, the application passed lint with zero warnings and zero errors, and the production build completed successfully.

I also tested the restaurant selection, cart quantities, item removal, checkout validation, and Daily Special countdown to confirm that the features still worked after integrating the additional restaurants.

Overall, this lab helped me understand the importance of consistent data structures, component communication, debugging, and testing when developing a React application.

## 6. What did you learn from your personal feature?

For my personal feature, I implemented a Daily Special countdown because my matric number ends with 5.

I updated the feature to display Jackal's Signature Chicken Chop from Jackal's Corner as the daily special. The countdown shows the remaining time before the special ends at 10:00 PM.

I learned how to use `setInterval()` inside `useEffect` to update the countdown every second. I also learned how to use `clearInterval()` in the cleanup function to prevent unnecessary intervals when the component is removed.

I tested the countdown to make sure it updated correctly and continued working when navigating between the menu and cart pages.

This feature helped me understand how React effects can be used for time-based functionality and why proper cleanup is important.
