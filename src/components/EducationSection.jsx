import { useState } from "react";

export function EducationSection({ updateEducation }) {
  const [collegeInput, updateCollege] = useState("");
  const [degreeInput, updateDegree] = useState("");
  const [yearInput, updateYear] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); // Restored missing state
  const [isFlipped, flipUpdate] = useState(true);
  function handleSvgClick() {
    flipUpdate(!isFlipped);
  }
  const inputArray = [
    updateCollege,
    updateDegree,
    updateYear,
    setSelectedOption,
  ];

  // Handles radio button selection
  function handleRadioChange(event) {
    setSelectedOption(event.target.value);
  }

  // This handles the submit click and creates the resume HTML using props
  function handleSubmit() {
    if (!collegeInput || !degreeInput || !yearInput || !selectedOption) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    updateEducation((prevEducationInfo) => [
      ...prevEducationInfo,
      {
        college: collegeInput,
        degree: degreeInput,
        year: yearInput,
        degreeLevel: selectedOption,
        // Include the selected degree level
      },
    ]);

    // Reset fields after submission
    inputArray.forEach((fn) => {
      fn("");
    });
  }
  if (!isFlipped) {
    return (
      <div className="educationSection">
        <span className="collapseBox">
          <h2>Education:</h2>
          <svg
            className={`collapseButton ${isFlipped ? "flipped" : ""}`}
            id="educationCollapse"
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
          value={collegeInput}
          placeholder="College/School"
          onChange={(e) => updateCollege(e.target.value)}
        />
        <input
          value={degreeInput}
          placeholder="Degree/Certification Attained"
          onChange={(e) => updateDegree(e.target.value)}
        />
        <span style={{ display: "flex", alignItems: "center" }}>
          <label>
            <input
              type="radio"
              name="degreeChoice"
              value="Associates"
              checked={selectedOption === "Associates"}
              onChange={handleRadioChange}
            />
            Associates
          </label>
          <label>
            <input
              type="radio"
              name="degreeChoice"
              value="Bachelors"
              checked={selectedOption === "Bachelors"}
              onChange={handleRadioChange}
            />
            Bachelors
          </label>
          <label>
            <input
              type="radio"
              name="degreeChoice"
              value="Certification"
              checked={selectedOption === "Certification"}
              onChange={handleRadioChange}
            />
            Certification
          </label>
        </span>
        <input
          value={yearInput}
          placeholder="Year Attained"
          onChange={(e) => updateYear(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  } else {
    return (
      <div className="educationSection">
        <span className="collapseBox">
          <h2>Education:</h2>
          <svg
            className={`collapseButton ${isFlipped ? "flipped" : ""}`}
            id="educationCollapse"
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
