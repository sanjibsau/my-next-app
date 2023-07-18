import React from "react";
import { useState } from "react";
import Div from "../Div";
import Spacing from '../Spacing'
import Link from "next/link";

export default function CareerOpen() {
  const [selected, setSelected] = useState(0);
  const handelToggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const accordionData = [
    {
      JobTitle: "SEO Executive",
      Location: "Delhi | Work from Office",
      experience: "2 years of experience",
      JobDescription:
        "Conducting on page and off page SEO | Developing and implementing strategies | Conducting competitive analysis |Optimisation of content regularly on website",
    },
    {
      JobTitle: "Client Servicing Executive",
      Location: "Delhi | Work from Office",
      experience: "2 years of experience",
       JobDescription:
      "Conducting on page and off page SEO | Developing and implementing strategies | Conducting competitive analysis |Optimisation of content regularly on website",
    },
  ];
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? "active" : ""}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.JobTitle}</h2>
            {
              <span className="cs-accordian_toggle cs-accent_color">
                <svg
                  width={15}
                  height={8}
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                </svg>
              </span>
            }
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">
              Location : {item.Location}
            </Div>
            <Div className="cs-accordian_body_in">
              Experience : {item.experience}
            </Div>
            <Div className="cs-accordian_body_in">
            Job Description : {item.JobDescription}
            </Div>
            <Spacing lg="10" md="40" />
            <Link className="cs-btn baner_btn_style" href="/contact">
                APPLY NOW
              </Link>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
