import { useState } from "react";
//This is just a function creating the base of the info section
export const InfoSection = ({ updateGeneralInfo }) => {
  const [nameInput, updateNameInput] = useState("");
  const [phoneInput, updatePhone] = useState("");
  const [emailInput, updateEmail] = useState("");
  const [professionInput, updateProfession] = useState("");
  const [description, updateDesc] = useState("");
  const [isFlipped, flipUpdate] = useState(true);
  const inputArray = [
    updateNameInput,
    updatePhone,
    updateDesc,
    updateEmail,
    updateProfession,
  ];
  //This handles the submit click and creates the resume HTML using props
  function handleSubmit() {
    if (
      !nameInput ||
      !professionInput ||
      !description ||
      !emailInput ||
      !phoneInput
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    updateGeneralInfo({
      name: nameInput,
      profession: professionInput,
      description: description,
      email: emailInput,
      phone: phoneInput,
    });
    inputArray.forEach((fn) => {
      fn("");
    });
  }
  function handleSvgClick() {
    flipUpdate(!isFlipped);
  }
  if (!isFlipped) {
    return (
      <div className="generalInfoSection">
        <span className="collapseBox">
          <h2>Personal Info:</h2>
          <svg
            className={`collapseButton ${isFlipped ? "flipped" : ""}`}
            id="personalCollapse"
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
          value={nameInput}
          placeholder="Full Name"
          key="fullName"
          onChange={(e) => {
            updateNameInput(e.target.value);
          }}
        ></input>
        <input
          value={professionInput}
          placeholder="Current Profession"
          onChange={(e) => {
            updateProfession(e.target.value);
          }}
        ></input>
        <textarea
          value={description}
          onChange={(e) => {
            updateDesc(e.target.value);
          }}
          placeholder="Personal Description..."
        ></textarea>

        <input
          value={emailInput}
          placeholder="Email"
          onChange={(e) => {
            updateEmail(e.target.value);
          }}
        ></input>
        <input
          value={phoneInput}
          placeholder="Phone Number"
          onChange={(e) => {
            updatePhone(e.target.value);
          }}
        ></input>
        <button style={{}} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  } else {
    return (
      <div className="generalInfoSection">
        <span className="collapseBox">
          <h2>Personal Info:</h2>
          <svg
            className={`collapseButton ${isFlipped ? "flipped" : ""}`}
            id="personalCollapse"
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
};
