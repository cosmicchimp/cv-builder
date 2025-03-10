import { useState } from "react";

export function WorkSection({ updateWork }) {
  const [companyInput, updateCompany] = useState("");
  const [startTimeInput, updateStartTime] = useState("");
  const [endTimeInput, updateEndTime] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [description, updateDesc] = useState(""); // Restored missing state
  const [skillsInput, updateSkills] = useState(""); // Restored missing state
  const [isFlipped, flipUpdate] = useState(true);
  function handleSvgClick() {
    flipUpdate(!isFlipped);
  }

  const inputArray = [
    updateCompany,
    updateStartTime,
    updateEndTime,
    updateDesc,
    updateSkills,
  ];

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked); // Update the checkbox state
    if (checked) {
      updateEndTime("Still currently employed"); // Set endTime if checked
    } else {
      updateEndTime(""); // Clear endTime if unchecked
    }
  };

  // This handles the submit click and creates the resume HTML using props
  function handleSubmit() {
    if (!companyInput || !startTimeInput || !description || !skillsInput) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    updateWork((prevWork) => [
      ...prevWork,
      {
        companyInput,
        startTimeInput,
        endTimeInput,
        description,
        skillsInput,
      },
    ]);

    // Reset fields after submission
    inputArray.forEach((fn) => {
      fn("");
    });
  }
  if (!isFlipped) {
    return (
      <div className="workSection">
        <span className="collapseBox">
          <h2>Work Experience:</h2>
          <svg
            className="collapseButton"
            id="workCollapse"
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

        <input
          value={companyInput}
          placeholder="Past/Current Company"
          onChange={(e) => updateCompany(e.target.value)}
        />
        <label style={{ textAlign: "center" }}>
          Start Date:
          <br></br>
          <input
            type="date"
            value={startTimeInput}
            onChange={(e) => updateStartTime(e.target.value)}
          />
        </label>
        <label style={{ textAlign: "center" }}>
          End Date:
          <br></br>
          <input
            type="date"
            value={endTimeInput}
            onChange={(e) => updateEndTime(e.target.value)}
          />
        </label>
        <span style={{ display: "flex", alignItems: "center" }}>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Still Employed
          </label>
        </span>
        <textarea
          value={description}
          placeholder="Description of experience/time spent at company..."
          onChange={(e) => updateDesc(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  } else {
    return (
      <div className="workSection">
        <span className="collapseBox">
          <h2>Work Experience:</h2>
          <svg
            className={`collapseButton ${isFlipped ? "flipped" : ""}`}
            id="workCollapse"
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
