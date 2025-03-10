import { useState, useEffect } from "react";
import { InfoSection } from "./components/InfoSection";
import { Header } from "./components/Header.jsx";
import { ResumeOutput } from "./components/ResumeOutput.jsx";
import { EducationSection } from "./components/EducationSection.jsx";
import { WorkSection } from "./components/WorkSection.jsx";
import "./App.css";
//function that will be used to take inputs and print them to the resume
function App() {
  useEffect(() => {
    document.title = "Resume Builder"; // Change this to your desired title
  }, []);

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
      skills: ["Frontend Development", "React Development"],
    },
  ]);
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
        <ResumeOutput
          className="resumeSection"
          resumeOutput={cvOutput}
          educationOutput={educationOutput}
          workOutput={workOutput}
        />
      </div>
    </>
  );
}
export default App;
