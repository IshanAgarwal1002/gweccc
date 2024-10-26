import React, { FC } from "react";
import { CONSTANTS } from "../../../Shared";
import './Landing.scss';
import { Card } from "../../Atoms";

const LandingPage: FC = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="overlay"></div>
      <section className="section hero-section">
        <div className="title">{CONSTANTS.EVENT_NAME}</div>
        <div className="date">{CONSTANTS.EVENT_DATE}</div>
        <div className="description">{CONSTANTS.EVENT_DESCRIPTION}</div>
      </section>
      <section className="section about-section">
        <div className="title">{CONSTANTS.ABOUT}</div>
        {CONSTANTS.ABOUT_DESCRIPTION.map((str, index) => {
          return (
            <div key={`text-${index}`} className={`text text-${index}`}>
              {str}
            </div>
          );
        })}
        <div className="text">{CONSTANTS.IMPORTANCE}</div>
        <div className="cards-wrapper">
          {CONSTANTS.CARDS_DATA.map((data, index) => {
            return (
              <Card key={`card-${index}`} customClass="imp-card" backContent={data.description}>{data.title}</Card>
            );
          })}
        </div>
      </section>
      <section className="section schedule-section">
        <div className="title">{CONSTANTS.SCHEDULE}</div>
        {CONSTANTS.SCHEDULE_DESCRIPTION.map((data, index) => {
          return (
            <div key={`text-${index}`} className={`text text-${index}`}>
              <div className="circle">{data.date}</div>
              <div className="content-1">{data.topics}</div>
              <div className="content-2">{data.speakers}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default LandingPage;