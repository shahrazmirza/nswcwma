"use client";
import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import AlertOverlay from "./Alert";

export const ApplicationForm = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [marketing, setMarketing] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [emergencyContactRelationship, setEmergencyContactRelationship] =
    useState("");
  const [consent, setConsent] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setAlertMessage(null);

    if (
      !selectedGroup ||
      !name ||
      !email ||
      !phone ||
      !address ||
      !message ||
      !marketing ||
      !specialNeeds ||
      !emergencyContactName ||
      !emergencyContactPhone ||
      !emergencyContactRelationship
    ) {
      setAlertMessage("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    try {
      const res = await fetch("/api/application", {
        method: "POST",
        body: JSON.stringify({
          selectedGroup,
          name,
          email,
          phone,
          address,
          message,
          marketing,
          specialNeeds,
          emergencyContactName,
          emergencyContactPhone,
          emergencyContactRelationship,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setAlertMessage("Thank you! Your submission has been received!");
        setShowAlert(true);
        setSelectedGroup("");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
        setMarketing("");
        setSpecialNeeds("");
        setEmergencyContactName("");
        setEmergencyContactPhone("");
        setEmergencyContactRelationship("");
        setConsent("");
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
        <h1 className="border-l-[1px] border-gray-400 pl-10 uppercase md:text-3xl text-2xl md:font-medium font-semibold tracking-widest text-gray-800 py-5 mb-5">
          application for assistance
        </h1>
        <h2 className="pl-10 pr-5 capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5">
          Eligibility
        </h2>
        <div className="pl-10 md:pr-0 pr-5">
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full p-2 my-4 text-sm font-medium text-gray-500 border border-gray-500 hover:border-sky-700 rounded-md bg-white"
          >
            <option value="" disabled>
              Please Select Your Group
            </option>
            <option className="text-black" value="Migrant">
              Sick
            </option>
            <option className="text-black" value="Migrant">
              Migrant
            </option>
            <option className="text-black" value="Migrant">
              Homeless
            </option>
            <option className="text-black" value="Individual with Disabilities">
              Individual with Disabilities
            </option>
            <option
              className="text-black"
              value="Culturally and Linguistically Diverse (CALD) Background"
            >
              Culturally and Linguistically Diverse (CALD) Background
            </option>
          </select>
          {selectedGroup && (
            <div>
              {showAlert && (
                <AlertOverlay message={alertMessage} onClose={closeAlert} />
              )}

              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <h2 className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5">
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

                <h2 className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5">
                  Circumstances
                </h2>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder="Please briefly describe your current situation and why you are seeking assistance"
                  required
                  className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold h-32 resize-none"
                ></textarea>

                <h2 className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5">
                  Additional Information
                </h2>

                <textarea
                  value={marketing}
                  onChange={(e) => setMarketing(e.target.value)}
                  type="text"
                  placeholder="How did you hear about NSWCWMA services?"
                  required
                  className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold h-10 resize-none"
                ></textarea>

                <textarea
                  value={specialNeeds}
                  onChange={(e) => setSpecialNeeds(e.target.value)}
                  type="text"
                  placeholder="Do you have any specific needs or requests?"
                  required
                  className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold h-10 resize-none"
                ></textarea>

                <h2 className="capitalize md:text-lg text-base font-medium tracking-widest text-gray-800 py-5">
                  Emergency Contact
                </h2>

                <input
                  value={emergencyContactName}
                  onChange={(e) => setEmergencyContactName(e.target.value)}
                  type="text"
                  placeholder="Emergency Contact Name"
                  required
                  className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
                />

                <input
                  value={emergencyContactPhone}
                  onChange={(e) =>
                    setEmergencyContactPhone(e.target.value.replace(/\D/g, ""))
                  }
                  type="text"
                  placeholder="Emergency Contact Phone"
                  required
                  className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold"
                />

                <textarea
                  value={emergencyContactRelationship}
                  onChange={(e) =>
                    setEmergencyContactRelationship(e.target.value)
                  }
                  type="text"
                  placeholder="Emergency Contact Relationship"
                  required
                  className="p-2 border-b border-gray-400 focus:outline-none text-xs font-semibold h-10 resize-none"
                ></textarea>

                <label className="flex items-start py-5 text-sm font-medium text-gray-800 bg-white">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                  <p className="pl-2 -mt-1">
                    I hereby declare that the information provided is true and
                    correct to the best of my knowledge. I understand that
                    providing false information may result in the termination of
                    any assistance provided.
                  </p>
                </label>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="uppercase outline-g outline outline-1 py-2 px-10 hover:text-red-500 hover:outline-red-500 flex text-gray-400 text-sm font-semibold gap-1"
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ApplicationForm;