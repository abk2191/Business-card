import { useState } from "react";
import myimage from "./assets/me.jpg";

function App() {
  const handleFollow = () => {
    window.open(
      "https://instagram.com/weirdmonk2191",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSendMessage = () => {
    // Replace with your actual phone number (with country code, no spaces/symbols)
    const phoneNumber = "9332522166"; // Example: 919876543210 for India
    const message = "Hello! I want to get in touch with you.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="profilePicture">
            <img
              src={myimage}
              alt="toon image"
              style={{ height: "95px", width: "95px" }}
              className="profileimage"
            />
          </div>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ccc",
              margin: "20px 0",
            }}
          />
          <p>
            <i
              class="fa-solid fa-circle-user"
              style={{ fontSize: "18px", padding: "6px", color: "blue" }}
            ></i>
            Name: Abhishek Kabi
          </p>
          <p>
            <i
              class="fa-solid fa-cake-candles"
              style={{ fontSize: "18px", padding: "6px", color: "magenta" }}
            ></i>
            DOB: 21/12/1991
          </p>

          <p>
            {" "}
            <i
              class="fa-solid fa-house"
              style={{ fontSize: "18px", padding: "6px", color: "gold" }}
            ></i>
            Home: Coochbehar, West Bengal
          </p>
          <p>
            <i
              class="fa-solid fa-location-dot"
              style={{ fontSize: "18px", padding: "6px", color: "red" }}
            ></i>
            Lives in: Bangalore, Karnataka
          </p>
          <p>
            <i
              class="fa-solid fa-square-phone"
              style={{ fontSize: "18px", padding: "6px", color: "green" }}
            ></i>
            Mobile: +919223522166
          </p>
          <p>
            <i
              class="fa-solid fa-envelope"
              style={{ fontSize: "18px", padding: "6px", color: "lightgreen" }}
            ></i>
            Email: abhishek.kabi.21@gmail.com
          </p>
          <p>
            <i
              class="fa-solid fa-briefcase"
              style={{ fontSize: "18px", padding: "6px", color: "brown" }}
            ></i>
            Services: Full-Stack developer | UI/UX Designer | Websites/Apps |
            Tech Support
          </p>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ccc",
              margin: "20px 0",
            }}
          />
          <button className="addfrndbutton" onClick={handleFollow}>
            <i class="fa-brands fa-instagram" style={{ padding: "8px" }}></i>
            Follow
          </button>
          <button className="sendmsgbtn" onClick={handleSendMessage}>
            <i class="fa-brands fa-whatsapp" style={{ padding: "8px" }}></i>Send
            Message
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
