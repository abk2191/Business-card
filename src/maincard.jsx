import myimage from "./assets/me.jpg";

function Maincard({ handleFollow, handleSendMessage }) {
  return (
    <div className="container">
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
      <p>
        <i
          className="fa-solid fa-circle-user"
          style={{ fontSize: "18px", padding: "6px", color: "blue" }}
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
        Services: Full-Stack developer | UI/UX Designer | Websites/Apps | Tech
        Support
      </p>
      <hr
        style={{
          border: "none",
          height: "1px",
          backgroundColor: "#ccc",
          margin: "20px 0",
        }}
      />
      <button className="addfrndbutton" onClick={handleFollow}>
        <i class="fa-brands fa-instagram" style={{ padding: "8px" }}></i>
        Follow
      </button>
      <button className="sendmsgbtn" onClick={handleSendMessage}>
        <i class="fa-brands fa-whatsapp" style={{ padding: "8px" }}></i>Send
        Message
      </button>
    </div>
  );
}

export default Maincard;
