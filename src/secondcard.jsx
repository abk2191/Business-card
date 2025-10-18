import myimage from "./assets/me.jpg";

function Secondcard({ handleFollow, handleSendMessage, handleDownloadResume }) {
  return (
    <div className="container">
      {/* Scrollable Content */}
      <div className="scrollable-content">
        <div className="inside-container">
          <div className="profilePicture">
            <h3
              style={{
                color: "black",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <i
                className="fa-solid fa-graduation-cap"
                style={{ color: "black" }}
              ></i>
              Education & Qualification
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
        <div className="edu-details">
          <h3
            style={{
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            •{" "}
            <i
              className="fa-solid fa-building-columns"
              style={{ color: "blue" }}
            ></i>{" "}
            Vellore Institute of Technology (VIT){" "}
          </h3>

          <p style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
            •{" "}
            <i
              className="fa-solid fa-graduation-cap"
              style={{ color: "black" }}
            ></i>{" "}
            Course: B.Tech - Information Technology & Engineering.
          </p>

          <p style={{ color: "white", fontFamily: "Inter, sans-serif" }}>
            •{" "}
            <i
              className="fa-solid fa-star-half-stroke"
              style={{ color: "gold" }}
            ></i>{" "}
            Grade: 6.68
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
        <h3
          style={{
            color: "white",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <i className="fa-solid fa-code" style={{ color: "red" }}></i>Tech
          Skills:
        </h3>
        <div className="tech-icons">
          <i className="fa-brands fa-react" style={{ color: "aqua" }}></i>
          <i className="fa-brands fa-square-js" style={{ color: "yellow" }}></i>
          <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
          <i className="fa-solid fa-microchip" style={{ color: "red" }}></i>
          <i className="fa-brands fa-git-alt" style={{ color: "blue" }}></i>
          <i className="fa-brands fa-node-js" style={{ color: "yellow" }}></i>
        </div>
        <div className="skill-description">
          <p>
            <i className="fa-brands fa-react" style={{ color: "aqua" }}></i>{" "}
            React
          </p>
          <p style={{ color: "white" }}>
            Components, JSX, State, Props, Hooks, useState, useEffect, Event
            Handling, Conditional Rendering, Lists & Keys, Context API, Custom
            Hooks, Virtual DOM, Reconciliation, Fragments, Higher-Order
            Components, Render Props, Error Boundaries, Refs, React Routers.
          </p>{" "}
          <p>
            <i
              className="fa-brands fa-square-js"
              style={{ color: "yellow" }}
            ></i>{" "}
            Javascript
          </p>
          <p style={{ color: "white" }}>
            Variables, Data Types, Operators, Type Conversion, Coercion,
            Function Declarations, Expressions, Arrow Functions, Parameters,
            Default Parameters, Higher-Order Functions, Callbacks, Object
            Literals, Properties, Methods, Array Methods, Destructuring,
            Spread/Rest Operators
          </p>{" "}
          <p>
            <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>{" "}
            HTML 5
          </p>
          <p style={{ color: "white" }}>
            HTML Syntax, DOCTYPE, HTML Element, Head, Body, Meta Tags, Headings,
            Paragraphs, Lists, Links, Horizontal Rules, Line Breaks, Strong,
            Emphasis, Mark, Small, Subscript, Superscript, Images, Audio, Video,
            Canvas, SVG, Figure, Figcaption, Table, Table Row, Table Data, Table
            Header, Caption, Colgroup, Form, Input Types, Label, Button, Select,
            Textarea, Fieldset, Legend, Header, Footer, Nav, Main, Article,
            Section, Aside.
          </p>{" "}
          <p>
            <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>{" "}
            CSS
          </p>
          <p style={{ color: "white" }}>
            Type, Class, ID, Universal, Attribute, Pseudo-class, Pseudo-element,
            Combinators, Content, Padding, Border, Margin, Box-sizing, Display,
            Position, Float, Clear, Z-index, Flex-container, Flex-items,
            Justify-content, Align-items, Flex-direction, Flex-wrap,
            Grid-container, Grid-items, Grid-template, Grid-areas, Gap,
            Auto-flow, Font-family, Font-size, Font-weight, Line-height,
            Text-align, Text-decoration, Color, Background-color,
            Background-image, Opacity, RGB/HSL.
          </p>{" "}
          <p>
            <i className="fa-solid fa-microchip" style={{ color: "red" }}></i>{" "}
            AI
          </p>
          <p style={{ color: "white" }}>
            I am proficient at using AI, regularly utilizing platforms like
            ChatGPT and DeepSeek to debug code, generate solutions, and overcome
            technical challenges. My strength lies in formulating clear,
            detailed queries to guide the AI toward the most effective answers.
            Integrating these tools into my daily routine has become a key part
            of my problem-solving process.
          </p>{" "}
          <p>
            <i className="fa-brands fa-git-alt" style={{ color: "blue" }}></i>{" "}
            Git (Version Control)
          </p>
          <p style={{ color: "white" }}>
            I am skilled at using Git for all aspects of version control, from
            basic commits to advanced branch management and collaboration. I
            confidently handle synchronization with remote repositories and can
            efficiently resolve merge conflicts. Using Git is a fundamental and
            integrated part of my development workflow.
          </p>{" "}
          <p>
            <i className="fa-brands fa-node-js" style={{ color: "yellow" }}></i>{" "}
            Node.js
          </p>
          <p style={{ color: "white" }}>
            I leverage Node.js as the runtime environment for my backend
            development, primarily using the Express framework to build server
            logic and APIs. I am skilled at managing environment variables,
            handling middleware, and connecting to databases to serve data to
            front-end clients. Using NPM, I effectively manage packages and
            scripts to streamline my development and build processes.
          </p>
        </div>
      </div>

      {/* Fixed Download Button */}
      <div className="download-resume-button-div">
        <button
          onClick={handleDownloadResume}
          style={{
            backgroundColor: "gold",
            color: "black",
            width: "100%",
            borderRadius: "6px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <i className="fa-solid fa-download" style={{ padding: "8px" }}></i>
          Download My Resume
        </button>
      </div>
    </div>
  );
}

export default Secondcard;
