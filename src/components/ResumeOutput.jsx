import { useState } from "react";
import { IoIosPhonePortrait, IoIosMail } from "react-icons/io";
export const ResumeOutput = ({
  resumeOutput,
  educationOutput,
  workOutput,
  skillsOutput,
  updateNewResume,
  updateResumeDownload,
}) => {
  const first = workOutput[0];
  let skills = workOutput.skills;
  function handleNewResume() {
    updateNewResume(true);
  }
  function handleResumeDownload() {
    updateResumeDownload(true);
  }
  return (
    <>
      <div className="buttonContainer">
        <svg
          onClick={handleNewResume}
          className="headerButton"
          id="newResumeButton"
          fill="#ffffff"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 349.03 349.031"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M349.03,141.226v66.579c0,5.012-4.061,9.079-9.079,9.079H216.884v123.067c0,5.019-4.067,9.079-9.079,9.079h-66.579 c-5.009,0-9.079-4.061-9.079-9.079V216.884H9.079c-5.016,0-9.079-4.067-9.079-9.079v-66.579c0-5.013,4.063-9.079,9.079-9.079 h123.068V9.079c0-5.018,4.069-9.079,9.079-9.079h66.579c5.012,0,9.079,4.061,9.079,9.079v123.068h123.067 C344.97,132.147,349.03,136.213,349.03,141.226z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <svg
          className="headerButton"
          id="saveButton"
          onClick={handleResumeDownload}
          viewBox="-2 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>arrow-bottom</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="#ffffff"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {" "}
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-519.000000, -931.000000)"
                fill="#ffffff"
              >
                {" "}
                <path
                  d="M543,935 L540,935 L540,937 L543,937 C544.104,937 545,937.896 545,939 L545,959 C545,960.104 544.104,961 543,961 L523,961 C521.896,961 521,960.104 521,959 L521,939 C521,937.896 521.896,937 523,937 L526,937 L526,935 L523,935 C520.791,935 519,936.791 519,939 L519,959 C519,961.209 520.791,963 523,963 L543,963 C545.209,963 547,961.209 547,959 L547,939 C547,936.791 545.209,935 543,935 L543,935 Z M525.343,949.758 L532.242,956.657 C532.451,956.865 532.728,956.954 533,956.939 C533.272,956.954 533.549,956.865 533.758,956.657 L540.657,949.758 C541.048,949.367 541.048,948.733 540.657,948.343 C540.267,947.953 539.633,947.953 539.242,948.343 L534,953.586 L534,932 C534,931.447 533.553,931 533,931 C532.448,931 532,931.447 532,932 L532,953.586 L526.757,948.343 C526.367,947.953 525.733,947.953 525.343,948.343 C524.952,948.733 524.952,949.367 525.343,949.758 L525.343,949.758 Z"
                  id="arrow-bottom"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <div className="resumeWrapper">
        <div
          className="resumeTop"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: ".8rem",
              gap: ".5vw",
              marginLeft: ".5vw",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                color: "black",
                textDecoration: "underline",
                fontSize: "2rem",
              }}
            >
              {resumeOutput.name}
            </h2>
            <h2
              style={{
                fontSize: "1.5rem",
              }}
            >
              {"- " + resumeOutput.profession}
            </h2>
          </span>

          <div
            className="contactInfo"
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: ".5rem",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: "1rem",
                gap: ".5vw",
                marginRight: ".5vw",
              }}
            >
              <span>
                <IoIosMail className="icon" />
                {resumeOutput.email}
              </span>
              <span>
                <IoIosPhonePortrait className="icon" />
                {resumeOutput.phone}
              </span>
            </span>
          </div>
        </div>
        <span className="descriptionSection">
          <h2 style={{ marginLeft: ".5vw" }}>Bio:</h2>
          <p
            style={{
              fontSize: "1.2rem",
            }}
          >
            {resumeOutput.description}
          </p>
        </span>
        <div className="educationResumeSection">
          <span>
            <h2>Education:</h2>
            {educationOutput.map((education) => {
              return (
                <h3 className="educationChunk">
                  {`Attained ${
                    education.degreeLevel === "Associates" ? "an" : "a"
                  } ${
                    education.degreeLevel === "Certification"
                      ? ""
                      : education.degreeLevel
                  } ${
                    education.degreeLevel === "Certification"
                      ? "certification"
                      : "degree"
                  } in ${education.degree} at ${education.college} in ${
                    education.year
                  }`}
                </h3>
              );
            })}
          </span>
        </div>
        <h2 className="workSectionTitle">Work Experience:</h2>

        <div className="workResumeSection">
          {Array.isArray(workOutput) && workOutput.length > 0 ? (
            workOutput.map((workExperience, index) => (
              <div key={index}>
                <h3
                  className="workH3"
                  style={{
                    lineHeight: ".01rem",
                  }}
                >{`${
                  workExperience.workplace
                }, ${workExperience.startTime.substring(0, 4)} - ${
                  workExperience.endTime.substring(0, 4) == "Curr"
                    ? workExperience.endTime
                    : workExperience.endTime.substring(0, 4)
                }`}</h3>
                <h4 className="workDesc">{workExperience.taskDesc}</h4>
              </div>
            ))
          ) : (
            <p>No work experience available.</p>
          )}
        </div>
        <div className="skillsResumeSection">
          <h2>Skills and Abilities:</h2>
          {skillsOutput.map((skill) => {
            return <h4 className="skillLine">{skill}</h4>;
          })}
        </div>
      </div>
    </>
  );
};
