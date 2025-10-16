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
        <i class="fa-solid fa-building-columns"></i> Vellore Institute of
        Technology (VIT){" "}
      </h3>
      <p style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
        <i class="fa-solid fa-graduation-cap"></i> Course: B.Tech - Information
        Technology & Engineering.
      </p>

      <p style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
        <i class="fa-solid fa-star-half-stroke"></i> Grade: 6.68
      </p>
      <hr
        style={{
          border: "none",
          height: "1px",
          backgroundColor: "#ccc",
          margin: "20px 0",
        }}
      />
      <h3 style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
        Tech Skills:
      </h3>
      <p>
        <i class="fa-brands fa-react"></i> React
      </p>
      <p>
        <i class="fa-brands fa-square-js"></i> Javascript
      </p>
      <p>
        <i class="fa-brands fa-html5"></i> HTML 5
      </p>
      <p>
        <i class="fa-brands fa-css3-alt"></i> CSS
      </p>
      <hr
        style={{
          border: "none",
          height: "1px",
          backgroundColor: "#ccc",
          margin: "20px 0",
        }}
      />
      <button
        className="addfrndbutton"
        style={{ backgroundColor: "gold", color: "black" }}
      >
        <i class="fa-solid fa-download" style={{ padding: "8px" }}></i>
        Download My Resume
      </button>
    </div>
  );
}

export default Secondcard;
