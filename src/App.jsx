import { useState } from "react";
import Secondcard from "./secondcard";
import Maincard from "./maincard";

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
        <Maincard
          handleFollow={handleFollow}
          handleSendMessage={handleSendMessage}
        />

        <Maincard
          handleFollow={handleFollow}
          handleSendMessage={handleSendMessage}
        />

        <Maincard
          handleFollow={handleFollow}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </>
  );
}

export default App;
