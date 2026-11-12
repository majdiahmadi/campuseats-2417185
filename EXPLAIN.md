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

---
 
# Week 6 - Cloud Firestore: CRUD and Real-Time Data

## 24. Why I added Cloud Firestore

Before Week 6, CampusEats loaded restaurant information from `public/api/vendors.json`. The cart and previous orders were saved in the browser using `localStorage`.

This worked for the earlier labs, but the data was not shared between browsers. If I changed a menu price in the JSON file, another user would not automatically see the new price.

In Week 6, I started using Cloud Firestore to store restaurant menus and placed orders online. I kept Firebase Authentication from Week 5 and used it to identify which student placed each order.

The shopping cart still uses `localStorage`. Only the restaurant data and completed orders have moved to Firestore.

## 25. How I connected Firestore

I used the same Firebase project that I created for Week 5. I created a Cloud Firestore database and added `getFirestore()` to `src/firebase.js`.

```javascript
import { getFirestore } from 'firebase/firestore'

export const db = getFirestore(app)
```

The `db` variable is the connection that my service files use when reading and writing database documents.

I learned that Firebase Authentication and Firestore are different services. Authentication manages user accounts, while Firestore stores application data such as vendors, menu items, and orders.

## 26. How I organized the Firestore data

Firestore stores information in collections and documents. For CampusEats, I used this structure:

```text
vendors
  └── 2417185-jackals-corner
      ├── name
      ├── location
      ├── openHours
      └── menu
          ├── 2417185-jc-1
          ├── 2417185-jc-2
          └── ...

orders
  ├── order-document-1
  └── order-document-2
```

Each restaurant has its own document in `vendors`, and its menu items are stored in a `menu` subcollection. I use a top-level `orders` collection so I can load a student's orders even if they ordered from different restaurants.

My own restaurant is Jackal's Corner. I also kept the three restaurants shared by classmates: Sarap Pagi, Mahasiswa Vendor, and Chef Haddif Expert. Together, the seed file contains four restaurants and 31 menu items.

## 27. Why I created a services folder

Instead of putting Firestore code directly into the page components, I created a `src/services` folder.

- `vendors.js` handles vendor and menu subscriptions and uploading the sample data.
- `orders.js` handles placing orders, reading a student's orders, changing pickup times, and cancelling orders.

For example, a page can call `subscribeToVendors()` without needing to write the full Firestore query itself.

This makes the pages easier for me to read. If I need to change how the database works, I can usually start with the service file instead of editing several components.

## 28. How I uploaded the restaurant data

My original restaurant information was still in `public/api/vendors.json`. I added a development-only `/seed` page to copy that data into Firestore.

The page calls `seedDemoData()`, which uses `writeBatch()` to save the vendor documents and their menu items.

```javascript
const batch = writeBatch(db)

batch.set(doc(db, 'vendors', id), vendor)

await batch.commit()
```

A batch lets Firestore apply the writes together instead of saving only part of the data if a write fails.

One problem I ran into was that the Home page showed **"No restaurants are available at the moment."** When I looked at Firebase Console, the Firestore database was empty. I learned that connecting the app to Firestore does not upload my JSON data automatically. I needed to use the `/seed` page first.

I also updated the seeding logic to preserve an existing `specialEndsAt` Timestamp when uploading the menu data again.

## 29. How live vendor and menu updates work

In the previous labs, `useVendors()` used `fetch()` to read the JSON file once. In Week 6, I changed it to use Firestore's `onSnapshot()` through `subscribeToVendors()`.

```javascript
const unsubscribe = subscribeToVendors(
  (data) => {
    setVendors(data)
    setLoading(false)
  },
  (err) => {
    setError(err.message)
    setLoading(false)
  }
)

return unsubscribe
```

`onSnapshot()` keeps listening while the page is open. When a vendor or menu document changes in Firestore, the listener sends updated data to React.

I also created `useVendor()` to listen to one restaurant document and its menu subcollection. Since these are two listeners, the hook cleans up both when the component is removed or the vendor ID changes.

I learned that cleanup is important because I do not want old listeners to keep running after I leave a page.

## 30. How placing an order works in Week 6

I changed the checkout flow so completed orders are saved to Firestore instead of `localStorage`.

The steps are:

1. I add food to the cart and open the Cart page.
2. `CheckoutForm` checks the name, mahallah, and pickup time.
3. `CartPage.jsx` calls `placeOrders()` in `services/orders.js`.
4. The function groups cart items by `vendorId` and creates one order document for each vendor.
5. A Firestore batch saves the orders with their details and a `serverTimestamp()`.
6. After the save succeeds, the app clears the cart and opens `/orders`.

The important part is:

