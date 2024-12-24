"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@radix-ui/themes";
import AlertOverlay from "./Alert";
import { motion, useAnimation, useInView } from "framer-motion";
import axios from "axios";

export const JobApplicationForm = () => {
  const ref1 = useRef(null);
  const slide1 = useAnimation();
  const isInView1 = useInView(ref1, { once: true });

  useEffect(() => {
    if (isInView1) {
      slide1.start("visible");
    }
  }, [isInView1]);

  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [DOBError, setDOBError] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const allowedFileTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const maxFileSize = 1 * 1024 * 1024; // 1MB

  function isValidDate(dateString) {
    // Check for the pattern DD/MM/YYYY
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!regex.test(dateString)) return false;

    const [_, day, month, year] = dateString.match(regex);

    // Convert to integers
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10) - 1; // Months are 0-based in Date()
    const yearNum = parseInt(year, 10);

    const dateObj = new Date(yearNum, monthNum, dayNum);

    // Check if date object matches input
    return (
      dateObj.getFullYear() === yearNum &&
      dateObj.getMonth() === monthNum &&
      dateObj.getDate() === dayNum
    );
  }

  const handleDOBChange = (e) => {
    const value = e.target.value;
    setDOB(value);

    if (value && !isValidDate(value)) {
      setDOBError("Invalid date format. Use DD/MM/YYYY.");
    } else {
      setDOBError("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setAlertMessage(null);

    if (!name || !DOB || !email || !phone || !address) {
      setAlertMessage("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    if (!isValidDate(DOB)) {
      setAlertMessage(
        "Please enter a valid date of birth in DD/MM/YYYY format."
      );
      setShowAlert(true);
      return;
    }

    if (!resumeFile || !coverLetterFile) {
      setAlertMessage("Please upload both your resume and cover letter.");
      setShowAlert(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("DOB", DOB);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("resume", resumeFile);
      formData.append("coverLetter", coverLetterFile);

      const res = await axios.post("/api/jobApplication", formData);

      if (res.status === 200) {
        setAlertMessage("Thank you! Your submission has been received!");
        setShowAlert(true);
        // Reset form fields
        setName("");
        setDOB("");
        setEmail("");
        setPhone("");
        setAddress("");
        setResumeFile(null);
        setCoverLetterFile(null);
        document.getElementById("resume-file-name").textContent =
          "No file chosen";
        document.getElementById("cover-letter-file-name").textContent =
          "No file chosen";
        setDOBError("");
      } else {
        setAlertMessage(
          "Oops! Something went wrong while submitting the form."
        );
        setShowAlert(true);
      }
    } catch (err) {
      console.error("Err", err);
      setAlertMessage("An error occurred. Please try again later.");
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <Container>
      <div className="py-10 md:pl-0 pl-5">
        <motion.h1
          ref={ref1}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0 }}
          className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5"
          data-translate
        >
          application for job
        </motion.h1>
        <motion.h2
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={slide1}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="pl-10 pr-5 md:text-lg text-base font-medium tracking-widest text-gray-800 py-5"
        >
          <div className="md:pr-0 pr-5">
            {showAlert && (
              <AlertOverlay message={alertMessage} onClose={closeAlert} />
            )}
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <h2
                data-translate
                className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5"
              >
                Personal Information
              </h2>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />
              <input
                value={DOB}
                onChange={handleDOBChange}
                type="text"
                placeholder="Date of Birth (DD/MM/YYYY)"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />
              {DOBError && <p className="text-red-500 text-xs">{DOBError}</p>}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                type="text"
                placeholder="Phone"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                required
                className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
              />
              <h2
                data-translate
                className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5"
              >
                Attachments
              </h2>
              <p
                data-translate
                className="text-sm font-medium text-gray-600 bg-white flex flex-col gap-5"
              >
                Please upload your resume:
              </p>
              <div className="flex gap-5 items-center">
                <label
                  htmlFor="resume-upload"
                  className="bg-gray-600 text-white px-4 py-2 cursor-pointer text-xs rounded"
                  data-translate
                >
                  Browse
                </label>
                <span
                  data-translate
                  id="resume-file-name"
                  className="text-xs text-gray-700"
                >
                  No file chosen
                </span>
                <input
                  id="resume-upload"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      if (!allowedFileTypes.includes(file.type)) {
                        setAlertMessage(
                          "Invalid file type for resume. Only PDF and Word documents are allowed."
                        );
                        setShowAlert(true);
                        setResumeFile(null);
                        e.target.value = "";
                        return;
                      }
                      if (file.size > maxFileSize) {
                        setAlertMessage(
                          "Resume file size too large. Maximum allowed size is 1MB."
                        );
                        setShowAlert(true);
                        setResumeFile(null);
                        e.target.value = "";
                        return;
                      }
                      setResumeFile(file);
                      const fileName = file.name || "No file chosen";
                      document.getElementById("resume-file-name").textContent =
                        fileName;
                    } else {
                      setResumeFile(null);
                      document.getElementById("resume-file-name").textContent =
                        "No file chosen";
                    }
                  }}
                />
              </div>
              <p
                data-translate
                className="text-sm font-medium text-gray-600 bg-white flex flex-col gap-5"
              >
                Please upload your cover letter:
              </p>
              <div className="flex gap-5 items-center">
                <label
                  htmlFor="cover-letter-upload"
                  className="bg-gray-600 text-white px-4 py-2 cursor-pointer text-xs rounded"
                  data-translate
                >
                  Browse
                </label>
                <span
                  id="cover-letter-file-name"
                  className="text-xs text-gray-700"
                  data-translate
                >
                  No file chosen
                </span>
                <input
                  id="cover-letter-upload"
                  name="coverLetter"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      if (!allowedFileTypes.includes(file.type)) {
                        setAlertMessage(
                          "Invalid file type for cover letter. Only PDF and Word documents are allowed."
                        );
                        setShowAlert(true);
                        setCoverLetterFile(null);
                        e.target.value = "";
                        return;
                      }
                      if (file.size > maxFileSize) {
                        setAlertMessage(
                          "Cover letter file size too large. Maximum allowed size is 1MB."
                        );
                        setShowAlert(true);
                        setCoverLetterFile(null);
                        e.target.value = "";
                        return;
                      }
                      setCoverLetterFile(file);
                      const fileName = file.name || "No file chosen";
                      document.getElementById(
                        "cover-letter-file-name"
                      ).textContent = fileName;
                    } else {
                      setCoverLetterFile(null);
                      document.getElementById(
                        "cover-letter-file-name"
                      ).textContent = "No file chosen";
                    }
                  }}
                />
              </div>
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Submit"
                  className="btn md:btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold rounded-none bg-white border-none"
                />
              </div>
            </form>
          </div>
        </motion.h2>
      </div>
    </Container>
  );
};

export default JobApplicationForm;
