import React from "react";
import "./WeddingInvitation.scss";

interface WeddingInvitationProps {
  title: string;
  time: string;
  date: string;
}

const WeddingInvitation: React.FC<WeddingInvitationProps> = ({
  title,
  time,
  date,
}) => {
  return (
    <section className="wedding-invitation">
      <h1 className="title">{title}</h1>
      <div className="invitation-content">
        <h2 className="sub-title">THƯ MỜI TIỆC CƯỚI</h2>
        <div className="divider"></div>
        <h2 className="time">{time}</h2>
        <h2 className="date">{date}</h2>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default WeddingInvitation;
