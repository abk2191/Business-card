import myimage from "./assets/me.jpg";

function Thirdcard({ handleFollow, handleSendMessage }) {
  return (
    <div className="container">
      <div className="profilePicture">
        <h3 style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
          Projects
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
      <h3 style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
        Wordle Game
      </h3>
      <button
        className="addfrndbutton"
        style={{ backgroundColor: "yellowgreen", color: "black" }}
      >
        <i class="fa-solid fa-at" style={{ padding: "8px" }}></i>
        Send Me an Email
      </button>
    </div>
  );
}

export default Thirdcard;
