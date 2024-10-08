import MobileNav from "../Components/MobileNav";
import DesktopNav from "../Components/DesktopNav";
import HeroSection from "../Components/HeroSection";
import SideBar from "../Components/SideBar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [completedMessage, setCompletedMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setMessageSent(true);

    const serviceID = "service_cl2r24u";
    const templateID = "template_6da7rqi";
    const publicKey = "B5m78mM5hASikgXT_";

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    setTimeout(() => {
      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((resp) => {
          console.log("Email sent successfully!", resp);
          alert("Your message was sent succesfully!");
          setName("");
          setEmail("");
          setMessage("");
          setMessageSent(false);
        })
        .catch((error) => {
          console.log("error: ", error);
          alert("Something went wrong, please try again later!");
          setMessageSent(false);
        });
    }, 4000);

    /*
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((resp) => {
        console.log("Email sent successfully!", resp);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error: ", error);
      });*/
  };

  return (
    <div className="pageContainer w-full flex">
      <SideBar />
      <div className="mainContainer flex flex-col">
        <DesktopNav activePage="contact" />
        <div className="bentoBox contactMain flex flex-col">
          <section className="contactFormSection flex flex-col">
            <div className="pageTitleBox">
              <h2 className="pageTitle">Contact</h2>
            </div>
            {messageSent ? (
              <p className="sectionPara contactPara">
                Sending your message now!
              </p>
            ) : (
              <p className="sectionPara contactPara">
                Send me a message and let's get in touch!
              </p>
            )}
            {!messageSent && (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contactForm flex flex-col"
              >
                <ul className="noList formList flex">
                  <li className="formLi flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name..."
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </li>
                  <li className="formLi flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email..."
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </li>
                  <li className="formLi messageLi flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </li>
                </ul>
                <button type="submit" typeof="submit" className="formBtn">
                  Send Message
                </button>
              </form>
            )}
            {messageSent && (
              <div className="messageAnimation">
                <i class="bx bx-mail-send"></i>
              </div>
            )}
          </section>
        </div>
      </div>
      <MobileNav activePage="contact" />
    </div>
  );
}

export default ContactPage;
