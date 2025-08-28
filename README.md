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

## Homepage & Deployment Reference

- **Homepage field in `package.json`:**  
  `"homepage": "https://sagarhudge.github.io/redux-thunk-toolkit-html5-ts"`  
  This is used for GitHub Pages deployment.

- **Vite base config in `vite.config.ts`:**  
  `base: '/redux-thunk-toolkit-html5-ts/'`  
  Ensures correct asset paths for GitHub Pages.

---

## Usage

- Posts are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
- You can add new posts using the form.
- State management is handled via Redux Toolkit and Redux Thunk.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How It Works

- **Redux Store**: Configured in `src/features/posts/store.ts`.
- **Posts Slice**: Async thunks for fetching and adding posts in `src/features/posts/postsSlice.ts`.
- **Types**: Defined in `src/features/posts/types.ts`.
- **UI**: Main UI in `src/Posts.tsx`, styled with `src/Posts.css`.

---

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the app to GitHub Pages.

