import myimage from "./assets/me.jpg";

function Secondcard({ handleFollow, handleSendMessage }) {
  return (
    <div className="container">
      <div className="profilePicture">
        <h3 style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
          Education Qualification
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
      <h3
        style={{
          color: "white",
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
        }}
      >
        Vellore Institute of Technology (VIT){" "}
      </h3>
      <p style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
        Course: B.Tech - Information Technology & Engineering.
      </p>
      <p style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
        Grade: 6.68
      </p>
    </div>
  );
}

export default Secondcard;
