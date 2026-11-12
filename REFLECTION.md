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

---

# Week 5 Reflection

## 1. What did you learn about Firebase Authentication?

I learned that Firebase Authentication is a service that helps an application manage user accounts.

Before Week 5, CampusEats did not have a real login system. Users could browse restaurants and open the cart without signing in.

Now the application uses Firebase Authentication so users can register, log in, and log out.

I also learned that Firebase handles the authentication process, so I do not need to build my own server to check passwords.

## 2. What is the difference between authentication and authorization?

Authentication means checking who a user is.

For example, when someone enters their email and password, Firebase checks whether the login information is valid.

Authorization means checking what an authenticated user is allowed to do.

In CampusEats, I use `ProtectedRoute` to control whether someone can open the Cart and Orders pages.

However, I also learned that a protected React page is not enough to secure data in a database. Actual database permissions need to be enforced using security rules.

## 3. What did you learn about AuthProvider and useAuth?

I learned that `AuthProvider` works in a similar way to the `CartProvider` I made in Week 4.

The difference is that `CartProvider` manages shopping cart information, while `AuthProvider` manages authentication information.

I use `useAuth()` to access the current user and authentication functions from other components.

For example, the Header can check whether someone is logged in and display their name without passing that information through many components.

This helped me understand how React Context can manage different parts of an application.

## 4. Why do we use onAuthStateChanged instead of checking the user only once?

I learned that the authentication status can change while the application is running.

A user might log in, log out, or refresh the browser.

`onAuthStateChanged()` allows Firebase to notify the application about these changes.

I use it inside `AuthProvider` so the user state can update automatically.

I also learned why the loading state is important. The application needs to wait for Firebase to check the current user before deciding whether to show a protected page or redirect to login.

Without this loading state, the application might briefly show the Login page even when the user is already signed in.

## 5. How did you implement registration and login?

I added two new pages, `RegisterPage.jsx` and `LoginPage.jsx`.

The registration page allows users to enter their name, email, and password.

I use Firebase Authentication to create the account and save the user's display name.

For login, users can enter their email and password or continue with Google.

I also added error handling so users can see a simple message when their login fails.

I learned that these Firebase functions return Promises, so I need to use `async`, `await`, and `try/catch` when working with them.

## 6. How did you protect the Cart and Orders pages?

I created `ProtectedRoute.jsx` to check whether someone is logged in.

When a guest tries to open `/cart` or `/orders`, the application redirects them to `/login`.

After logging in, the user can return to the page they originally wanted to open.

I used React Router's `Navigate`, `Outlet`, and `useLocation` to implement this.

This helped me understand that React Router can do more than switch between pages. It can also decide which pages should be shown based on the user's authentication state.

## 7. How did you update the Header for Week 5?

In Week 4, my Header showed navigation links for Vendors, My Orders, and Cart.

In Week 5, I added a Log in link for users who are not signed in.

When a user is logged in, the Header displays their name and a Log out button.

I used `useAuth()` to get the user information and logout function.

I also used `useNavigate()` to return to the Home page after logout.

I kept the original shopping cart badge working through `useCart()`.

This helped me understand that a component can use information from more than one Context.

## 8. How did you update your Daily Special feature?

My personal feature is the Daily Special countdown because my matric number ends with 5.

In Week 5, I needed to make this feature depend on the user's login status.

Guests are asked to log in before they can view today's special.

Signed-in users can see a personalized message containing their name, while the countdown continues running.

I learned how to use the current user from `useAuth()` to change what a component displays.

I also learned that I could add this functionality without completely rewriting the countdown logic from Week 3.

## 9. What challenges did you face during Week 5?

One of the main challenges was understanding how Firebase Authentication connects to the existing React application.

I already had `CartProvider` from Week 4, so at first I needed to understand why another provider was necessary.

After going through the code, I understood that the two providers have different responsibilities.

I also needed to update `App.jsx` and `Header.jsx` without removing the existing routes or cart functionality.

Another thing I checked was the CSS. I initially thought I might need additional styles for the login and registration pages, but the lecturer's stylesheet already included the Week 5 styles.

This taught me to check the existing files before making unnecessary changes.

## 10. What is the difference between Firebase Authentication and Cloud Firestore?

