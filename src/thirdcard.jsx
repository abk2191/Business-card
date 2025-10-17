import myimage from "./assets/me.jpg";

function Thirdcard({ handleFollow, handleSendMessage }) {
  return (
    <div className="container">
      <div className="profilePicture">
        <h3
          style={{
            color: "white",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i class="fa-solid fa-diagram-project"></i>Projects
        </h3>
      </div>
      <hr
        style={{
          border: "none",
          height: "1px",
          backgroundColor: "#ccc",
          margin: "20px 0",
        }}
      />
      <div className="project-list">
        <h1 style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
          1. Wordle Game
        </h1>
        <p style={{ color: "grey", fontFamily: "Inter, sans-serif" }}>
          I built a Wordle clone using vanilla JavaScript with a 6x5 grid
          structure and keyboard input. The game logic validates guesses against
          a word dictionary and provides color-coded feedback
          (green/yellow/gray). I implemented keyboard event handling for user
          input and local storage to track game statistics. The entire game
          features real-time validation, win/lose conditions, and a responsive
          UI without any external libraries.
        </p>
        <div className="project-buttons">
          <button className="code-button">
            <i class="fa-brands fa-github"></i> Code
          </button>
          <button className="run-button">
            <i class="fa-solid fa-rocket"></i> Run Project
          </button>
        </div>
      </div>
      <button
        className="addfrndbutton"
        style={{ backgroundColor: "yellowgreen", color: "black" }}
      >
        <i className="fa-solid fa-at" style={{ padding: "8px" }}></i>
        Send Me an Email
      </button>
    </div>
  );
}

export default Thirdcard;
