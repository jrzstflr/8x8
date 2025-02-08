"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Form = (props) => {
  const [formData, setFormData] = useState({
    mcn_case_id: "",
    vcc_transaction_id: "",
    contact_name: "",
    email: "",
    call_back_number: "",
    security_verification_needed: "",
    security_verified: "",
    otp: "",
    pbx: "",
    symptom: "",
    issue: "",
    resolution: "",
    nud_calendar_invite: "",
    troubleshooting_steps: "",
    callback_update: "",
    direction: "inbound", // Default direction
  })

  const [showOtpField, setShowOtpField] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    if (name === "security_verified") {
      setShowOtpField(value === "Yes_otp")
    }
  }

  const copyAndSaveFormData = () => {
    let formattedData = ""

    if (formData.direction === "inbound") {
      formattedData = `
MCN/Case ID: ${formData.mcn_case_id}
VCC Transaction ID: ${formData.vcc_transaction_id}
Contact Name: ${formData.contact_name}
Email Address: ${formData.email}
Call Back Number: ${formData.call_back_number}
Security Passphrase Verification Needed: ${formData.security_verification_needed}
Security Passphrase Verified: ${formData.security_verified === "Yes_otp" ? `Yes OTP (${formData.otp})` : formData.security_verified}
PBX: ${formData.pbx}
Symptom: ${formData.symptom}
Issue: ${formData.issue}
Resolution: ${formData.resolution}
NUD: Calendar Invite: ${formData.nud_calendar_invite}
Troubleshooting Steps:
${formData.troubleshooting_steps}
    `
    } else if (formData.direction === "outbound") {
      formattedData = `
MCN/Case ID: ${formData.mcn_case_id}
VCC Transaction ID: ${formData.vcc_transaction_id}
Contact Name: ${formData.contact_name}
Email Address: ${formData.email}
Call Back Number: ${formData.call_back_number}
CALLBACK UPDATE:
${formData.callback_update}
    `
    }

    // Save the note
    const newNote = {
      id: Date.now(),
      mcn_case_id: formData.mcn_case_id,
      content: formattedData,
      direction: formData.direction,
      timestamp: new Date().toISOString()
    }

    props.setSavedNotes(prev => [...prev, newNote])

    navigator.clipboard
      .writeText(formattedData)
      .then(() => alert("Form data copied and saved successfully!"))
      .catch((err) => alert("Failed to copy form data."))
  }

  const resetForm = () => {
    setFormData({
      mcn_case_id: "",
      vcc_transaction_id: "",
      direction: "inbound",
      contact_name: "",
      email: "",
      call_back_number: "",
      security_verification_needed: "",
      security_verified: "",
      otp: "",
      pbx: "",
      symptom: "",
      issue: "",
      resolution: "",
      nud_calendar_invite: "",
      troubleshooting_steps: "",
      callback_update: "",
    })

    setShowOtpField(false)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  }

  return (
    <div className="bg-gray-800 text-white py-8">
    <motion.form
      id="mainForm"
      className="max-w-2xl mx-auto p-6 bg-gray-800 text-black shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-section">
          <motion.input
            type="text"
            name="mcn_case_id"
            value={formData.mcn_case_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="MCN/Case ID"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          />
        </div>

        <div className="form-section">
          <motion.input
            type="text"
            name="vcc_transaction_id"
            value={formData.vcc_transaction_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="VCC Transaction ID"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          />
        </div>
      </div>

      <div className="my-4">
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="direction"
            value="inbound"
            checked={formData.direction === "inbound"}
            onChange={handleChange}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-white">📥 Inbound</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="direction"
            value="outbound"
            checked={formData.direction === "outbound"}
            onChange={handleChange}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-white">📤 Outbound</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-section">
          <motion.input
            type="text"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contact Name"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          />
        </div>

        <div className="form-section">
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email Address"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          />
        </div>

        <div className="form-section">
          <motion.input
            type="tel"
            name="call_back_number"
            value={formData.call_back_number}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Call Back Number"
            variants={inputVariants}
            whileFocus="focus"
            whileBlur="blur"
          />
        </div>
      </div>

      <AnimatePresence>
        {formData.direction === "inbound" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="form-section mt-4">
              <label className="block text-sm font-medium text-white mb-2">
                Security Passphrase Verification Needed:
              </label>
              <div className="flex space-x-4">
                {["Yes", "No", "NA"].map((value) => (
                  <label key={value} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="security_verification_needed"
                      value={value}
                      checked={formData.security_verification_needed === value}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-section mt-4">
              <label className="block text-sm font-medium text-white mb-2">Security Passphrase Verified:</label>
              <div className="flex space-x-4">
                {["Yes", "No", "NA", "Yes_otp"].map((value) => (
                  <label key={value} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="security_verified"
                      value={value}
                      checked={formData.security_verified === value}
                      onChange={handleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{value === "Yes_otp" ? "Yes OTP" : value}</span>
                  </label>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {showOtpField && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="form-section mt-4"
                >
                  <motion.input
                    type="text"
                    name="otp"
                    maxLength={6}
                    value={formData.otp}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter 6-digit OTP"
                    variants={inputVariants}
                    whileFocus="focus"
                    whileBlur="blur"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {["pbx", "symptom", "issue", "resolution", "nud_calendar_invite"].map((field) => (
                <div key={field} className="form-section">
                  <motion.input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, " ")}
                    variants={inputVariants}
                    whileFocus="focus"
                    whileBlur="blur"
                  />
                </div>
              ))}
            </div>

            <div className="form-section mt-4">
              <motion.textarea
                name="troubleshooting_steps"
                value={formData.troubleshooting_steps}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Troubleshooting Steps"
                rows={4}
                variants={inputVariants}
                whileFocus="focus"
                whileBlur="blur"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {formData.direction === "outbound" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="form-section mt-4"
          >
            <motion.textarea
              name="callback_update"
              value={formData.callback_update}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="CALLBACK UPDATE"
              rows={4}
              variants={inputVariants}
              whileFocus="focus"
              whileBlur="blur"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center space-x-4 mt-6">
        <motion.button
          type="button"
          onClick={copyAndSaveFormData}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Copy
        </motion.button>
        <motion.button
          type="button"
          onClick={resetForm}
          className="px-4 py-2 bg-gray-400 text-white rounded-md"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Reset
        </motion.button>
      </div>
    </motion.form>
    </div>
  )
}

export default Form
