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



{/* paste */}

{/* 3rd */}
<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                 
                    alt="Nordstrom "
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>"Deccan Chronicle”.</h2>
                <p>
                  Deccan Chronicle is an Indian English - language daily newspaper founded by Rajagopal Mudaliar
                  in the 1930s.It is published in Hyderabad, Telangana, by Deccan Chronicle Holdings Limited (DCHL).The newspapers's
                  name derives from the Deccan regions of India.

                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                </div>
                <div>
                  <a
                    href="https://stately-treacle-914f53.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Netlity Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhis113/torpid-education-5260/tree/fp03_166_day-05/deccan-chronical"
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

          
          {/* *********************** */}
          {/* 4th */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/png;base64,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"
                 
                    alt="Nordstrom "
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>"MyFitnessPal”.</h2>
                <p>
                  MyFitnessPal is a smartphone app and website that tracks diet and exercise.
                  The app uses gamification elements to encourage adherance to exercise and diet goals.
                  To track nutrients, users can either scan the barcodes of various food items or manually
                  .
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                </div>
                <div>
                  <a
                    href="https://stayfits.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Netlity Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/rajkumar7859/psychotic-cars-5822"
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


           {/* *********** */}
          
          
        </div>
      </div>
    </>
  );
};
