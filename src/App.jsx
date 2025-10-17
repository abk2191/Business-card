import { useState } from "react";
import Secondcard from "./secondcard";
import Thirdcard from "./thirdcard";
import Maincard from "./maincard";
import { motion } from "framer-motion";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Wordle Game",
      description:
        "I built a Wordle clone using vanilla JavaScript with a 6x5 grid structure and keyboard input. The game logic validates guesses against a word dictionary and provides color-coded feedback (green/yellow/gray). I implemented keyboard event handling for user input and local storage to track game statistics. The entire game features real-time validation, win/lose conditions, and a responsive UI without any external libraries.",
      codeUrl: "https://github.com/abk2191/wordle",
      liveUrl: "https://abk2191.github.io/wordle/",
    },
    {
      id: 2,
      title: "Slate - A note taking app.",
      description:
        "I developed a clean and intuitive note-taking application using vanilla JavaScript that allows users to create, edit, and delete notes in real-time. The app features local storage integration to automatically save all notes persistently in the browser. With a responsive design and smooth UI interactions, it provides instant search functionality to quickly filter through saved notes. The entire application was built from scratch without any external libraries, demonstrating strong fundamentals in DOM manipulation and browser APIs.",
      codeUrl: "https://github.com/abk2191/mynoteapp",
      liveUrl: "https://abk2191.github.io/mynoteapp/",
    },
    {
      id: 3,
      title: "Todo App using React.",
      description:
        "I built a dynamic todo application using React with state management that allows users to efficiently add, edit, and organize their daily tasks. The app features a customizable light and dark theme that automatically adapts to system preferences while providing manual toggle control. Tasks can be marked complete, filtered by status, and persistently stored in the browser's local storage. The responsive design ensures seamless task management across all devices with smooth theme transitions.",
      codeUrl: "https://github.com/abk2191/todoapp",
      liveUrl: "https://abk2191.github.io/todoapp/",
    },
    {
      id: 4,
      title: "Quote Generator (with images) using React. Zenquote API",
      description:
        "I developed an inspirational quote generator using React that fetches daily wisdom from the ZenQuotes API with integrated background images for enhanced visual appeal. To overcome CORS restrictions, I engineered a custom proxy server that securely relays API requests while maintaining optimal performance. The application features a clean, responsive interface with smooth animations and one-click sharing capabilities. This project demonstrates advanced API integration techniques and problem-solving skills in handling cross-origin resource sharing challenges.",
      codeUrl: "https://github.com/abk2191/quotes-with-images",
      liveUrl: "https://abk2191.github.io/quotes-with-images/",
    },
    {
      id: 5,
      title: "Weather Report App (API)",
      description:
        "I built a comprehensive weather application using React that fetches real-time meteorological data from the OpenWeatherMap API to display current conditions and 5-day forecasts. The app features location-based weather detection, dynamic background themes that change based on weather conditions, and detailed metrics like humidity, wind speed, and UV index. Users can search for weather information in any city worldwide with autocomplete suggestions and persistent recent searches. This project demonstrates advanced API integration, responsive design principles, and dynamic UI updates based on external data sources.",
      codeUrl: "https://github.com/abk2191/Weather-Report",
      liveUrl: "https://abk2191.github.io/Weather-Report/",
    },
  ];

  const handleShowCode = (codeUrl) => {
    window.open(codeUrl, "_blank", "noopener,noreferrer");
  };

  const handleShowProject = (liveUrl) => {
    window.open(liveUrl, "_blank", "noopener,noreferrer");
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
            handleShowCode={handleShowCode}
            handleShowProject={handleShowProject}
            projects={projects}
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
