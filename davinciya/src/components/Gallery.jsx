import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

const categories = [
  "All",
  "Living Room",
  "Bedroom",
  "Modular Kitchens",
  "Dining Areas",
  "Entry & Foyer",
  "Balconies",
  "Bathrooms",
  "Apartment",
  "Corporate",
  "Healthcare",
  "Restaurant & Cafe",
  "Retail",
  "Villa",
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setImages(data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setImages([]);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-semibold text-[#4a3728] mb-8">
          See our latest Gallery
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                active === cat
                  ? "bg-[#4a3728] text-white border-[#4a3728]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#4a3728] hover:text-[#4a3728]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Loading Gallery...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectedImage(img.imageUrl)}
                  className="rounded-xl overflow-hidden aspect-[4/3] gallery-img cursor-pointer"
                >
                  <img
                    src={img.imageUrl}
                    alt={img.category}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400 text-sm">
                No images found.
              </div>
            )}
          </>
        )}
      </div>

      {/* Full Screen Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-6 text-white text-5xl hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt="Gallery Preview"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
