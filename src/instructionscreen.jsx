function Instructionscreen({ handleInstructionClose }) {
  return (
    <div className="instruction-screen">
      <div className="close-button">
        <button onClick={handleInstructionClose} className="closebtn">
          <i class="fa-solid fa-square-xmark"></i>
        </button>
      </div>
      <div className="instructions">
        <p style={{ color: "white" }}>
          <i class="fa-solid fa-lightbulb" style={{ color: "white" }}></i> Swipe
          left or right to reveal all cards.
        </p>
        <p style={{ color: "white" }}>
          <i class="fa-solid fa-lightbulb" style={{ color: "white" }}></i>{" "}
          Scroll on cards to see all details.
        </p>
      </div>
    </div>
  );
}

export default Instructionscreen;
