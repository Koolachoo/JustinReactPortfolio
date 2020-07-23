import React from "react";
import "./Homework.css";
import HomeworkCard from "../../components/homeworkCard/HomeworkCard";
import { homeworkSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{homeworkSection.title}</h1>
          <p className="subTitle achievement-subtitle">{homeworkSection.subtitle}</p>
        </div>
        <div className="achievement-cards-div">
          {homeworkSection.homeworkCards.map(card => {
            return (
              <HomeworkCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
