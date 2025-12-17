import { useState, useEffect, useRef } from "react";
import "./App.scss";
import WeddingInvitation from "./components/WeddingInvitation/WeddingInvitation";
import WeddingInvitationCard from "./components/WeddingInvitationCard/WeddingInvitationCard";
import WeddingParty from "./components/WeddingParty/WeddingParty";
import WeddingFamily from "./components/WeddingFamily/WeddingFamily";
import WeddingAlbum from "./components/WeddingAlbum/WeddingAlbum";
import ConfirmationModal from "./components/WeddingParty/ConfirmationModal";
import WishModal from "./components/WeddingParty/WishModal";

// Import images

import ImgWeddingInvitation1 from "./assets/images/TUAN6716.webp";
import ImgWeddingInvitation2 from "./assets/images/TUAN6309.webp";
import ImgWeddingInvitation3 from "./assets/images/TUAN6506.webp";

import AlbumImg1 from "./assets/images/TUAN6171.webp";
import AlbumImg2 from "./assets/images/TUAN6276.webp";
import AlbumImg3 from "./assets/images/TUAN6362.webp";
import AlbumImg4 from "./assets/images/TUAN6953.webp";
import AlbumImg5 from "./assets/images/TUAN6565.webp";
import AlbumImg6 from "./assets/images/TUAN6632.webp";
import AlbumImg7 from "./assets/images/TUAN6736.webp";
import AlbumImg8 from "./assets/images/TUAN6824.webp";

import WeddingWishes from "./components/WeddingWishes/WeddingWishes";

import WeddingSong from "./assets/audio/ducphuc.mp3";

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    side: "bride" as "bride" | "groom",
  });

  const [wishModalOpen, setWishModalOpen] = useState(false);
  const [wishesRefreshTrigger, setWishesRefreshTrigger] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenModal = (side: "bride" | "groom") => {
    setModalState({
      isOpen: true,
      side,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      ...modalState,
      isOpen: false,
    });
  };

  const handleOpenWishModal = () => {
    setWishModalOpen(true);
  };

  const handleCloseWishModal = () => {
    setWishModalOpen(false);
  };

  const handleWishSuccess = () => {
    // Trigger refresh in WeddingWishes
    setWishesRefreshTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    const enableAudio = () => {
      audioRef.current?.play().catch(() => {});
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
    };
  }, []);
  // Update volume when it changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      {/* Music Player */}
      <audio
        ref={audioRef}
        src={WeddingSong}
        preload="auto"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></audio>

      {/* Music Control Button */}
      <div
        className="music-control"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`music-control-container  ${isHovered ? "expanded" : ""}`}
        >
          <button
            onClick={toggleMusic}
            className="music-icon-button"
            aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
          >
            {isPlaying ? "🔊" : "🔇"}
          </button>
          <div className="volume-slider-wrapper">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              aria-label="Volume control"
            />
          </div>
        </div>
      </div>

      <div className="page-view">
        <WeddingInvitation
          title="Đức Hùng - Mai Trang"
          time="11.01.2026"
          date="18.01.2026"
        />
        <WeddingFamily />

        <WeddingInvitationCard
          title="Thư Mời"
          subtitle="THAM DỰ LỄ CƯỚI CỦA HAI CON CHÚNG TÔI"
          images={[
            ImgWeddingInvitation1,
            ImgWeddingInvitation2,
            ImgWeddingInvitation3,
          ]}
        />
        <WeddingParty
          title="TIỆC CƯỚI NHÀ GÁI"
          time="CHỦ NHẬT | 11H00"
          date="11.01.2026"
          lunarDate="(Tức Ngày 23 Tháng 11 Năm Ất Tỵ)"
          location="TƯ GIA NHÀ GÁI"
          mapUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.020083815647!2d107.99606707506862!3d12.514827687760125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDMwJzUzLjQiTiAxMDfCsDU5JzU1LjEiRQ!5e0!3m2!1sen!2s!4v1765884369525!5m2!1sen!2s"
          onConfirm={() => handleOpenModal("bride")}
        />
        <WeddingParty
          title="TIỆC CƯỚI NHÀ TRAI"
          time="CHỦ NHẬT | 11H00"
          date="18.01.2026"
          lunarDate="(Tức Ngày 30 Tháng 11 Năm Ất Tỵ)"
          location="TRUNG TÂM HỘI NGHỊ TIỆC CƯỚI HOA HUỆ THÔN 2, XÃ KIẾN ĐỨC, TỈNH LÂM ĐỒNG"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.8912045060528!2d107.50980793349203!3d12.00118971100049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173bb000c108b17%3A0x8818d5be3c136dce!2zTmjDoCBow6BuZyBIb2EgSHXhu4cgaMOhdCBrYXJhb2tlIHNhdSAyMmggxJHDqm0!5e0!3m2!1sen!2s!4v1765883893470!5m2!1sen!2s"
          onConfirm={() => handleOpenModal("groom")}
        />
        <WeddingAlbum
          title="Album hình cưới"
          images={[
            {
              src: AlbumImg1,
              alt: "Nam tay nhau",
              className: "large",
              order: 1,
            },
            { src: AlbumImg2, alt: "Khieu vu", className: "large", order: 2 },
            { src: AlbumImg7, alt: "Test", className: "large", order: 3 },
            {
              src: AlbumImg3,
              alt: "Wedding photo 2",
              className: "large",
              order: 4,
            },
            { src: AlbumImg4, alt: "Cầm ô", className: "large", order: 5 },
            { src: AlbumImg5, alt: "Tua dau", className: "large", order: 6 },
            { src: AlbumImg6, alt: "Kieu vu 2", className: "large", order: 7 },
            { src: AlbumImg8, alt: "Cam tay", className: "large", order: 8 },
          ]}
        />
        <WeddingWishes refreshTrigger={wishesRefreshTrigger} />
        <div className="thank-you-section">
          <h2>THANK YOU!</h2>
          <p>Rất hân hạnh được đón tiếp!</p>
          <hr />
        </div>

        {/* <WeddingGift /> */}
      </div>

      <ConfirmationModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        side={modalState.side}
      />
      <WishModal
        isOpen={wishModalOpen}
        onClose={handleCloseWishModal}
        onSuccess={handleWishSuccess}
      />
      <div className="floating-button">
        <button onClick={handleOpenWishModal}>Gửi lời chúc</button>
      </div>
    </>
  );
}

export default App;
