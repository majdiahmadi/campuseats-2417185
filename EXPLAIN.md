# CampusEats - React Milestone Explanation

**Student ID:** 2417185
**Course:** BICS 3301 - Cross-Platform Software Development
**My restaurant:** Jackal's Corner
**Built with:** React and Vite

## 1. About my project

CampusEats is a simple food ordering app that I built during React Labs 1-4. Users can choose a restaurant, look at its menu, add items to a cart, and place a sample order. They can also view their previous orders.

My restaurant is **Jackal's Corner** in Nilai, Negeri Sembilan. It has 10 menu items in five categories.

## 2. How I organized the app

In Week 4, I split the app into pages, reusable components, hooks, and Context. Before this, most of the app logic was inside `App.jsx`.

```text
BrowserRouter
`-- CartProvider
    `-- Routes
        `-- Layout
            |-- Header
            |-- Outlet
            |   |-- HomePage
            |   |-- VendorPage
            |   |-- CartPage
            |   |-- OrdersPage
            |   `-- NotFoundPage
            `-- Footer
```

Here is what each part does:

- **Pages:** Show the different parts of the app, such as Home, Cart, and Orders.
- **Components:** Reusable parts like `VendorCard`, `MenuItemCard`, `CartItem`, `CheckoutForm`, and `DailySpecial`.
- **Hooks:** Hold logic that can be reused, such as loading vendors or saving data.
- **Context:** Keeps the cart and orders in one shared place.

This makes the project easier for me to read and update.

## 3. How the shopping cart works

I use `CartProvider.jsx` to keep the cart and order information. Other components can get this data through the `useCart()` hook.

For example, when I add a food item:

1. I open a restaurant menu and click **Add to Cart**.
2. `MenuItemCard` calls the function passed to it by `MenuList`.
3. `MenuList` uses `useCart()` to get `addToCart()`.
4. `CartProvider` updates the cart.
5. The number in the Header changes, and the Cart page shows the new item.

Before Week 4, I passed more cart functions through props from `App.jsx`. Using Context means I no longer need to pass the same functions through several components.

## 4. Pages and navigation

I use React Router so the app can show different pages without doing a full page reload each time.

| Route | Page |
| --- | --- |
| `/` | Home page with restaurants and Daily Special |
| `/vendor/:id` | Menu for a restaurant |
| `/cart` | Cart and checkout |
| `/orders` | Order history |
| `*` | Not-found page |

The Header uses `NavLink`. Restaurant cards and the Daily Special use `Link`. After a successful checkout, `useNavigate()` sends the user to the Orders page.

`Layout.jsx` keeps the same Header and Footer on every page.

## 5. Saving the cart and orders

I created `useLocalStorage()` to save data in the browser. The app uses:

- `campuseats-cart` for cart items.
- `campuseats-orders` for placed orders.

I tested this by adding items, refreshing the page, and checking that they were still there. I also refreshed the Orders page after placing an order.

The data is only saved in that browser. It is not stored in an online database.

## 6. My personal feature: Daily Special countdown

My matric number ends with **5**, so my assigned feature is a Daily Special countdown.

I chose **Jackal's Signature Chicken Chop** from Jackal's Corner. The countdown ends at **10:00 PM (22:00)** based on the user's device time.

I used `useState()` to store the remaining time and `useEffect()` to update it every second. I also used `clearInterval()` so the timer stops when the component is removed.

This is part of the code in `DailySpecial.jsx`:

```jsx
const [remaining, setRemaining] = useState(
  () => getRemainingSeconds(endTime)
)

