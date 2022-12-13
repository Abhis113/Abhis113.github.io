import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fp03_166.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Abhishek kumar </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Patna,Bihar(India)
                </span>
                . I have completed my B-TECH  (Mechanical Engineering)
                from{" "}
                <span className="different">
                Dumka Engineering College 
                 Dumka (Jharkhand)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
              <h4>Apart from coding, some other activities that I love to do!</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
              Playing Cricket or Watching live Match{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Movies{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cooking 
            {" "}
              </h4>
              
             
                   <br/> <br/>
              <p style={{ color: "rgb(155 126 172)" }}>
            "I'm a Tech Enthusiast who enjoys building awesome website that solves real world problems."{" "}
          </p>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
