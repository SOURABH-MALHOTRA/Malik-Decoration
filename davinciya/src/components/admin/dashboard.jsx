import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UploadImageModal from "./UploadImageModal";

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

export default function Dashboard() {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "gallery"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setImages(data);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "gallery", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-16">

  {/* Header */}
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

      <div>
        <h1 className="text-lg sm:text-xl font-semibold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Manage Gallery Images
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg transition"
      >
        Logout
      </button>

    </div>
  </header>

  {/* Main */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

    {/* Upload Card */}
    <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-8">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        <div>
          <h2 className="text-lg sm:text-xl font-semibold">
            Upload Image
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Upload new gallery images.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="w-full sm:w-auto bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Upload Image
        </button>

      </div>

      <UploadImageModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>

    {/* Gallery */}

    <div className="bg-white rounded-xl shadow p-4 sm:p-6">

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">

        <h2 className="text-lg sm:text-xl font-semibold">
          Gallery Images
        </h2>

        <span className="text-sm text-gray-500">
          Total Images : {images.length}
        </span>

      </div>

      {images.length === 0 ? (

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
          <p className="text-gray-500">
            No images found.
          </p>
        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {images.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={img.imageUrl}
                alt={img.category}
                className="w-full h-52 sm:h-56 object-cover"
              />

              <div className="p-4">
                <p className="font-semibold text-gray-800 text-center sm:text-left">
                  {img.category}
                </p>

                <button
                  onClick={() => handleDelete(img.id)}
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg transition"
                >
                  Delete Image
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
</div>
  );
}
        