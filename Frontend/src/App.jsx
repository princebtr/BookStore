import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/landingpage";
import Courses from "./pages/course";
import Header from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";

// Layout Component
function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/courses"
        element={
          <Layout>
            <Courses />
          </Layout>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
