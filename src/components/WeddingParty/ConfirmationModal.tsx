import React, { useState } from 'react';
import Modal from '../common/Modal/Modal';
import './ConfirmationModal.scss';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  side: 'bride' | 'groom';
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, side }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    attendance: 'yes',
    guestCount: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý dữ liệu form
    console.log(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Xác nhận tham dự ${side === 'bride' ? 'Nhà Gái' : 'Nhà Trai'}`}
      description="Bạn xác nhận tham dự để chúng tôi có thể tiếp đón cách tốt nhất"
      showCloseButton={true}
    >
      <form onSubmit={handleSubmit} className="confirmation-form">
        <div className="form-group">
          <label htmlFor="name" className="required">Tên của bạn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nhập tên của bạn"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group flex-1">
            <label htmlFor="attendance">Xác nhận tham dự</label>
            <select
              id="attendance"
              name="attendance"
              value={formData.attendance}
              onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              required
            >
              <option value="yes">Có, tôi sẽ tham dự</option>
              <option value="no">Tôi bận, rất tiếc không thể tham dự</option>
            </select>
          </div>
          {formData.attendance === 'yes' && (
            <div className="form-group flex-1">
              <label htmlFor="guestCount">Bạn đi cùng ai?</label>
              <select
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                required
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} người
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Gửi lời chúc đến Dâu Rể</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Nhập lời chúc của bạn"
          />
        </div>

        <button type="submit" className="submit-button">
          Gửi xác nhận
        </button>
      </form>
    </Modal>
  );
};

export default ConfirmationModal;