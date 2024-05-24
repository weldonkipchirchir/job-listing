import { motion } from "framer-motion";
import { useState } from "react";

const UserSettings = () => {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    phone: "",
    email: "",
    addressTextarea: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compare passwords
    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Submit password only
    const passwordData = {
      newPassword: formData.newPassword,
    };

    console.log(passwordData);

    console.log(formData);

    setFormData(() => ({
      address: "",
      name: "",
      phone: "",
      email: "",
      addressTextarea: "",
      newPassword: "",
      confirmPassword: "",
    }));
    setPasswordError("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 dark:shadow-slate-400">
        <h2 className="text-4xl font-bold mb-3 dark:text-white">Settings</h2>
        <p className="text-lg mb-3 text-gray-500 dark:text-gray-100">
          Manage your settings
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              Your Details
            </h3>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  Address
                </label>
                <textarea
                  type="address"
                  name="addressTextarea"
                  value={formData.addressTextarea}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              Security
            </h3>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
            {passwordError && (
              <p className="text-red-500 mt-2">{passwordError}</p>
            )}
          </div>

          <div className="mt-8 text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default UserSettings;
