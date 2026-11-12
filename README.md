# CampusEats

**BICS 3301 – Cross-Platform Software Development | IIUM**  
**Student ID:** 2417185  
**My restaurant:** Jackal's Corner

CampusEats is a food ordering app I have been building throughout my React practical labs. Students can browse campus restaurants, choose food, add items to a cart, and place sample orders. I started with a simple React interface, then added routing, shared cart state, Firebase Authentication, and now Cloud Firestore.

This is still a **coursework project**, not a real food delivery or payment service.

## What the app can do

### Browse restaurants and menus

- View restaurant details, opening hours, menu items, and prices in RM.
- Open a separate page for each restaurant.
- Load vendors and menu items from **Cloud Firestore** using live `onSnapshot()` listeners.
- See menu or restaurant changes without refreshing the page.
- Show loading and error messages when data cannot be loaded.

### Shopping cart and checkout

- Add food to the cart, change quantities, and remove items.
- See the total item count and price automatically.
- Keep the cart after refreshing the browser using `localStorage`.
- Fill in a name, mahallah, and pickup time, with form validation.
- Save completed orders to Firestore, with one order document per vendor.
- Clear the cart only after Firestore confirms the order was saved.

### Accounts and protected pages

- Register with a name, email, and password.
- Log in with email/password or Google, and log out.
- Show the signed-in user's name in the Header.
- Send guests who open `/cart` or `/orders` to `/login`, then return them after login.
- Restore the login session when the page refreshes.

### Orders and live status

- View orders for the current signed-in user through a Firestore query.
- See the steps **Received → Preparing → Ready → Collected**.
- Watch an order status change on the page when it changes in Firestore.
- Change the pickup time or cancel an order while its status is **Received**.

The order buttons are hidden after the status moves beyond Received, but this **is not database security**. Firestore Security Rules are part of a later lab.

## My personal feature: Daily Special

My matric number ends in **5**, so my assigned feature is **Daily Special with Countdown**. I chose **Jackal's Signature Chicken Chop** from Jackal's Corner.

I first made a countdown that ended at 10:00 PM using the device's time. In Week 5, I made the special available only to signed-in users and added a greeting using their name. In Week 6, I changed it so the special is controlled by Firestore:

- `special: true` marks a menu item as the Daily Special.
- `specialEndsAt` is a Firestore **Timestamp** that controls the countdown.
- The timer updates every second and shows an expired message when it reaches zero.
- Changing `specialEndsAt` in Firestore updates the countdown through the live menu listener.

For Jackal's Corner, the feature is stored in:

```text
vendors/2417185-jackals-corner/menu/2417185-jc-1
```

The special only appears when those Firestore fields have been configured. Guests see a link asking them to log in rather than the food details.

## Technologies I used

| Technology | How I use it |
|---|---|
| React and JavaScript (JSX) | Build the app and its components |
| Vite | Run the development server and create builds |
| React Router | Move between pages and protect routes |
| React Context and custom hooks | Share authentication/cart data and reuse logic |
| Firebase Authentication | Register, log in, and manage users |
| Cloud Firestore | Store live vendor menus and placed orders |
| `localStorage` | Save the shopping cart in the browser |
| CSS | Style the application |
| Git and GitHub | Track my work each week |

## How to run the project

### 1. Requirements

- Node.js and npm
- A Firebase project with a registered Web app
- Firebase Authentication enabled for **Email/Password** and **Google**
- A **Cloud Firestore** database in the same Firebase project

### 2. Clone and install

```powershell
git clone https://github.com/majdiahmadi/campuseats-2417185.git
cd campuseats-2417185
npm install
```

### 3. Set up Firebase

Create `.env.local` beside `package.json`. Copy the values from **Firebase Console → Project settings → General → Your apps → Web app configuration**.

```dotenv
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

Keep `.env.local` out of Git. These web configuration values identify the Firebase project; they do **not** replace proper Firestore Security Rules. Never put service account keys in Vite environment variables.

For local Google sign-in, make sure your development hostname is permitted in Firebase Authentication's authorized domains.

### 4. Start the app

```powershell
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

### 5. Load the sample restaurants into Firestore

On the development server, open:

```text
http://localhost:5173/seed
```

Click **Load demo data**. This reads `public/api/vendors.json` and writes vendor documents and menu subcollections to Firestore. The page is available only in development builds, but is **not an authorization mechanism**; do not expose it publicly.

For the Daily Special, check that Jackal's Chicken Chop has `special: true` and a `specialEndsAt` field of type **Timestamp** in Firestore. The seed function preserves an existing timestamp, but an initial timestamp must be entered in Firebase Console.

If the Home page says **“No restaurants are available at the moment”**, check whether the `vendors` collection has been seeded and whether `.env.local` points to the correct project.

