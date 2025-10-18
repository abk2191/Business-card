import { useState, useEffect } from "react";
import Secondcard from "./secondcard";
import Thirdcard from "./thirdcard";
import Maincard from "./maincard";
import { motion } from "framer-motion";
import Loadingscreen from "./loadingscreen";
import Instructionscreen from "./instructionscreen";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [instructionOpen, setInstructionOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInstructionOpen(true); // Show instructions after loading
    }, 6000);
  }, []);

  const handleInstructionClose = () => {
    setInstructionOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Wordle Game",
      description: (
        <>
          I built a Wordle clone using{" "}
          <strong style={{ color: "white" }}>vanilla JavaScript</strong> with a
          6x5 grid structure and keyboard input. The game logic validates
          guesses against a word dictionary and provides color-coded feedback
          (green/yellow/gray). I implemented keyboard event handling for user
          input and <strong style={{ color: "white" }}>local storage</strong> to
          track game statistics. The entire game features real-time validation,
          win/lose conditions, and a{" "}
          <strong style={{ color: "white" }}>responsive UI</strong> without any
          external libraries.
        </>
      ),
      codeUrl: "https://github.com/abk2191/wordle",
      liveUrl: "https://abk2191.github.io/wordle/",
    },
    {
      id: 2,
      title: "Slate - A note taking app.",
      description: (
        <>
          "I developed a clean and intuitive{" "}
          <strong style={{ color: "white" }}>note-taking application</strong>{" "}
          using <strong style={{ color: "white" }}>vanilla JavaScript</strong>{" "}
          that allows users to{" "}
          <strong style={{ color: "white" }}>
            create, edit, and delete notes
          </strong>{" "}
          in real-time. The app features{" "}
          <strong style={{ color: "white" }}>local storage integration</strong>{" "}
          to automatically save all notes persistently in the browser. With{" "}
          <strong style={{ color: "white" }}>responsive design</strong> and
          smooth UI interactions. The entire application was{" "}
          <strong style={{ color: "white" }}>built from scratch</strong> without
          any external libraries, demonstrating{" "}
          <strong style={{ color: "white" }}>
            strong fundamentals in DOM manipulation
          </strong>{" "}
          and browser APIs.",
        </>
      ),
      codeUrl: "https://github.com/abk2191/mynoteapp",
      liveUrl: "https://abk2191.github.io/mynoteapp/",
    },
    {
      id: 3,
      title: "Todo App using React.",
      description: (
        <>
          "I built a dynamic todo application using{" "}
          <strong style={{ color: "white" }}>
            React with state management
          </strong>{" "}
          that allows users to efficiently{" "}
          <strong style={{ color: "white" }}>
            add, edit, and organize their daily tasks.
          </strong>{" "}
          The app features a customizable{" "}
          <strong style={{ color: "white" }}>light and dark theme</strong> that
          automatically adapts to system preferences while providing manual
          toggle control. Tasks can be marked complete, filtered by status, and
          persistently{" "}
          <strong style={{ color: "white" }}>
            stored in the browser's local storage.
          </strong>{" "}
          <strong style={{ color: "white" }}>The responsive design</strong>{" "}
          ensures seamless task management across all devices with smooth theme
          transitions."
        </>
      ),
      codeUrl: "https://github.com/abk2191/todoapp",
      liveUrl: "https://abk2191.github.io/todoapp/",
    },
    {
      id: 4,
      title: "Quote Generator (with images) using React. Zenquote API",
      description: (
        <>
          "I developed an inspirational{" "}
          <strong style={{ color: "white" }}>
            quote generator using React
          </strong>{" "}
          that fetches daily wisdom from the{" "}
          <strong style={{ color: "white" }}>ZenQuotes API</strong> with
          integrated background images for enhanced visual appeal. To overcome
          CORS restrictions, I{" "}
          <strong style={{ color: "white" }}>
            engineered a custom proxy server
          </strong>{" "}
          that securely relays API requests while maintaining optimal
          performance. The application features a clean,{" "}
          <strong style={{ color: "white" }}>
            responsive interface with smooth animations
          </strong>{" "}
          and{" "}
          <strong style={{ color: "white" }}>
            one-click sharing capabilities.
          </strong>{" "}
          This project demonstrates{" "}
          <strong style={{ color: "white" }}>
            advanced API integration techniques
          </strong>{" "}
          and problem-solving skills in handling cross-origin resource sharing
          challenges."
        </>
      ),

      codeUrl: "https://github.com/abk2191/quotes-with-images",
      liveUrl: "https://abk2191.github.io/quotes-with-images/",
    },
    {
      id: 5,
      title: "Weather Report App (API)",
      description: (
        <>
          "I built a comprehensive{" "}
          <strong style={{ color: "white" }}>
            weather application using React
          </strong>{" "}
          that fetches real-time meteorological data from the{" "}
          <strong style={{ color: "white" }}>
            OpenWeatherMap API to display current conditions and 5-day
            forecasts.
          </strong>{" "}
          The app features location-based weather detection, dynamic background
          themes that change based on weather conditions, and{" "}
          <strong style={{ color: "white" }}>
            detailed metrics like humidity, wind speed, and UV index.
          </strong>{" "}
          Users can{" "}
          <strong style={{ color: "white" }}>
            search for weather information in any city worldwide
          </strong>{" "}
          with autocomplete suggestions and persistent recent searches.{" "}
          <strong style={{ color: "white" }}>
            This project demonstrates advanced API integration, responsive
            design principles,
          </strong>{" "}
          and dynamic UI updates based on external data sources."
        </>
      ),
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
      {isLoading && <Loadingscreen />}

      {!isLoading && (
        <>
          {instructionOpen && (
            <Instructionscreen
              handleInstructionClose={handleInstructionClose}
            />
          )}
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
              <i
                className="fa-solid fa-circle"
                style={{ color: "white", fontSize: "12px" }}
              ></i>
            </p>
            <p style={{ opacity: currentIndex === 1 ? 1 : 0.3 }}>
              <i
                className="fa-solid fa-circle"
                style={{ color: "white", fontSize: "12px" }}
              ></i>
            </p>
            <p style={{ opacity: currentIndex === 2 ? 1 : 0.3 }}>
              <i
                className="fa-solid fa-circle"
                style={{ color: "white", fontSize: "12px" }}
              ></i>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default App;
