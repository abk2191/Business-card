import { useState } from "react";
import Secondcard from "./secondcard";
import Thirdcard from "./thirdcard";
import Maincard from "./maincard";
import { motion } from "framer-motion";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShowProjectWordle = () => {
    window.open(
      "https://abk2191.github.io/wordle/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShowCodeWordle = () => {
    window.open(
      "https://github.com/abk2191/wordle",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Kz1WPUbnMFzvP_PGeaTzU92cHo0FVPP3/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFollow = () => {
    window.open(
      "https://instagram.com/weirdmonk2191",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSendMessage = () => {
    const phoneNumber = "9332522166";
    const message = "Hello! I want to get in touch with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 350 + 20;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  // Simple fade and slide animation
  const cardAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { type: "spring", stiffness: 100 },
  };

  return (
    <>
      <div className="wrapper" onScroll={handleScroll}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Maincard
            handleFollow={handleFollow}
            handleSendMessage={handleSendMessage}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Secondcard
            handleFollow={handleFollow}
            handleSendMessage={handleSendMessage}
            handleDownloadResume={handleDownloadResume}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Thirdcard
            handleFollow={handleFollow}
            handleSendMessage={handleSendMessage}
            handleShowCodeWordle={handleShowCodeWordle}
            handleShowProjectWordle={handleShowProjectWordle}
          />
        </motion.div>
      </div>
      <div className="threedots">
        <p style={{ opacity: currentIndex === 0 ? 1 : 0.3 }}>
          <i className="fa-solid fa-circle"></i>
        </p>
        <p style={{ opacity: currentIndex === 1 ? 1 : 0.3 }}>
          <i className="fa-solid fa-circle"></i>
        </p>
        <p style={{ opacity: currentIndex === 2 ? 1 : 0.3 }}>
          <i className="fa-solid fa-circle"></i>
        </p>
      </div>
    </>
  );
}

export default App;
