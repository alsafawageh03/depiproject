import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import AssetForm from "./Addnew";
import Search from "./Search.js";
import Navbar from "./Navbar"; // استيراد الـ Navbar الجديد
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Navbar /> {/* إضافة الـ Navbar هنا */}
          <div className="content">
            <Routes>
              <Route path="/logo" element={<h1>Logo</h1>} />
              <Route path="/all" element={<h1>All</h1>} />
              <Route path="/search" element={<Search />} />
              <Route path="/add-new" element={<AssetForm />} />
              {/* <Route path="/manage" element={<AssetForm />} />  */}
              <Route path="/manage" element={<h1>Manage</h1>} />
              <Route path="/future" element={<h1>Future</h1>} />
              <Route path="/setting" element={<h1>Setting</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
