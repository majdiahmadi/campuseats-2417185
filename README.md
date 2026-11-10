# CampusEats

**A React-based campus food ordering application developed for BICS 3301 – Cross-Platform Software Development at the International Islamic University Malaysia (IIUM).**

CampusEats is a coursework project that allows users to browse campus food vendors, view menus, add food to a shopping cart, complete a simulated checkout, and view order history. From Week 5, the application also supports user registration, email/password login, Google sign-in, logout, and members-only pages through Firebase Authentication.

The application is developed progressively through weekly practical labs to learn React and cross-platform software development concepts.

> **Project status:** Labs **1–5 completed** (as of Week 5). The app now uses React Router, Context API, custom hooks, localStorage persistence, Firebase Authentication, protected routes, and a Daily Special countdown. Cloud Firestore data integration is planned for Week 6.

## Features

### Implemented in Weeks 1–4

#### Vendor and menu

- Browse campus food vendors and view each vendor's menu on a separate page.
- View food names, descriptions, categories, and prices in Malaysian ringgit (RM).
- See vendor opening status and food availability.
- Fetch vendor data from the local mock API (`/api/vendors.json`) with `fetch()`.
- Display loading and error messages, with a **Try again** action if loading fails.
- Navigate between vendors with React Router.

#### Shopping cart

- Add available items to the cart.
- Increase an existing item's quantity when the same item is added again.
- Increase/decrease quantities, remove items, and see the total quantity in the Header.
- Automatically calculate line totals and the overall cart total.
- Share cart state across pages through React Context (`CartProvider` and `useCart()`).
- Preserve cart items after refresh using browser `localStorage`.

#### Checkout

- Enter a customer name, select a mahallah, and choose a pickup time.
- Validate the checkout form before placing an order and show field-specific errors.
- Create a **simulated** order after successful checkout.
- Clear the cart and navigate to the Orders page after checkout.

#### Order history

- View previously placed orders, including items, details, total price, and initial **Received** status.
- Store order history in `localStorage`, so it remains available after refresh.

#### Navigation, hooks, and context

- Use React Router for `/`, `/vendor/:id`, `/cart`, `/orders`, and unknown routes (`*`).
- Keep the Header and Footer visible through the shared `Layout` component and `Outlet`.
- Use `Link` and `NavLink` for navigation without full page reloads.
- Use `useVendors()` to fetch vendor data, `useCart()` to access shared cart state, and `useLocalStorage()` for browser persistence.

### Implemented in Week 5 — Firebase Authentication

- Connect the React application to a Firebase project using the Firebase JavaScript SDK.
- Read Firebase web configuration from a root-level `.env.local` file.
- Register users using **email and password**, including a display name.
- Sign in with **email and password** or a **Google account**.
- Sign out of the application.
- Listen for authentication changes with `onAuthStateChanged()` so the signed-in user is restored after page refresh.
- Share the current user, auth-loading status, and sign-in/sign-out actions using `AuthProvider` and `useAuth()`.
- Convert common Firebase authentication error codes into user-friendly messages.
- Display **Log in** for guests, or **Hi, [name]** and **Log out** for signed-in users.
- Protect the shopping cart (`/cart`) and order history (`/orders`) with `ProtectedRoute`.
- Redirect guests to `/login` and return them to their intended page after successful sign-in.
- Keep vendor browsing, the login page, and the registration page public.

**Week 5 data scope:** Firebase Authentication manages accounts, but vendor/menu data still comes from local JSON. Cart and order history are still stored in browser `localStorage`, not Cloud Firestore. The cart and orders are not yet synchronized per account across different browsers or devices.

### Personal feature — Daily Special Countdown (matric ending in 5)

- Feature the **Jackal's Signature Chicken Chop** from Jackal's Corner.
- Show a live countdown to the special's end time, updated every second with `setInterval()`.
- Clean up the interval with `clearInterval()`.
- Display remaining time in `HH:MM:SS` format and an expired message after the countdown ends.
- Show the special on the Home page with a link to Jackal's Corner menu.
- **Week 5 extension:** Require sign-in to view the personalized special. Guests see a prompt to log in; signed-in users see a personalized message such as **“Today's special for [name]”** while the countdown continues.

### Planned for later weeks

