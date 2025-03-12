import { useState } from "react";
export function SkillsSection({ updateSkillsOutput }) {
  const [isFlipped, flipUpdate] = useState(true);
  const [skillsInput, updateSkillsInput] = useState("");
  function handleSvgClick() {
    flipUpdate(!isFlipped);
  }

  // This handles the submit click and creates the resume HTML using props
  function handleSubmit() {
    if (!skillsInput) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    updateSkillsOutput((prevSkills) => [...prevSkills, skillsInput]);
    // Reset fields after submissions
    updateSkillsInput("");
  }
  if (!isFlipped) {
    return (
      <div className="skillsSection">
        <span className="collapseBox">
          <h2>Skills and Abilities:</h2>
          <svg
            className="collapseButton"
            id="skillsCollapse"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSvgClick}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
        </span>
        <label style={{ textAlign: "center" }}>
          Skills:
          <br></br>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => updateSkillsInput(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  } else {
    return (
      <div className="skillsSection">
        <span className="collapseBox">
          <h2>Skills and Abilities:</h2>
          <svg
            className={`collapseButton ${isFlipped ? "flipped" : ""}`}
            id="skillsCollapse"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSvgClick}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </div>
    );
  }
}
