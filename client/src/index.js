import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Provider } from "react-redux";
import { store } from "./store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BlogsProvider } from './components/deleteblog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BlogsProvider>
        <App />
      </BlogsProvider>
    </Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
