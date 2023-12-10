import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
let gethteprops = (store) => {
  root.render(
    <React.StrictMode>
      <App
        info={store.state.HeaderInfoContact}
        foodItems={store.state.FoodItemsPrzekaski}
      />
    </React.StrictMode>
  );
};
gethteprops(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//
