import myimage from "./assets/me.jpg";

function Maincard({ handleFollow, handleSendMessage }) {
  return (
    <div className="container">
      {/* Scrollable Content */}
      <div className="scrollable-content">
        <div>
          <div className="profilePicture">
            <img
              src={myimage}
              alt="my image"
              style={{
                height: "95px",
                width: "95px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
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
        </div>
        <div>
          <p>
            <i
              className="fa-solid fa-circle-user"
              style={{
                fontSize: "18px",
                padding: "6px",
                color: "rgb(18, 18, 99)",
              }}
            ></i>
            Name: Abhishek Kabi
          </p>
          <p>
            <i
              className="fa-solid fa-cake-candles"
              style={{ fontSize: "18px", padding: "6px", color: "magenta" }}
            ></i>
            DOB: 21/12/1991
          </p>

          <p>
            <i
              className="fa-solid fa-location-dot"
              style={{ fontSize: "18px", padding: "6px", color: "red" }}
            ></i>
            Lives in: Bangalore, Karnataka
          </p>
          <p>
            <i
              className="fa-solid fa-square-phone"
              style={{ fontSize: "18px", padding: "6px", color: "green" }}
            ></i>
            Mobile: +919332522166
          </p>
          <p>
            <i
              className="fa-solid fa-envelope"
              style={{ fontSize: "18px", padding: "6px", color: "lightgreen" }}
            ></i>
            Email: abhishek.kabi.21@gmail.com
          </p>
          <p>
            <i
              className="fa-solid fa-briefcase"
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
        </div>
        <h3 style={{ color: "white", textWrap: "wrap" }}>About Me</h3>{" "}
        <p>
          I am a passionate Front-End Developer with a strong foundation in
          JavaScript and React, building interactive and visually appealing web
          applications. I enjoy creating clean, user-friendly interfaces and
          turning creative ideas into functional digital experiences. Beyond
          coding, I'm an avid gamer and love immersing myself in engaging
          story-driven video games. I'm also a movie enthusiast, constantly
          inspired by storytelling, visuals, and design from the films I watch.
          I thrive in independent, self-driven work environments, where I can
          experiment, learn, and push the boundaries of what's possible on the
          web. Always curious and motivated, I combine my technical skills with
          creativity to build projects that are both functional and visually
          striking.
        </p>
      </div>

      {/* Fixed Buttons */}
      <div className="download-resume-button-div">
        <button className="addfrndbutton" onClick={handleFollow}>
          <i className="fa-brands fa-instagram" style={{ padding: "8px" }}></i>
          Follow
        </button>
        <button className="sendmsgbtn" onClick={handleSendMessage}>
          <i className="fa-brands fa-whatsapp" style={{ padding: "8px" }}></i>
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Maincard;
