"use client";
import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import AlertOverlay from "./Alert";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setAlertMessage(null);

    if (!name || !email || !message) {
      setAlertMessage("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setAlertMessage("Thank you! Your submission has been received!");
        setShowAlert(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
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
      <div className="py-10">
        <h1 className="border-l-[1px] border-gray-400 pl-10 uppercase text-3xl font-medium tracking-widest text-gray-800 py-5 mb-5">
          contact us
        </h1>
        <div className="pl-10">
          {showAlert && (
            <AlertOverlay message={alertMessage} onClose={closeAlert} />
          )}

          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name*"
              required
              className="p-2 mr-3 border-b border-gray-400 focus:outline-none text-xs font-semibold"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email*"
              required
              className="p-2 mr-3 border-b border-gray-400 focus:outline-none text-xs font-semibold"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              type="text"
              placeholder="Phone"
              className="p-2 mr-3 border-b border-gray-400 focus:outline-none text-xs font-semibold"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Message"
              required
              className="p-2 mr-3 border-b border-gray-400 focus:outline-none text-xs font-semibold h-32 resize-none w-full"
            ></textarea>

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
      </div>
    </Container>
  );
};

export default ContactForm;