I learned that Firebase Authentication and Cloud Firestore have different purposes.

Firebase Authentication manages user accounts and helps the app identify who is signed in.

Cloud Firestore is a database that can store application information such as restaurants, menu items, and orders.

For Week 5, the main focus was authentication.

The restaurant data still comes from the local JSON file, while cart and order information remain in browser `localStorage`.

In the following labs, I will learn how to move application data to Firestore.

## 11. How did you check your Week 5 implementation?

I used the Week 5 lab sheet as a checklist and reviewed the main authentication features.

The important things to check included registration, email/password login, Google sign-in, logout, and how the Header changes when the authentication state changes.

I also needed to check what happens when a guest opens `/cart` or `/orders` and whether a signed-in user stays logged in after refreshing the browser.

I reviewed the existing cart, restaurant navigation, and Daily Special to make sure the new authentication features did not interfere with them.

I also updated the project documentation to explain the changes introduced in Week 5.

## 12. What was the most important lesson from Week 5?

The most important lesson was understanding how frontend authentication works.

Before this lab, I knew how to manage local React state and share data through Context.

Now I understand how React can connect to an external service like Firebase and respond when a user logs in or logs out.

I also learned that authentication and application data are separate concerns.

The experience helped me understand why it is important to organize code properly. Because I had already separated the cart logic and pages in Week 4, I could add authentication without rebuilding the whole application.

---

# Week 6 Reflection

## 1. What happens from clicking Place Order until the order appears on the Orders page?

When I click Place Order, the checkout form first checks that the name, mahallah, and pickup time are valid. If everything is okay, `handlePlaceOrder()` in `CartPage.jsx` calls `placeOrders()` in `services/orders.js`. This function groups the cart items by restaurant and uses `writeBatch()` to save a separate order for each restaurant in Firestore.

After the orders are saved successfully, the cart is cleared and the app takes me to the Orders page. The `useMyOrders()` hook uses `subscribeToMyOrders()` to listen for my orders through `onSnapshot()`. When a new order appears in Firestore, the listener updates the page automatically, so I do not need to call `setOrders()` in the checkout page myself.

## 2. Why is orders a top-level collection, and why do we save the vendor name and item details in each order?

I learned that keeping `orders` as a top-level collection makes it easier to find orders from different restaurants in one place. I can use the student's Firebase UID to load only their orders with `where('studentUid', '==', uid)`.

Each order also saves the restaurant name and the names and prices of the food items, instead of storing only their IDs. This is useful because menu details can change later. For example, if Jackal's Corner increases the Chicken Chop price, an old order should still show the price when the order was placed.

It also means the Orders page can display the order details without fetching each menu item again.

## 3. How does your Daily Special feature use Firestore in Week 6?

My personal feature is the Daily Special countdown because my matric number ends with 5. I store the feature in Jackal's Corner's menu document at `vendors/2417185-jackals-corner/menu/2417185-jc-1`.

The `special` field is set to `true` to mark the featured food, and `specialEndsAt` stores its ending time as a Firestore Timestamp.

In `HomePage.jsx`, I find the featured item using `specialMenu.find((item) => item.special === true)`. In `DailySpecial.jsx`, I read the ending time with `item.specialEndsAt?.toMillis?.()` and use it to calculate the remaining seconds.

Because the menu is loaded with `onSnapshot()`, changing the ending time in Firebase Console can update the countdown without refreshing the page.

---

# Overall Reflection (Weeks 1–5)

During these five weeks, I learned how a React application grows from simple components into a more complete application.

In Week 1, I learned about JSX and components.

In Week 2, I learned about props, state, events, and the Add to Cart feature.

In Week 3, I learned about controlled forms, validation, data fetching, and updating state.

In Week 4, I learned how to organize the app using React Router, custom hooks, Context, and localStorage.

In Week 5, I learned how to connect Firebase Authentication and manage signed-in users.

The biggest improvement in my understanding is that I can now see how these concepts connect.

For example, React Router manages navigation, Context shares data, hooks handle reusable logic, and Firebase provides authentication.

I still need more practice writing React code independently, especially when working with several components at the same time.

However, I now have a clearer understanding of how CampusEats works and how to extend it in future labs.