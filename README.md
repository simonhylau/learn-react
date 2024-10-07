# learn-react

## Requirement

install node.js

## Command to start

> npm create vite@latest

select typescript react project. e.g. project name: react-app

> cd react-app
> npm install
> npm run dev

## Key folders

`public`: static files.
`src`: react code

## Key files

`.\index.html`
`.\src\App.tsx`
`.\src\main.tsx` The main react component that using `createRoot` and calls `<App/>`
`.\src\App.css` style for App component
`.\src\index.css` style for global

## React components

### Function based components

```typescript
function Message() {
  return <h1>Hello Word</h1>;
}
export default Message;
```

with the above code, you can use `<Message />` in other component

## Additional Tools

### UI

[`bootstrap`](https://getbootstrap.com/)

> npm i bootstrap

replace `import './index.css'` in main.tsx to `import 'bootstrap/dist/css/bootstrap.css`

## Creating components

Create a folder named `components` in `src` folder for all components

## JSX

```typescript
return <h1>Hello Word</h1>;
```

above code returning a jsx

`for` loop is not able to using in JSX. instead, use `items.map((item, index) => (...)` as `foreach` in JSX

### javascript in JAX

use braces `{}` for javacript in JAX. But only for single line functions.
`key` is required for the items that required to retrieved by js

```typescript
return (
  <>
    {items.length === 0 ? <Message message="No items to display" /> : null}
    <h1>List</h1>
    <ul className="list-group">
      {items.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  </>
);
```

## Javascript tips

1. `true && anything` = anything
2. `false && anything` = false = nothing to display
