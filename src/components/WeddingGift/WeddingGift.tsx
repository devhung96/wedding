import { useState } from 'react';
import GiftModal from './GiftModal';
import './WeddingGift.scss';

export default function WeddingGift() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wedding-gift">
      <div className="gift-content">
        <p>Cảm ơn tất cả các tình cảm mà mọi người đã dành cho Hùng & Trang</p>
        <div className="gift-button-wrapper" onClick={handleOpenModal}>
          <div className="gift-button-content">
            <button>
              MỪNG CƯỚI
            </button>
          </div>
        </div>
      </div>
      <GiftModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}