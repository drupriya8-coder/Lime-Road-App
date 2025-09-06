import React, { useState } from "react";

export default function ProfileUpdate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Handle text input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    // preview image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated ✅");
    console.log(formData);
    console.log("Uploaded Image:", profileImage);

    alert("Profile updated successfully!");
    // Yaha API call kr skte ho backend pe
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Update Profile
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="profileImage"
              className="cursor-pointer flex flex-col items-center"
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-28 h-28 rounded-full object-cover border-2 border-indigo-500"
                />
              ) : (
                <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500">
                  Upload
                </div>
              )}
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Phone */}
          {/* <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="+91 9876543210"
              required
            />
          </div> */}


          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                // sirf numbers hi allow kare
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setFormData({ ...formData, phone: value });
                }
              }}
              maxLength="10"
              minLength="10"
              pattern="[0-9]{10}"
              className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="9876543210"
              required
            />
          </div>


          {/* Bio */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Bio
            </label>
            <textarea
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="Write something about yourself..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