useEffect(() => {
  function updateCountdown() {
    setRemaining(getRemainingSeconds(endTime))
  }

  updateCountdown()
  const intervalId = setInterval(updateCountdown, 1000)

  return () => clearInterval(intervalId)
}, [endTime])
```

The remaining time appears as `HH:MM:SS`. After the time reaches zero, the app shows **"Today's special has ended."** instead of a negative countdown.

For Week 4, I also added the Daily Special to the Home page with a link to Jackal's Corner menu. The featured item is fixed for now; it does not change automatically each day.

## 7. Checkout and order history

On the Cart page, users can change quantities, remove food, and fill in the checkout form. The form checks the name, mahallah, and pickup time before accepting the order.

When a valid order is placed, the app saves it to the order history, clears the cart, and opens `/orders`. The new order starts with the status **Received**.

## 8. What I tested

| Test | Result |
| --- | --- |
| Open a restaurant from the Home page | Passed |
| Add the same item more than once | Passed |
| Change item quantities and totals | Passed |
| Refresh the Cart page | Cart stayed saved |
| Submit an empty or invalid checkout form | Form blocked the order |
| Place a valid order | Opened the Orders page |
| Refresh the Orders page | Order stayed saved |
| Open an unknown URL | Not-found page appeared |
| Open the Daily Special link | Opened Jackal's Corner |
| Check the countdown | Timer or expired message displayed |

I also ran:

```bash
npm run lint
npm run build
```

The last lint check showed **0 warnings and 0 errors**, and the build passed.

## 9. Problems I faced

The biggest change was moving from one main `App.jsx` file to separate pages and shared cart state. I needed to make sure that the cart, checkout, and Daily Special still worked after the changes.

At first, the Daily Special could have been left behind during the move. I made sure it was included on the Home page. I also removed a duplicate **Today's Special** heading and deleted an old `CartPage.jsx` that was no longer needed.

I checked the app in the browser after making these changes instead of relying only on the build result.

## 10. What the app cannot do yet

CampusEats is still a class project. It uses a local JSON file for restaurant data and browser storage for orders. There is no real payment, online database, or restaurant system connected to it.

## 11. AI help

I used ChatGPT to help me understand React, check errors, and work through the Week 4 changes. It also helped me organize my documentation. I checked the suggestions against my existing code and tested the app after making changes.

I wrote down the details in [AI_USAGE.md](AI_USAGE.md).

## 12. What I learned

These labs helped me understand how React components, hooks, routing, and shared state work together. I also learned that when I reorganize an app, I need to test older features again to make sure nothing has stopped working.

---

# Week 5 - Firebase Authentication

## 13. Why I added Firebase Authentication

Before Week 5, CampusEats did not have real user accounts.

Anyone could open the Cart and Orders pages because the application did not check whether someone was logged in.

In Week 5, I connected the application to Firebase Authentication.

Firebase manages user accounts and provides functions for registration, login, and logout.

This means I do not need to create my own authentication server.

## 14. How I connected Firebase

I created a Firebase project and registered CampusEats as a web application.

I installed the Firebase package:

```bash
npm install firebase
```

I created `.env.local` in the project root to store the Firebase configuration values.

The configuration includes values such as:

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

I used these values in `src/firebase.js` to initialize Firebase and get the authentication service.

The `.env.local` file is ignored by Git.

The Firebase web configuration identifies the project. It is not a secret password, and protecting application data requires Firebase security rules.

## 15. How AuthProvider works

I created `AuthProvider.jsx` to manage the current user's authentication information.

It uses React Context, similar to the CartProvider I created in Week 4.

The difference is:

- `CartProvider` manages cart items and order history.
- `AuthProvider` manages the signed-in user and authentication functions.

The main values shared by `AuthProvider` are:

- `user`: Information about the currently signed-in user.
- `loading`: Whether Firebase is still checking the authentication state.
- `register()`: Creates an account.
- `login()`: Signs in with email and password.
- `loginWithGoogle()`: Signs in using a Google account.
- `logout()`: Signs out the current user.

Other components use `useAuth()` to access these values.

For example:

```jsx
const { user, logout } = useAuth()
```

This lets the Header display the user's name without passing authentication information through every component.

## 16. How onAuthStateChanged works

Firebase Authentication has a function called `onAuthStateChanged()`.

This function listens for changes to the current user's authentication status.

For example:

1. The application opens.
2. Firebase checks whether a user is already signed in.
3. `onAuthStateChanged()` receives the current user or `null`.
4. `AuthProvider` updates the user state.
5. Components that use `useAuth()` receive the updated information.

The listener also runs when a user logs in or logs out.

I use a loading state so the application does not redirect users before Firebase finishes checking their authentication status.

I also return the unsubscribe function from `useEffect()` so the listener can be cleaned up when needed.

## 17. Registration and login

I added two new pages:

- `LoginPage.jsx`
- `RegisterPage.jsx`

The registration page allows a user to enter their name, email, and password.

Firebase creates the account using `createUserWithEmailAndPassword()`.

I use `updateProfile()` to save the user's display name.

For login, the application uses `signInWithEmailAndPassword()`.

I also added Google sign-in using `signInWithPopup()` and `GoogleAuthProvider`.

I learned that authentication operations are asynchronous, so I need to use `async`, `await`, and `try/catch` to handle them correctly.

If something goes wrong, the application shows an understandable message instead of only displaying a Firebase error code.

## 18. How ProtectedRoute works

I created `ProtectedRoute.jsx` to control access to the Cart and Orders pages.

The component checks the authentication state using `useAuth()`.

It follows three conditions:

1. If Firebase is still loading, show a loading message.
2. If no user is signed in, redirect to `/login`.
3. If a user is signed in, display the protected page using `<Outlet />`.

For example, the route structure in `App.jsx` includes:

```jsx
<Route element={<ProtectedRoute />}>
  <Route path="cart" element={<CartPage />} />
  <Route path="orders" element={<OrdersPage />} />
