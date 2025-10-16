import React from "react";
import "./WeddingParty.scss";

interface WeddingPartyProps {
  title: string;
  time: string;
  date: string;
  lunarDate: string;
  location: string;
  mapUrl: string;
}

const WeddingParty: React.FC<WeddingPartyProps> = ({
  title,
  time,
  date,
  lunarDate,
  location,
  mapUrl,
}) => {
  return (
    <div className="wedding-party">
      <h2 className="title">{title}</h2>
      <div className="time">{time}</div>
      <div className="date">{date}</div>
      <div className="lunar-date">{lunarDate}</div>
      <div className="location">
        <div className="address">{location}</div>
      </div>
      <div className="location-card">
        <div className="map-container">
          <iframe
            src={mapUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="location-action">
          <button className="confirm-button">XÁC NHẬN THAM DỰ</button>
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
