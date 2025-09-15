import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        alert("Please login first");
        navigate("/login");
      }, 3000); // ⏳ show page for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, navigate]);

  return children;
}
