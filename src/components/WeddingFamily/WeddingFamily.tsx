import React from "react";
import "./WeddingFamily.scss";
import ImgChuRe from "../../assets/images/ImgChuRe-min.jpg";
import ImgCoDau from "../../assets/images/ImgCoDau-min.jpg";

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
          <p>Kiến Thành Đăk R'Lấp Đăk Nông.</p>
        </div>

        <div className="family">
          <h4>NHÀ GÁI</h4>
          <p>ÔNG MAI XUÂN THỦY</p>
          <p>BÀ NGUYỄN THỊ THÚY</p>
          <br />
          <p>Xóm 1 Thôn Thành Công, Xã Eana, Huyện Krongana, Tỉnh DakLak</p>
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
         <div> <img src={ImgChuRe} alt="Chú rể Đức Hùng" /></div>
         <div> <img src={ImgCoDau} alt="Cô dâu Mai Trang" /></div>
        </div>
      </div>
    </section>
  );
};

export default WeddingFamily;