```javascript
await placeOrders(user, cart, details)
clearCart()
navigate('/orders')
```

I use `await` because I should not clear the cart before Firestore confirms that the order was saved. If the write fails, the app can show an error and keep the items in the cart.

Each order also copies the vendor name, item names, prices, quantities, and total. This is useful because menu prices may change later, but the old order should still show what was recorded when the student placed it.

## 31. How the Orders page updates live

I created `useMyOrders()` to load the signed-in student's orders. It calls `subscribeToMyOrders()` with the student's Firebase UID.

```javascript
const q = query(
  collection(db, 'orders'),
  where('studentUid', '==', uid)
)
```

This filters the query to orders with the matching `studentUid`. The listener uses `onSnapshot()`, so the Orders page receives new data when an order is added or changed.

I also added `OrderStatus.jsx` to show the four stages:

```text
Received → Preparing → Ready → Collected
```

For example, if the `status` field changes from `Received` to `Preparing` in Firebase Console, the status tracker can update without refreshing the browser.

I learned that I do not need to change the displayed orders manually after every database write. The Firestore listener updates the hook's state for me.

## 32. How changing and cancelling orders works

For B5, I added two functions in `services/orders.js`:

```javascript
export function changePickupTime(orderId, pickupTime) {
  return updateDoc(doc(db, 'orders', orderId), { pickupTime })
}

export function cancelOrder(orderId) {
  return deleteDoc(doc(db, 'orders', orderId))
}
```

`updateDoc()` changes the pickup time without replacing the whole order. `deleteDoc()` removes the order document.

I created `OrderActions.jsx` to show **Save time** and **Cancel order**. The Orders page shows these controls only when the order status is `Received`, because students should not change an order after the shop starts preparing it.

I also learned that hiding buttons is not the same as protecting the database. The React app checks what to display, but proper Firestore Security Rules are still needed to stop unauthorized changes. These rules are covered in Week 7.

## 33. How I updated my Daily Special feature

My matric number ends with **5**, so I continued working on the Daily Special countdown for Jackal's Corner.

In the earlier labs, the countdown used a fixed end time of `22:00` in the React code. For Week 6, I changed the design so the deadline comes from Firestore.

The featured menu document uses two fields:

- `special`: a Boolean that marks the menu item as the Daily Special.
- `specialEndsAt`: a Firestore Timestamp containing the deadline.

In `HomePage.jsx`, I find the special item with:

```javascript
const specialItem = specialMenu.find(
  (item) => item.special === true
)
```

In `DailySpecial.jsx`, I read the deadline using:

```javascript
const endMilliseconds = item.specialEndsAt?.toMillis?.()
```

The component compares that deadline with the current time and updates the countdown every second. Since the menu is loaded using `onSnapshot()`, changing `specialEndsAt` in Firestore can change the countdown without refreshing the page.

I also kept my Week 5 authentication feature. Guests see a login prompt, while signed-in users can see a personalized Daily Special.

## 34. What I checked and problems I faced

I used `npm run lint` and `npm run build` while updating the project. One build completed successfully but showed a warning about a JavaScript bundle larger than 500 kB. I learned that this was a performance warning, not a build failure.

I also received a lint warning in `useVendors.js` because I called `setLoading()` and `setError()` directly inside `useEffect()`. I moved those reset calls into the retry function and kept the Firestore listener inside the effect.

Another problem was the empty Firestore database. My React app was running and I could log in, but no restaurants appeared because I had not uploaded the vendor data yet.

The main Week 6 tests I need to check in the browser are:

| Test | Expected result |
| --- | --- |
| Open Home page | Vendors load from Firestore |
| Open Jackal's Corner | Menu items appear from its subcollection |
| Change a menu price in Firebase Console | Price updates without refreshing |
| Place an order | Order is saved in Firestore and cart clears |
| Change an order status | Status tracker updates live |
| Change pickup time while Received | Updated time appears in Firestore |
| Cancel an order while Received | Order disappears from the page |
| Change `specialEndsAt` | Daily Special countdown updates live |

These are expected results to verify, not a claim that every browser test has already passed.

## 35. What I learned from Week 6

Week 6 helped me understand the difference between saving data in the browser and saving it in a cloud database.

I learned how Firestore collections, documents, subcollections, and batches work. I also learned why `onSnapshot()` is useful when the app needs to show live data.

The biggest change for me was separating database operations from React components. I now have service files to communicate with Firestore, hooks to manage live data, and pages to display it.

I also learned that a successful build does not mean the database is ready. I still need to check Firebase Console and test the application in the browser.

Week 6 made CampusEats feel more like a real food ordering application, although it is still a class project without payment processing or proper production security rules.

---
