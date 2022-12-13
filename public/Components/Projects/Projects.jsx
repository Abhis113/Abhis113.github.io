import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiBootstrap,
  SiChakraui,
  SiReact,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <p className="section__title different">recently worked on:-</p>
        <div className="allProjects">
{/* 1st */}

<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://boutique.humbleandrich.com/wp-content/uploads/2019/04/Nordstrom.jpg"
                 
                    alt="Nordstrom "
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>"Nordstrom”.</h2>
                <p>
                  Nordstrom, Inc. is an American luxury department store chain headquartered
                  in Seattle,Washington.The growing Nordstrom Best chain selling clothing in 1963,
                  and become the Nordstrom full-line retailer that presently exists in 1971.

                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                </div>
                <div>
                  <a
                    href="https://curious-biscotti-eaa09a.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Netlity Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Harshal-Jadhav/flaky-touch-8976.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                       Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* 2nd */}


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.mobihealthnews.com/sites/default/files/Screen%20Shot%202021-09-16%20at%2010.54.57%20AM.png"
                    alt="pharmeasy"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>“PharmEasy”.</h2>
                <p>“PharmEasy” offers 1lakh+ medicines and 
                  health 
                  products across various categories through its retail partners 
                  which are spread across the country.You can simply place an order 
                  on our website/app and we will deliver order in as low as 4 hours  
                  
                 </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                   
                </div>
                <div>
                  <a
                    href="https://poetic-profiterole-2eeb4f.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Netlity Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/VinayPathania/Team-Spartans"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          
          
        </div>
      </div>
    </>
  );
};
