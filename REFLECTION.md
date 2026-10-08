
# Week 1 Reflection

## 1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

Imperative programming requires us to manually update the DOM step by step using JavaScript. Declarative programming in React allows us to describe what the UI should look like, and React handles the updates automatically when the state changes.

## 2. Why must a component name start with a capital letter?

React components must start with a capital letter because React uses capital letters to distinguish custom components from normal HTML elements. For example, `<Welcome />` is treated as a React component, while `<welcome />` is treated as an HTML tag.

## 3. What does a fragment <>...</> do, and why not just use a <div>?

A React fragment allows us to group multiple elements without adding an extra HTML element to the DOM. It is useful because it keeps the HTML structure cleaner compared to wrapping everything inside an unnecessary `<div>`.

## 4. Name one benefit of splitting the UI into small components.

One benefit is code reusability. By splitting the UI into smaller components, we can reuse them in different parts of the application without rewriting the same code. It also makes the code easier to maintain and understand.
