import { useState } from 'react';
import Modal from '../common/Modal/Modal';
import './WishModal.scss';

interface WishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishModal({ isOpen, onClose }: WishModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Gửi Lời Chúc">
      <form onSubmit={handleSubmit} className="wish-form">
        <div className="form-group">
          <label htmlFor="name">Tên của bạn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên của bạn"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Lời chúc</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nhập lời chúc của bạn"
            required
            rows={4}
          />
        </div>
        <button type="submit" className="submit-button">
          Gửi lời chúc 💝
        </button>
      </form>
    </Modal>
  );
}