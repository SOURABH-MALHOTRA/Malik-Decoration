import { useState } from "react";
import { X } from "lucide-react";
import { categories } from "../Categories.js";

import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function UploadImageModal({ open, onClose }) {
  const [category, setCategory] = useState(categories[0]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", image);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Upload failed");
      }

      await addDoc(collection(db, "gallery"), {
        imageUrl: data.secure_url,
        publicId: data.public_id,
        category,
        createdAt: serverTimestamp(),
      });

      alert("Image uploaded successfully.");

      setImage(null);
      setPreview("");
      setCategory(categories[0]);

      onClose();
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-5">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-2xl font-semibold">Upload Image</h2>

          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          {/* Category */}

          <div>
            <label className="block mb-2 font-medium">Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Image */}

          <div>
            <label className="block mb-2 font-medium">Select Image</label>

            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {/* Preview */}

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="rounded-lg h-64 w-full object-cover"
            />
          )}
        </div>

        {/* Footer */}

        <div className="border-t p-5 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2 rounded-lg border">
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-black text-white px-6 py-2 rounded-lg disabled:opacity-60"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