</Route>
```

This means both pages require the user to be signed in.

When a guest tries to open `/cart`, the app sends them to the Login page.

The Login page can remember where the guest wanted to go and return them there after a successful login.

This is a client-side route guard. It controls what the React application displays, but actual database security must be enforced using security rules.

## 19. How I updated the Header

Before Week 5, the Header showed:

- Vendors
- My Orders
- Cart

In Week 5, I added authentication information.

When no user is signed in, the Header shows **Log in**.

When a user is signed in, the Header displays their name and a **Log out** button.

I use:

```jsx
const { user, logout } = useAuth()
```

I also use `useNavigate()` so the application can return to the Home page after logout.

The existing cart badge still uses `useCart()`.

This means the Header now uses two different contexts:

- `useCart()` for shopping cart information.
- `useAuth()` for authentication information.

## 20. How Week 5 changed my Daily Special

My personal feature is the Daily Special countdown.

For Week 5, I connected the feature to the signed-in user's information.

Guests see a message asking them to log in to view today's special.

Signed-in users can see a personalized message such as:

**Today's special for Majdi**

The countdown still uses the timer logic from Week 3.

This helped me understand how authentication can change what a component displays without replacing the component's existing functionality.

## 21. Week 5 testing checklist

The main authentication checks are:

| Test | Expected result |
| --- | --- |
| Open the Home page without login | Restaurants are visible |
| Open a restaurant menu without login | Menu is visible |
| Open `/register` | Registration form appears |
| Register using valid details | Firebase creates an account |
| Log in with email and password | User is signed in |
| Log in with Google | Google authentication completes |
| Enter incorrect login details | Friendly error message appears |
| Open `/cart` as a guest | Redirects to `/login` |
| Open `/orders` as a guest | Redirects to `/login` |
| Log in after opening a protected page | Returns to the requested page |
| Refresh while signed in | Authentication state is restored |
| Click Log out | User is signed out |
| View Header while logged in | User's name and Log out appear |
| View Daily Special as a guest | Login prompt appears |
| View Daily Special while signed in | Personalized special appears |

These are the important scenarios I need to check whenever I make changes to authentication.

## 22. Problems and challenges in Week 5

One of the main challenges was understanding how Firebase Authentication fits into my existing React application.

In Week 4, I had already created `CartProvider`, so I needed to understand why another provider was required.

I learned that the two providers manage different types of information and can be used together.

I also needed to update `App.jsx` without losing the existing routes.

The Header needed changes because it now had to display both the shopping cart count and the signed-in user's information.

Another thing I checked was the CSS. The lecturer's starter stylesheet already included styles for authentication forms, buttons, and the user name, so I did not need to rewrite it.

The biggest lesson was to connect the new features carefully while keeping the old features working.

## 23. What I learned from Week 5

Week 5 helped me understand how a React application can connect to a real authentication service.

I learned how Firebase manages accounts, how React Context shares authentication information, and how React Router can restrict access to pages.

I also learned that the signed-in user is not the same thing as the shopping cart state.

The application now has separate responsibilities for authentication, navigation, and cart management.

This makes the application easier to extend when I start using Cloud Firestore in the next labs.

---

## Conclusion

By the end of Week 5, CampusEats had developed from a basic React interface into a multi-page food ordering application with user authentication.

The application now includes reusable components, shared cart state, browser persistence, checkout validation, routing, and Firebase Authentication.

I still need to develop the later backend features, especially storing restaurant and order information in Firestore and applying database security rules.

The most important thing I learned is that building an application is not only about adding new features. I also need to understand how the different parts work together and make sure older features continue working after every change.