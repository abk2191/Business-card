import myimage from "./assets/me.jpg";

function Thirdcard({
  handleFollow,
  handleSendMessage,
  handleShowCode,
  handleShowProject,
  projects,
}) {
  const handleSendEmail = () => {
    window.open("mailto:abhishek.kabi.21@gmail.com", "_blank");
    // Replace "your-email@example.com" with your actual email address
  };

  return (
    <div className="container">
      {/* Scrollable Content */}
      <div className="scrollable-content">
        <div>
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
              <i className="fa-solid fa-diagram-project"></i>Projects
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
        </div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-list"
            style={{ marginBottom: "20px" }}
          >
            <h1
              style={{
                color: "#4b2f8dff",
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif",
                marginBottom: "6px",
              }}
            >
              {project.id}. {project.title}
            </h1>
            <p style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
              {project.description}
            </p>
            <div className="project-buttons">
              <button
                className="code-button"
                onClick={() => handleShowCode(project.codeUrl)}
              >
                <i className="fa-brands fa-github"></i> Code
              </button>
              <button
                className="run-button"
                onClick={() => handleShowProject(project.liveUrl)}
              >
                <i className="fa-solid fa-rocket"></i> Run Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Email Button */}
      <div className="download-resume-button-div">
        <button
          style={{
            backgroundColor: "rgb(16, 97, 16)",
            color: "white",
            width: "100%",
            borderRadius: "6px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleSendEmail}
        >
          <i className="fa-solid fa-at" style={{ padding: "8px" }}></i>
          Send Me an Email
        </button>
      </div>
    </div>
  );
}

export default Thirdcard;
