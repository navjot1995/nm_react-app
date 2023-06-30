
import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import POST from "./pages/allpost.js";
import User from "./pages/profile.js";
import SignUp from "./pages/signup.js";
import Addpost from "./pages/addpost.js";
import Updatepost from "./pages/updatepost.js";
import './App.css';

import store from './reactStore/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<POST />} />
          <Route path="/profile" element={<User />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addpost" element={<Addpost />} />
          <Route path="/updatepost" element={<Updatepost />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