- **Week 6:** Use Cloud Firestore for shared vendor/menu data and cloud-based orders.
- **Week 7:** Apply Firestore security rules, roles, and permissions.
- **Week 8:** Optimize, test, and deploy using Firebase Hosting.
- Additional functionality in subsequent practical labs.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Build reusable user-interface components |
| JavaScript (JSX) | Application logic and UI markup |
| Vite | Development server and production builds |
| React Router (`react-router`) | Client-side page navigation and protected routes |
| React Context API | Share cart/order state and authentication state |
| React Hooks | State, effects, and reusable logic |
| Firebase Authentication | User registration, login, Google sign-in, logout, and auth session state |
| Firebase JavaScript SDK | Connect the React app to the Firebase project |
| `localStorage` | Persist cart and order history in the browser |
| CSS | Application styling |
| JSON | Local mock vendor and menu data |
| Git and GitHub | Version control and weekly milestones |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm (use a supported LTS version).
- [Git](https://git-scm.com/).
- A **Firebase project** with a registered Web app and **Authentication** enabled.
- In Firebase Console → Authentication → Sign-in method, enable **Email/Password** and **Google**.
- Make sure `localhost` is listed in Firebase Authentication's authorized domains when running locally, and allow browser pop-ups for Google sign-in.

### Run locally

**1. Clone the repository**

```powershell
git clone https://github.com/majdiahmadi/campuseats-2417185.git
```

**2. Open the project folder**

```powershell
cd campuseats-2417185
```

**3. Install dependencies**

```powershell
npm install
```

The Firebase SDK is a project dependency. If it is missing from `package.json`, install it with `npm install firebase`.

**4. Create `.env.local` in the project root (next to `package.json`)**

Copy the six values from **Firebase Console → Project settings → General → Your apps → Web app config**. Replace the placeholders with your own values.

```dotenv
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```

Do **not** include quotation marks or spaces around `=`. Make sure `.gitignore` contains `.env.local` or `*.local` so your local configuration is not committed.

> The Firebase **web configuration is not a server-side secret**; it identifies the Firebase project. It is still kept out of this coursework repository as instructed. Firebase Authentication and database security rules—not hiding web configuration—enforce access control. Never place service-account credentials or other server secrets in a `VITE_` variable.

**5. Start the development server**

```powershell
npm run dev
```

**6. Open the local URL displayed by Vite**, usually [http://localhost:5173/](http://localhost:5173/).

Restart `npm run dev` after changing `.env.local`.

### Other commands

```powershell
npm run lint
npm run build
npm run preview
```

### Firebase project details

- **Project nickname:** CampusEats (web app nickname from the pre-work: `campuseats-web`).
- **Firebase project ID:** **[INSERT YOUR EXACT FIREBASE PROJECT ID]** — copy it from Firebase Console or your `VITE_FIREBASE_PROJECT_ID`. The ID may have an automatically added suffix.
- **Plan:** Spark (no-cost) for the coursework.
- **Sign-in methods:** Email/Password and Google.
- **Firestore:** Prepared in pre-work for Week 6; no vendor or order data is stored there in Week 5.

## Project Structure

```text
campuseats-2417185/
├── public/
│   └── api/
│       └── vendors.json
├── src/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── DailySpecial.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── MenuItemCard.jsx
│   │   ├── MenuList.jsx
│   │   ├── ProtectedRoute.jsx          # NEW Week 5
│   │   ├── Status.jsx
│   │   └── VendorCard.jsx
│   ├── context/
│   │   ├── auth-context.js            # NEW Week 5
│   │   ├── AuthProvider.jsx           # NEW Week 5
│   │   ├── cart-context.js
│   │   └── CartProvider.jsx
│   ├── hooks/
│   │   ├── useAuth.js                 # NEW Week 5
│   │   ├── useCart.js
│   │   ├── useLocalStorage.js
│   │   └── useVendors.js
│   ├── pages/
│   │   ├── CartPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx               # NEW Week 5
│   │   ├── NotFoundPage.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── RegisterPage.jsx            # NEW Week 5
│   │   └── VendorPage.jsx
│   ├── App.jsx
│   ├── authErrors.js                   # NEW Week 5
│   ├── firebase.js                     # NEW Week 5
│   ├── index.css
│   └── main.jsx
├── .env.local                         # LOCAL ONLY - do not commit
├── .gitignore
├── AI_USAGE.md
├── EXPLAIN.md
├── REFLECTION.md
├── README.md
├── package.json
├── package-lock.json
├── index.html
└── vite.config.js
```

The layout above shows the files described in the Week 5 lab and the previously documented Weeks 1–4 project. Some existing filenames may vary in your local repository.

## Application Routes

| Route | Page | Access | Description |
|---|---|---|---|
| `/` | `HomePage` | Public | Vendor list and Daily Special entry point |
| `/vendor/:id` | `VendorPage` | Public | Selected restaurant menu |
| `/login` | `LoginPage` | Public | Email/password and Google login |
| `/register` | `RegisterPage` | Public | Create an account with a name, email, and password |
| `/cart` | `CartPage` | Signed-in only | Shopping cart and checkout |
| `/orders` | `OrdersPage` | Signed-in only | Locally stored order history |
| `*` | `NotFoundPage` | Public | Unknown URLs |

Every page is rendered inside the shared `Layout`, which displays the Header and Footer.

## Application Architecture

```text
App
└── BrowserRouter
    └── AuthProvider                     (Firebase user, auth loading, auth actions)
        └── CartProvider                 (cart, orders, cart actions)
            └── Routes
                └── Layout               (Header + Outlet + Footer)
                    ├── /                HomePage
                    ├── /vendor/:id      VendorPage
                    ├── /login           LoginPage
                    ├── /register        RegisterPage
                    ├── ProtectedRoute   (checks user and loading)
                    │   ├── /cart        CartPage
                    │   └── /orders      OrdersPage
                    └── *                NotFoundPage
```

**Cart state:** `CartProvider` owns the shared cart and order history; `useCart()` reads that state in the Header and relevant pages. The `useLocalStorage()` hook saves the cart and orders in the current browser.

**Authentication state:** `AuthProvider` listens to Firebase using `onAuthStateChanged()`. The `useAuth()` hook gives components access to `user`, `loading`, `register`, `login`, `loginWithGoogle`, and `logout`.

**Protected pages:** `ProtectedRoute` checks `loading` first. Once Firebase has determined the user's status, it allows signed-in users through or redirects guests to `/login`. The login page can use the saved route to return users to the page they originally requested.

## Weekly Development Progress

| Week | Focus | Status |
|---|---|---|
| 1 | Git/GitHub setup, JSX, and React components | Completed |
| 2 | Props, `useState`, vendor selection, and Add to Cart | Completed |
| 3 | Cart quantities, checkout validation, API fetching, and Daily Special countdown | Completed |
| 4 | React Router, Context API, custom hooks, localStorage, and order history | Completed |
| 5 | Firebase setup, user registration, email/Google login, logout, auth context, protected routes, and personalized Daily Special | **Completed** |
| 6 | Cloud Firestore integration for vendor/menu/order data | Planned |
| 7 | Firestore security rules and access control | Planned |
| 8 | Testing, optimization, and Firebase Hosting | Planned |

The project uses Git commits and weekly tags to track development. See [repository tags](https://github.com/majdiahmadi/campuseats-2417185/tags) for published milestones.

## React and Firebase Concepts Learned

### Week 1

- React components and JSX, declarative UI, fragments, and reusable components.

### Week 2

- Props and state, `useState()`, `.map()` and keys, event handlers, and passing functions between components.

### Week 3

- Controlled inputs, validation, lifting state, `reduce()`, `useEffect()`, `fetch()`, loading/error handling, `AbortController`, and countdown timers.

### Week 4

- Client-side routing, dynamic URL parameters, `Link`/`NavLink`, `Outlet`, Context API, custom hooks, and `localStorage`.

### Week 5

- Firebase project configuration and `.env.local`.
- `initializeApp()` and `getAuth()` from the Firebase SDK.
- Registration with `createUserWithEmailAndPassword()` and `updateProfile()`.
- Email/password sign-in with `signInWithEmailAndPassword()`.
- Google sign-in with `signInWithPopup()` and `GoogleAuthProvider`.
- Sign-out with `signOut()`.
- Listening for sessions with `onAuthStateChanged()` and effect cleanup.
- Sharing authentication state with `AuthProvider`, `AuthContext`, and `useAuth()`.
- Using `ProtectedRoute`, `Navigate`, and `Outlet` to guard routes.
- Using `async`/`await`, `try`/`catch`, and friendly authentication error messages.

## Browser Persistence and Data Storage

CampusEats currently stores cart and order history in the browser using the custom `useLocalStorage()` hook:

- `campuseats-cart`
- `campuseats-orders`

Those keys keep data after refreshing the browser on the same device and browser profile, but they are **not user-specific cloud records**. Logging into a different account on the same browser does not automatically provide separate cloud order history. Cloud synchronization is planned for a later lab.

Firebase Authentication stores account identities and manages sign-in sessions. It does **not**, by itself, move the cart, vendor menus, or orders into Firestore.

## Personal Feature — Daily Special

My matric number is **2417185**, so the final digit **5** corresponds to the **Daily Special Countdown** feature.

The featured item is **Jackal's Signature Chicken Chop** from **Jackal's Corner**. The countdown ends at **22:00 (10:00 PM) according to the device's local time** and displays an expired message when the special ends. It updates with `setInterval()` and uses `clearInterval()` to clean up the timer.

For Lab 5, the special is personalized for authenticated users. Guests are invited to log in, while a signed-in user can see the special addressed to their Firebase display name or email. The countdown continues to run for signed-in users.

## Testing

### Weeks 1–4 testing (previously documented)

- Vendor data fetching and loading/error/retry behavior.
- Vendor navigation, shopping cart actions, quantities, and total calculations.
- Checkout form validation, simulated order placement, and order history.
- Cart/order persistence, unknown routes, and Daily Special countdown.

### Week 5 authentication acceptance checks

The Lab 5 functionality can be demonstrated with these checks:

1. Register a new account with a display name, email, and password.
2. Log out and log back in using email/password.
3. Sign in with Google.
4. Confirm that the Header shows the user name and **Log out** after login, and **Log in** after logout.
5. Open `/cart` or `/orders` while signed out; confirm redirection to `/login`.
6. Sign in from that login page and confirm return to the originally requested protected page.
7. Refresh while signed in; confirm that the authenticated session is restored.
8. Enter invalid credentials or reuse an existing email; confirm a friendly error message appears.
9. Check that the Daily Special prompts guests to log in and greets signed-in users.
10. Confirm `.env.local` is not tracked by Git and that the browser console has no unexpected errors.

### Code quality

Use the following commands after the Week 5 changes:

```powershell
npm run lint
npm run build
```

The earlier Weeks 1–4 version passed lint and build checks. Run them again for the Week 5 changes; successful Week 5 results should only be documented after they have actually been checked.

## Academic Documentation and Version Control

- [AI_USAGE.md](AI_USAGE.md) — Records AI assistance used in weekly development, including Week 5 tools, prompts, kept/changed suggestions, and a mistake or correction.
- [REFLECTION.md](REFLECTION.md) — Weekly reflections and learning experiences.
- [EXPLAIN.md](EXPLAIN.md) — Notes on React architecture, state management, personal feature, and testing (if retained in the repository).

ChatGPT has been used for concept explanations, debugging help, implementation review, and documentation. Code is incorporated into the coursework project and should be checked against the lab requirements.

**Week 5 checkpoint:** Commit the Lab 5 work, push the changes, and push a `week-5` tag after verification:

```powershell
git add .
git commit -m "Week 5: Firebase Auth, AuthContext and protected routes"
git push
git tag week-5
git push origin week-5
```

Before creating the tag, check `git status` and confirm `.env.local` is not staged. If you have already created the `week-5` tag, do not create it a second time.

## Current Project Limitations

- Vendor data still loads from a local JSON file rather than Cloud Firestore.
- Cart and order history are stored in browser `localStorage`, so they are not synchronized between devices or reliably separated by account.
- Orders are simulated and are not sent to a real restaurant.
- Real payment processing has not been implemented.
- Firebase Authentication is integrated, but the application's business data is not yet stored in Firebase.
- The Daily Special uses a fixed featured menu item and the device's local time.

## Vendor Credits

The following vendor information was documented during earlier development stages. The actual records in the application are determined by `public/api/vendors.json`.

| Restaurant | Matric Number | Menu Items | Categories |
|---|---|---:|---:|
| Jackal's Corner | 2417185 | 10 | 5 |
| Sarap Pagi | 2415663 | 8 | 4 |
| Mahasiswa Vendor | 2410319 | 5 | 2 |
| Chef Haddif Expert | 2412181 | 8 | 3 |

### My restaurant: Jackal's Corner (2417185)

- **Location:** Nilai, Negeri Sembilan.
- **Operating hours:** 8:00 AM–10:00 PM.
- **Menu:** 10 items in five categories: Western, Pasta, Rice, Drinks, and Desserts.
- **Daily Special:** Jackal's Signature Chicken Chop.

### Classmates' restaurant data

Restaurant and menu data from classmates were used as mock vendor data during earlier lab work. The React components, cart, checkout, API fetching, routing, Firebase authentication integration, and personal feature were developed for this CampusEats coursework project.

---

*This repository is an academic learning project and will continue to evolve through subsequent practical labs.*
