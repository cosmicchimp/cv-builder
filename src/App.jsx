import { useState, useEffect } from "react";
import { InfoSection } from "./components/InfoSection";
import { Header } from "./components/Header.jsx";
import { ResumeOutput } from "./components/ResumeOutput.jsx";
import { EducationSection } from "./components/EducationSection.jsx";
import { WorkSection } from "./components/WorkSection.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import "./App.css";
//function that will be used to take inputs and print them to the resume
function App() {
  useEffect(() => {
    document.title = "Resume Builder"; // Change this to your desired title
    alert("Use the '+' button to clear the demo resume");
    // Display the alert
  }, []); // Runs only when the component mounts
  const [newResume, updateNewResume] = useState(false);
  const [resumeDownload, updateResumeDownload] = useState(false);
  const [cvOutput, updateGeneralInfo] = useState({
    name: "John Doe",
    profession: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    email: "cosmiccooker@gmail.com",
    phone: "123-123-1234",
  });
  const [educationOutput, updateEducation] = useState([
    {
      college: "UNM",
      degreeLevel: "Bachelors",
      degree: "Management of Information Systems",
      year: "2026",
    },
  ]);
  const [workOutput, updateWork] = useState([
    {
      workplace: "Apple Inc",
      startTime: "2016",
      endTime: "Current",
      taskDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);
  const [skillsOutput, updateSkillsOutput] = useState([
    "Frontend Development",
    "React Development",
  ]);
  const fnArray = [
    updateWork,
    updateGeneralInfo,
    updateEducation,
    updateSkillsOutput,
  ];
  //function to detect and wipe the resume output
  if (newResume) {
    fnArray[0]([]); // Clear workOutput (set to an empty array)
    fnArray[1]({}); // Clear cvOutput (set to an empty object)
    fnArray[2]([]); // Clear educationOutput (set to an empty array)
    fnArray[3]([]); // Clear skillsOutput (set to an empty array)
    updateNewResume(false); // Reset newResume flag
  }
  if (resumeDownload) {
    import("html2pdf.js").then((html2pdf) => {
      // Assuming you want to trigger PDF creation here
      const resumeContent = document.querySelector(".resumeWrapper");
      const options = {
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf.default().from(resumeContent).set(options).save();
    });
    updateResumeDownload(false);
  }
  return (
    <>
      <div className="appWrapper">
        <Header className="headerSection" />
        <InfoSection
          className="infoInputSection"
          updateGeneralInfo={updateGeneralInfo}
        />
        <EducationSection updateEducation={updateEducation} />
        <WorkSection updateWork={updateWork} />
        <SkillsSection updateSkillsOutput={updateSkillsOutput} />
        <ResumeOutput
          className="resumeSection"
          resumeOutput={cvOutput}
          educationOutput={educationOutput}
          workOutput={workOutput}
          skillsOutput={skillsOutput}
          updateNewResume={updateNewResume}
          updateResumeDownload={updateResumeDownload}
        />
      </div>
    </>
  );
}
export default App;
