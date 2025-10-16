import React from "react";
import "./WeddingInvitationCard.scss";

interface WeddingInvitationCardProps {
  title: string;
  subtitle: string;
  images: string[];
  eventName: string;
  eventTime: string;
  eventDate: string;
  lunarDate: string;
  location: string;
}

const WeddingInvitationCard: React.FC<WeddingInvitationCardProps> = ({
  title,
  subtitle,
  images,
}) => {
  return (
    <div className="wedding-invitation-card">
      <div className="invitation-header">
        <div className="line-container"></div>
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="photo-gallery">
        {images.map((image, index) => (
          <div key={index} className="photo-item">
            <img src={image} alt={`Wedding photo ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="invitation-footer">
        <div className="line-container"></div>
      </div>
    </div>
  );
};

export default WeddingInvitationCard;
