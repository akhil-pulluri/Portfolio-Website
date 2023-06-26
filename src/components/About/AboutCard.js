import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Akhil Pulluri</span> from Hyderabad, India. I am an experienced Software Professional and a computer science graduate from Osmania University.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Problem Solving
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Tech articles and updates regarding latest tech
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Cycling
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
