
# AI Usage Log

## Week 1

- **Tool(s):**
  - ChatGPT (OpenAI)

- **What I asked for:**
  - Asked for step-by-step guidance on setting up a React project using Vite.
  - Asked for help fixing npm errors related to missing `package.json`.
  - Asked how to clean the default Vite starter files.
  - Asked for help fixing a missing `hero.png` import error.
  - Asked for explanations of React components, JSX, and how to use `Welcome.jsx` and `CourseInfo.jsx`.
  - Asked for guidance on composing multiple components in `App.jsx`.

- **What I kept, changed or rejected, and why:**
  - Followed the guidance to run npm commands inside the correct project directory.
  - Removed unnecessary starter code and updated the React components according to the lab instructions.
  - Used the suggested component structure to understand how React components work together.
  - Checked the code against the lab sheet to ensure it followed the requirements.

- **One thing the AI got wrong and how I fixed it:**
  - The earlier project code still referenced an image file (`hero.png`) that was not available, causing a Vite import error.
  - I fixed the issue by replacing the old `App.jsx` code with the required `Welcome` and `CourseInfo` components.

## Week 2

- **Tool(s):**
  - ChatGPT (OpenAI)

- **What I asked for:**
  - Asked for explanations of Git commands such as `git add`, `git commit`, and `git push`.
  - Asked how to view commit history in Git and GitHub.
  - Asked for help fixing a JavaScript syntax error in `vendors.js`.
  - Asked how to implement Add to Cart using React props and state.
  - Asked for help updating `MenuItemCard.jsx`, `MenuList.jsx`, and `App.jsx`.
  - Asked for code reviews of `Header.jsx`, `VendorCard.jsx`, `Footer.jsx`, and `main.jsx`.

- **What I kept, changed or rejected, and why:**
  - Used the explanations to understand Git and React state management.
  - Corrected the syntax error in `vendors.js`.
  - Updated the components to pass the `onAdd` function through props.
  - Implemented `useState` to store cart items and update the cart badge.
  - Checked the suggested code against the lecturer's lab instructions.

- **One thing the AI got wrong and how I fixed it:**
  - During the cart implementation, `cartCount` was declared twice in `Header.jsx`, causing a compilation error.
  - I checked the error and removed `const cartCount = 0` so that `Header` could receive `cartCount` as a prop from `App.jsx`.
