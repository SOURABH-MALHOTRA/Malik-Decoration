import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Villa from "./components/Offerings/villa";
import Corporate from "./components/Offerings/corporate";
import Healthcare from "./components/Offerings/healthcare";
import Resto from "./components/Offerings/resto";
import Retail from "./components/Offerings/retail";
import GalleryPage from "./components/GalleryPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Apartment from "./components/Offerings/apartment";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/admin/login";
import Dashboard from "./components/admin/dashboard";
import ScrollToTop from "./components/ScrollToTop";
import { LoaderCircle } from "lucide-react";
import WhatsAppButton from "./components/WhatsApp";
function App() {
  return (
    <Suspense
  fallback={
    <div className="min-h-screen flex items-center justify-center">
      <LoaderCircle className="w-12 h-12 text-brown-600 animate-spin" />
    </div>
  }
>
    <BrowserRouter>
    <WhatsAppButton/>
    <ScrollToTop/>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offerings/villa" element={<Villa />} />
            <Route path="/offerings/corporate" element={<Corporate />} />
            <Route path="/offerings/healthcare" element={<Healthcare />} />
            <Route path="/offerings/resto" element={<Resto />} />
            <Route path="/offerings/retail" element={<Retail />} />
            <Route path="/offerings/apartment" element={<Apartment />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
