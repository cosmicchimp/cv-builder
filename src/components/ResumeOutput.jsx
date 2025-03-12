import { useState } from "react";
import { IoIosPhonePortrait, IoIosMail } from "react-icons/io";
export const ResumeOutput = ({
  resumeOutput,
  educationOutput,
  workOutput,
  skillsOutput,
}) => {
  const first = workOutput[0];
  let skills = workOutput.skills;
  return (
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
  );
};
