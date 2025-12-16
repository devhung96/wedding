import React from "react";
import "./WeddingFamily.scss";
import ImgChuRe from "../../assets/images/TUAN6506-1.webp";
import ImgCoDau from "../../assets/images/TUAN6002-1.webp";

const WeddingFamily: React.FC = () => {
  return (
    <section className="wedding-family">
      <div className="quote">
        “Hôn nhân là chuyện cả đời, <br />
        Yêu người vừa ý, cưới người mình thương…”
      </div>

      <div className="families">
        <div className="family">
          <h4>NHÀ TRAI</h4>
          <p>
            BÀ TRẦN THỊ HOÀN
            <br />
            <br />
            <br />
          </p>
          <p>Thôn 13, Xã Kiến Đức, Tỉnh Lâm Đồng.</p>
        </div>

        <div className="family">
          <h4>NHÀ GÁI</h4>
          <p>ÔNG MAI XUÂN THỦY</p>
          <p>BÀ NGUYỄN THỊ THÚY</p>
          <br />
          <p>Xóm 1 Thôn Thành Công, Xã Eana, Tỉnh DakLak</p>
        </div>
      </div>

      <div className="heart"></div>

      <div className="couple">
        <div className="groom">
          <h5>Chú Rể</h5>
          <h3>Đức Hùng</h3>
        </div>

        <div className="bride">
          <h5>Cô Dâu</h5>
          <h3>Mai Trang</h3>
        </div>
        <div className="couple-image">
          <div className="image-wrapper">
            <img src={ImgChuRe} alt="Chú rể Đức Hùng" loading="eager" />
          </div>
          <div className="image-wrapper">
            <img src={ImgCoDau} alt="Cô dâu Mai Trang" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingFamily;
