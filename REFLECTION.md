# Week 1 Reflection

## 1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

With plain JavaScript, I usually need to tell the browser exactly what to change on the page. In React, I describe what I want to show, and React updates it when the data changes.

## 2. Why must a component name start with a capital letter?

React uses capital letters to tell the difference between my own components and normal HTML tags. For example, `<Welcome />` is my component, while `<welcome />` is treated like an HTML element.

## 3. What does a fragment do, and why not just use a div?

A fragment (`<>...</>`) lets me group elements without adding another `div` to the page. It keeps the HTML simpler.

## 4. Name one benefit of splitting the UI into small components.

Small components are easier to read and reuse. If I need to change one part, I can usually do it without touching the whole app.

---

# Week 2 Reflection

## 1. What did you learn about props in React?

I learned that props pass information from one component to another. In CampusEats, I used props to send restaurant details to `VendorCard` and menu items to `MenuList`.

## 2. What is the difference between props and state?

Props are information a component receives. State is information that can change while the app is running. I used `useState()` to keep track of the selected restaurant and the cart.

## 3. How did you implement the Add to Cart feature?

I stored cart items in `App.jsx` using `useState()`. When someone clicked Add to Cart, the selected item was sent to a function in `App.jsx`, which updated the cart and the number shown in the Header.

## 4. Why is it useful to split CampusEats into multiple components?

It makes the code easier to follow. For example, `Header` handles the top part of the app, `VendorCard` shows restaurant details, and `MenuList` shows food items. I can work on one part at a time.

## 5. What challenges did you face during Week 2?

I had a syntax error in `vendors.js` and another error because `cartCount` was declared twice in `Header.jsx`. I fixed them by checking the code and removing the extra declaration. ChatGPT helped me understand why the errors happened.

## 6. What did you learn about Git and GitHub?

I learned how to use `git add`, `git commit`, and `git push`. I also learned how to check commit history and use tags to mark each completed lab.

---

# Week 3 Reflection

## 1. What did you learn about controlled inputs in React?

I learned that a controlled input gets its value from React state. When the user types or chooses something, `onChange` updates that state.

I used this in the checkout form for the customer's name, mahallah, and pickup time. I also added checks to stop invalid orders.

## 2. Why do we need to lift state up in React?

If two components need the same data, it helps to keep that data in a parent component. In Week 3, I kept the cart in `App.jsx` so the menu, Header, and cart view could all use the same information.

## 3. Why should we calculate values using reduce() instead of storing them in state?

`reduce()` lets me calculate the number of cart items and the total price from the items already in the cart. I do not need to store another value that might become outdated.

## 4. What did you learn about useEffect and fetching data?

I used `useEffect()` and `fetch()` to load restaurant data from `/api/vendors.json`. I added loading and error messages and a Try Again button. I also used `AbortController` to cancel an unfinished request when needed.

To test the error message, I temporarily renamed the JSON file. After putting it back, the Try Again button loaded the restaurants again.

## 5. What challenges did you face during this lab?

My biggest challenge was adding **Jackal's Corner**. At first, I was not sure whether I should make a new restaurant or rename an example. After checking the lab guide, I made my own restaurant with 10 menu items in five categories.

The restaurant did not appear at first because I was updating the wrong data file. The app was reading `public/api/vendors.json`, so I changed that file and removed the old `vendors.js`.

I also added data from three classmates: Sarap Pagi, Mahasiswa Vendor, and Chef Haddif Expert. Together with Jackal's Corner, the app has four restaurants and 31 menu items.

Some of the shared menus had missing optional fields. I updated `MenuItemCard.jsx` so items without `description`, `available`, or `popular` information would not break the page. An item is treated as available unless it is clearly marked unavailable.

I also fixed lint issues in `Footer.jsx` and `App.jsx`. After testing the app again, lint showed no errors and the build worked.

## 6. What did you learn from your personal feature?

My matric number ends with 5, so I made a Daily Special countdown. I used Jackal's Signature Chicken Chop as the featured item, with an end time of 10:00 PM.

I learned how to use `setInterval()` to update the timer every second and `clearInterval()` to stop it when the component is removed. I tested it to make sure it kept working as I used the app.

---

# Week 4 Reflection

## 1. What did you learn about React Router?

I learned how to give different parts of my React app their own URLs. CampusEats now has pages for Home, restaurant menus, Cart, Orders, and unknown links.

I used `BrowserRouter`, `Routes`, and `Route` to set up the pages. I also learned how `Link`, `NavLink`, and a route like `/vendor/:id` work.

## 2. What is the difference between props and React Context?

Props pass data directly between components. Context lets different components use the same data without passing it through every component in between.

Before Week 4, the cart was handled in `App.jsx`. Now `CartProvider.jsx` stores the shared cart, and components use `useCart()` to get the information they need. This made the code simpler.

## 3. Why are custom hooks useful in React?

Custom hooks help me reuse code instead of writing the same logic again. I made `useVendors()` to load restaurants, `useCart()` to access the cart, and `useLocalStorage()` to save data in the browser.

It also makes the page components easier to read because they do not need to contain all the logic themselves.

## 4. How does localStorage improve CampusEats?

In Week 3, the cart could disappear after a refresh because it was only kept in React state. Now I save the cart and orders in `localStorage`.

I tested it by adding food, refreshing the Cart page, and checking that the items stayed there. I also placed an order and refreshed the Orders page to check that the order was still saved.

## 5. How did you implement navigation after checkout?

After the user fills in a valid checkout form, `CartProvider` saves the order and clears the cart. Then `useNavigate()` takes the user to `/orders`, where the new order appears.

This helped me understand how navigation and shared state work together.

## 6. How did you preserve your Daily Special feature during the Week 4 migration?

I did not want to lose the countdown I had made in Week 3. I kept `DailySpecial.jsx` and added it to `HomePage.jsx`, along with a link to Jackal's Corner.

I also noticed that **Today's Special** appeared twice. I removed the extra heading and checked that the countdown still worked.

## 7. What challenges did you face during Week 4?

The main challenge was moving code out of `App.jsx` and organizing it into pages, hooks, and Context. I needed to make sure the cart, checkout, and Daily Special still worked after the changes.

I also removed an old `CartPage.jsx` that was no longer being used. At one point, the app looked black and white, so I checked the CSS file and how it was loaded.

Another mistake was pasting terminal output into PowerShell as if it were commands. It caused errors, but I checked the project afterwards and confirmed that lint and build still passed. I learned to read terminal output more carefully.

## 8. What was the most important lesson from Week 4?

I learned that it is easier to manage a bigger app when each part has a clear job. Pages show the screens, hooks handle reusable logic, and Context shares data.

I also learned that after making a big change, I should test the old features again. A successful build is useful, but I still need to check the app in the browser.
