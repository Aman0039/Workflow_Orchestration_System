import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import useAuth from "./hooks/useAuth"
import NotFound from "./pages/NotFound"

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" replace />
}

const App = () => {

  const [loggedIn, setLoggedIn] = useState(() => {
    return !!localStorage.getItem("token"); // 🔥 key fix
  });

  //checks for authentication every time.
  useAuth(setLoggedIn);


  return (
    <Routes>
      <Route
        path="/login"
        element={
          loggedIn
            ? <Navigate to="/" replace />
            : <Login setLoggedIn={setLoggedIn} />
        }
      />

      <Route
        path="/signup"
        element={<Signup setLoggedIn={setLoggedIn} />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute isLoggedIn={loggedIn}>
            <Dashboard setLoggedIn={setLoggedIn} />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App