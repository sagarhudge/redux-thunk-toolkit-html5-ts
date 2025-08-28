# Redux Toolkit with Redux Thunk in React (TypeScript)

## Introduction

When building React applications, you often need **state management** across components.  
[Redux Toolkit](https://redux-toolkit.js.org/) is the official, recommended way to write Redux logic.  
It simplifies store setup, reduces boilerplate, and integrates tools like **Redux Thunk**.

---

## What is Redux Thunk?

**Redux Thunk** is a middleware that lets you write **async logic** (like API calls) in Redux.  
Without Thunk, Redux only supports synchronous updates.

**Example use case:**  
- Fetching data from an API before updating the store.
- Delaying actions.
- Dispatching multiple actions based on async results.

---

## Why use Redux Thunk?

- **Async data fetching**: Fetch data before dispatching actions.
- **Complex workflows**: Handle multiple dependent actions.
- **Centralized logic**: Keep async logic in Redux instead of components.

---

## What is a Slice in Redux Toolkit?

A **slice** is a collection of **state**, **reducers**, and **actions** for a single feature.  
It's created using `createSlice`.

Example:  
- `userSlice` → Manages user authentication state.  
- `postsSlice` → Manages blog posts.  

---

## Why use Slices?

- **Encapsulation**: Keep related logic together.
- **Less boilerplate**: Automatically generates action creators and types.
- **Readability**: Easier to maintain and scale.

---

## Project Setup

We’ll create a React app with TypeScript, Redux Toolkit, and Redux Thunk.

```bash
# Create a Vite + React + TypeScript project
npm create vite@latest my-redux-app -- --template react-ts
cd my-redux-app

# Install Redux Toolkit and React Redux
npm install @reduxjs/toolkit react-redux

# Install TypeScript types (if missing)
npm install -D @types/react-redux
