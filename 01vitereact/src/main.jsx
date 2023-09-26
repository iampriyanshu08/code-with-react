import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>My Custom ReactApp</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit this page",
// };

const anotherUser = "Rachit"

const reactElement = React.createElement('a',{
    href: "http://google.com",
    target: "_blank",
}, 'Click me to visit this page',
anotherUser);



const anotherElement = (
  <a href="https://gooogle.com" target="_blank">
    Visit my google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(
reactElement
);
