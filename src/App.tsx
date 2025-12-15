import { useState } from 'react';
import './App.scss';
import WeddingInvitation from './components/WeddingInvitation/WeddingInvitation';
import WeddingInvitationCard from './components/WeddingInvitationCard/WeddingInvitationCard';
import WeddingParty from './components/WeddingParty/WeddingParty';
import WeddingFamily from './components/WeddingFamily/WeddingFamily';
import WeddingAlbum from './components/WeddingAlbum/WeddingAlbum';
import ConfirmationModal from './components/WeddingParty/ConfirmationModal';
import WishModal from './components/WeddingParty/WishModal';

// Import images

import ImgWeddingInvitation1 from "./assets/images/TUAN6716.jpg";
import ImgWeddingInvitation2 from "./assets/images/TUAN6309.jpg";
import ImgWeddingInvitation3 from "./assets/images/TUAN6506.jpg";

import AlbumImg1 from "./assets/images/TUAN6171.jpg";
import AlbumImg2 from "./assets/images/TUAN6276.jpg";
import AlbumImg3 from "./assets/images/TUAN6362.jpg";
import AlbumImg4 from "./assets/images/TUAN6953.jpg";
import AlbumImg5 from "./assets/images/TUAN6565.jpg";
import AlbumImg6 from "./assets/images/TUAN6632.jpg";
import AlbumImg7 from "./assets/images/TUAN6736.jpg";
import AlbumImg8 from "./assets/images/TUAN6824.jpg";

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    side: 'bride' as 'bride' | 'groom'
  });

  const [wishModalOpen, setWishModalOpen] = useState(false);

  const handleOpenModal = (side: 'bride' | 'groom') => {
    setModalState({
      isOpen: true,
      side
    });
  };

  const handleCloseModal = () => {
    setModalState({
      ...modalState,
      isOpen: false
    });
  };

  const handleOpenWishModal = () => {
    setWishModalOpen(true);
  };

  const handleCloseWishModal = () => {
    setWishModalOpen(false);
  };

  return (
    <>
      <div className="page-view">
        <WeddingInvitation
          title="Đức Hùng - Trang Mai"
          time="CHỦ NHẬT - 11H00"
          date="30.11.2025"
        />
        <WeddingFamily />

        <WeddingInvitationCard
          title="Thư Mời"
          subtitle="THAM DỰ LỄ CƯỚI CỦA HAI CON CHÚNG TÔI"
          images={[ImgWeddingInvitation1, ImgWeddingInvitation2, ImgWeddingInvitation3]}
        />
        <WeddingParty
          title="TIỆC CƯỚI NHÀ GÁI"
          time="CHỦ NHẬT | 11H00"
          date="30.11.2025"
          lunarDate="(Tức Ngày 15 Tháng 11 Năm Giáp Thìn)"
          location="Hội trường Ruby - Tầng 4, Trung tâm hội nghị Đại Việt Place"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197276!2d106.71127631533417!3d10.777057362124085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb3%3A0x1b3e2c6b6f3f6f0a!2zxJDhuqFpIFZp4buHdCBQbGFjZQ!5e0!3m2!1svi!2s!4v1620147647447!5m2!1svi!2s"
          onConfirm={() => handleOpenModal('bride')}
        />
        <WeddingParty
          title="TIỆC CƯỚI NHÀ TRAI"
          time="CHỦ NHẬT | 11H00"
          date="15.12.2024"
          lunarDate="(Tức Ngày 15 Tháng 11 Năm Giáp Thìn)"
          location="Hội trường Ruby - Tầng 4, Trung tâm hội nghị Đại Việt Place"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197276!2d106.71127631533417!3d10.777057362124085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb3%3A0x1b3e2c6b6f3f6f0a!2zxJDhuqFpIFZp4buHdCBQbGFjZQ!5e0!3m2!1svi!2s!4v1620147647447!5m2!1svi!2s"
          onConfirm={() => handleOpenModal('groom')}
        />
        <WeddingAlbum
          title="Album hình cưới"
          images={[
            { src: AlbumImg1, alt: "Nam tay nhau", className: "large", order: 1 },
            { src: AlbumImg2, alt: "Khieu vu", className: "large", order: 2 },
            { src: AlbumImg7, alt: "Test", className: "large", order: 3 },
            { src: AlbumImg3, alt: "Wedding photo 2", className: "large", order: 4 },
            { src: AlbumImg4, alt: "Cầm ô", className: "large", order: 5 },
            { src: AlbumImg5, alt: "Tua dau", className: "large", order: 6 },
            { src: AlbumImg6, alt: "Kieu vu 2", className: "large", order: 7 },
            { src: AlbumImg8, alt: "Cam tay", className: "large", order: 8 },
          ]}
        />

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
      />
      <div className="floating-button">
        <button onClick={handleOpenWishModal}>
          Gửi lời chúc
        </button>
      </div>
    </>
  );
}

export default App;
