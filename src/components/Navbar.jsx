import { useState } from "react"
import Form from "./Form"
import Saved from "./Saved.jsx"
import { motion } from "framer-motion"
import Email from "./Email.jsx"

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("template")
  const [savedNotes, setSavedNotes] = useState([])

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("template")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "template" ? "bg-blue-500 text-white" : "text-gray-300 hover:text-gray-900"
              }`}
            >
              Notes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("saved-notes")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "saved-notes" ? "bg-blue-500 text-white" : "text-gray-300 hover:text-gray-900"
              }`}
            >
              Saved Notes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("email")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "email" ? "bg-blue-500 text-white" : "text-gray-300 hover:text-gray-900"
              }`}
            >
              Email Template
            </motion.button>
          </div>
        </div>
      </nav>

      <div className="flex-1 p-6 bg-gray-50">
        {activeTab === "template" && <Form setSavedNotes={setSavedNotes} />}
        {activeTab === "saved-notes" && <Saved savedNotes={savedNotes} setSavedNotes={setSavedNotes} />}
        {activeTab === "email" && <Email />}
      </div>
    </div>
  )
}