### 6. Check the code

```powershell
npm run lint
npm run build
```

A build passing means the project compiles. I still need to test the Firestore reads, order actions, and real-time updates in the browser.

## Main project files

```text
campuseats-2417185/
├── public/api/vendors.json
├── src/
│   ├── components/
│   │   ├── DailySpecial.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── OrderActions.jsx
│   │   ├── OrderStatus.jsx
│   │   └── ...
│   ├── context/
│   │   ├── AuthProvider.jsx
│   │   ├── CartProvider.jsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   ├── useVendors.js
│   │   ├── useVendor.js
│   │   ├── useMyOrders.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── VendorPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── SeedPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── services/
│   │   ├── vendors.js
│   │   └── orders.js
│   ├── App.jsx
│   └── firebase.js
├── docs/m2/               # Screenshots for the M2 report
├── AI_USAGE.md
├── EXPLAIN.md
├── REFLECTION.md
└── README.md
```

This shows the main files used for Week 6 rather than every file in the repository.

## Pages and routes

| Route | Who can access it? | Purpose |
|---|---|---|
| `/` | Everyone | Browse restaurants and Daily Special entry |
| `/vendor/:id` | Everyone | View a vendor's live menu |
| `/login` | Everyone | Sign in |
| `/register` | Everyone | Create an account |
| `/cart` | Signed-in users | Shopping cart and checkout |
| `/orders` | Signed-in users | Live order history and actions |
| `/seed` | Development builds only | Upload sample vendor data |
| `*` | Everyone | Not-found page |

## How the data is stored

```text
vendors/{vendorId}
  └── menu/{itemId}

orders/{orderId}
```

Each vendor has its own menu subcollection. Orders are stored separately because they need to be queried by the student's Firebase UID. I also save the vendor name, item names, and prices inside each order so an old order keeps the details from when it was placed, even if a menu changes later.

The **cart still uses localStorage**, but **placed orders use Firestore**. Firebase Authentication handles the user account; it does not automatically protect the Firestore documents.

## My progress through the labs

| Week | What I worked on |
|---|---|
| 1 | React setup, JSX, and components |
| 2 | Props, state, events, and Add to Cart |
| 3 | JSON data, checkout validation, quantities, and Daily Special countdown |
| 4 | React Router, Context, custom hooks, and localStorage |
| 5 | Firebase Authentication, login/register, and protected pages |
| 6 | Firestore services, live vendors and menus, cloud orders, order actions, and Timestamp-based Daily Special |
| 7 | Firestore security rules and permissions (next) |
| 8 | Testing, improvements, and deployment (planned) |

Week 6 implementation has been added as part of the lab work. I still need to make sure the full browser tests, screenshots, and Git checkpoint are completed before treating the lab as fully verified.

## Testing and evidence

For Week 6, these are the main things I need to check:

- Vendors and their menus load from Firestore after running `/seed`.
- Changing a menu item's price in Firebase Console updates the page without refreshing.
- Placing an order saves the correct details under `orders` and clears the cart.
- Ordering from two vendors creates two order documents.
- Changing an order's status updates the Orders page automatically.
- Changing a pickup time and cancelling a Received order both work.
- The Daily Special reads its deadline from Firestore and updates when that deadline changes.
- `npm run lint` and `npm run build` finish without errors.

The M2 report also needs these screenshots in `docs/m2/`:

```text
fig-1-1-firestore-shop.png
fig-2-0-order-doc.png
fig-3-1-feature-data.png
```

I keep more detailed notes in [REFLECTION.md](REFLECTION.md), [EXPLAIN.md](EXPLAIN.md), and [AI_USAGE.md](AI_USAGE.md).

## Restaurants and credits

I made **Jackal's Corner** for my personal CampusEats work. I also included sample restaurant data shared by three classmates, keeping their original IDs and giving them credit here.

| Restaurant | Student ID | Menu items |
|---|---|---:|
| Jackal's Corner | 2417185 | 10 |
| Sarap Pagi | 2415663 | 8 |
| Mahasiswa Vendor | 2410319 | 5 |
| Chef Haddif Expert | 2412181 | 8 |

There are **4 restaurants and 31 menu items** in the sample JSON data. My restaurant is based in Nilai, Negeri Sembilan, with Western, Pasta, Rice, Drinks, and Desserts on its menu.

## Current limitations

CampusEats is for learning and testing. There is no real restaurant connection, payment gateway, or production ordering service. The cart is saved in the current browser rather than synced between devices. Firestore test-mode rules are not suitable for a public app, and hiding buttons in React does not stop unauthorized database writes. Database security rules and further testing are important before any real deployment.

---

*I built CampusEats step by step through my React labs. Each week helped me understand how the different parts of an app work together, and I am continuing to improve it as I learn.*
