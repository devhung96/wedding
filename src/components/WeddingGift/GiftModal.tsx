import Modal from '../common/Modal/Modal';
import './GiftModal.scss';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GiftModal({ isOpen, onClose }: GiftModalProps) {
  const handleCopySTK = (stk: string) => {
    navigator.clipboard.writeText(stk);
    // TODO: Add toast notification
    console.log('Đã copy STK:', stk);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Hộp mừng cưới">
      <div className="gift-modal">
        <p className="gift-message">
          Vợ chồng xin cảm ơn tất cả tình cảm của mọi người ♥
        </p>
        
        <div className="gift-sections">
          <div className="gift-section">
            <h3>MỪNG CƯỚI ĐẾN CHÚ RỂ</h3>
            <div className="qr-container">
              <img src="/qr-code-1.png" alt="QR Code Chú Rể" className="qr-image" />
              <div className="bank-info">
                <p>TRAN DUC HUNG</p>
                <p>STK: 123</p>
                <p>TECHCOMBANK</p>
              </div>
            </div>
          </div>

          <div className="gift-section">
            <h3>MỪNG CƯỚI ĐẾN CÔ DÂU</h3>
            <div className="qr-container">
              <img src="/qr-code-2.png" alt="QR Code Cô Dâu" className="qr-image" />
              <div className="bank-info">
                <p>MAI THI HUYEN TRANG</p>
                <p>STK: 123123123</p>
                <p>TECHCOMBANK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}