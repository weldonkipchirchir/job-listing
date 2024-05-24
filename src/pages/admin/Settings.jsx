import { motion } from "framer-motion";
import { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    companyName: "Acme Inc.",
    address: "",
    name: "",
    phone: "",
    email: "",
    currency: "USD",
    addressTextarea: "",
    newPassword: "",
    confirmPassword: "",
    analyticsID: "UA-123456789-1",
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

    // Here, you can send the passwordData to your server or perform any other necessary actions
    console.log(passwordData);

    console.log(formData);

    // Reset password fields and error message
    setFormData(() => ({
        companyName: "Acme Inc.",
        address: "",
        name: "",
        phone: "",
        email: "",
        currency: "USD",
        addressTextarea: "",
        newPassword: "",
        confirmPassword: "",
        analyticsID: "UA-123456789-1",
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
          Manage your company settings
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 dark:text-gray-50">Company Details</h3>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full max-w-[600px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
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
                  Currency
                </label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                >
                  <option value="USD">USD</option>
                  <option value="USD">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
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
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Security</h3>
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

          <div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Analytics</h3>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 dark:text-gray-100">
                Google Analytics Tracking ID
              </label>
              <input
                type="text"
                name="analyticsID"
                value={formData.analyticsID}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>
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

export default Settings;