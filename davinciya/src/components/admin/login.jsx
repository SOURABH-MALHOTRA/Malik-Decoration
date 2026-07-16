import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/admin/dashboard");
    } catch (err) {
      // Firebase v9+ mein mostly 'auth/invalid-credential' hi aata hai
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // 'p-4' mobile ke liye aur 'min-h-screen' center karne ke liye
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
          Sign in to manage gallery
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              // 'text-base' aur 'h-12' mobile par typing experience achha karte hain
              className="w-full border rounded-lg px-4 py-3 text-base outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-base outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition active:scale-[0.98]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}