# CampusEats

**A React-based campus food ordering interface built for BICS 3301 – Cross-Platform Software Development at International Islamic University Malaysia (IIUM).**

CampusEats is a coursework project that simulates browsing food vendors on campus, viewing their menus, and adding items to a shopping cart. The application is developed incrementally through weekly labs to practise React fundamentals and progressively introduce more advanced cross-platform development concepts.

> **Project status:** React fundamentals (Weeks 1–2). Additional features will be added as the course progresses.

## Features

### Implemented

- Browse a list of campus food vendors.
- Select a vendor to display its menu.
- View menu-item names, descriptions, categories, and prices in Malaysian Ringgit (RM).
- See vendor open/closed status and menu-item availability.
- Add available menu items to a cart.
- See the cart item count update in the header.

### Planned

The following are part of the subsequent coursework phases and are **not yet implemented**:

- Cart page with quantity controls, totals, and a checkout form.
- Loading and error states for asynchronously fetched vendor data.
- Multiple pages using React Router, including vendor and order pages.
- Shared cart state using React Context and custom hooks.
- Local storage for cart persistence across refreshes.
- Later course topics, including Firebase integration.

## Tech Stack

- **React** – component-based user interface and state management.
- **JavaScript (JSX)** – application logic and component markup.
- **Vite** – local development server and production build tool.
- **CSS** – application styling (based on the course-provided starter stylesheet).
- **Git and GitHub** – version control, milestones, and coursework tracking.

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (with npm) and [Git](https://git-scm.com/).

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/majdiahmadi/campuseats-2417185.git
   ```

2. Open the project folder:

   ```bash
   cd campuseats-2417185
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal (typically `http://localhost:5173`).

### Other Commands

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run the configured linter
```

## Project Structure

```text
campuseats-2417185/
├── public/                  # Public assets
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation and cart badge
│   │   ├── VendorCard.jsx   # Selectable vendor details
│   │   ├── MenuItemCard.jsx # Individual menu item
│   │   ├── MenuList.jsx     # Menu rendered from vendor data
│   │   └── Footer.jsx       # Page footer
│   ├── data/
│   │   └── vendors.js       # Vendor and menu sample data
│   ├── App.jsx              # Main app state and layout
│   ├── index.css            # Application styles
│   └── main.jsx             # React entry point
├── AI_USAGE.md              # Weekly AI assistance log
├── REFLECTION.md            # Lab reflections
├── package.json             # Scripts and dependencies
└── README.md                # Project documentation
```

## Weekly Development Progress

| Week | Focus | Status |
| --- | --- | --- |
| 1 | Git/GitHub setup, JSX, reusable components and starter UI | Completed |
| 2 | Props, `useState`, menu rendering with `.map()`, vendor selection and cart badge | Completed |
| 3 | Cart details, controlled checkout form, validation and data fetching | Planned |
| 4 | Routing, React Context, custom hooks and local storage | Planned |

The repository uses Git commits and weekly tags as development checkpoints. See the [repository tags](https://github.com/majdiahmadi/campuseats-2417185/tags) for available milestones.

## Academic Documentation

- [AI_USAGE.md](AI_USAGE.md) – records how AI tools were used, evaluated, and corrected during each lab week.
- [REFLECTION.md](REFLECTION.md) – contains reflections on React concepts and development lessons.

AI tools are used as learning support; the project is reviewed against lab requirements and tested by the student.

## Author

**Majdi Ahmadi bin Mohd Zohdi**  
Matric No.: 2417185  
Bachelor of Computer Science (Honours)  
Specialisation: Security in Digital Systems  
International Islamic University Malaysia (IIUM)

**Course:** BICS 3301 – Cross-Platform Software Development

---

*This repository is an academic learning project and is under active development.*
