import { useState } from 'react';
import Modal from '../common/Modal/Modal';
import { supabase } from '../../lib/supabase';
import type { Wish } from '../../types/database';
import './WishModal.scss';

interface WishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function WishModal({ isOpen, onClose, onSuccess }: WishModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const wishData: Omit<Wish, 'id' | 'created_at'> = {
        name: formData.name,
        message: formData.message,
      };

      const { error: supabaseError } = await supabase
        .from('wishes')
        .insert([wishData]);

      if (supabaseError) {
        throw supabaseError;
      }

      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        message: ''
      });
      
      // Trigger refresh callback immediately
      if (onSuccess) {
        onSuccess();
      }
      
      // Close modal after 1.5 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại.');
      console.error('Error saving wish:', err);
    } finally {
      setIsLoading(false);
    }
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

        {error && (
          <div className="error-message" style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        {success && (
          <div className="success-message" style={{ color: 'green', marginBottom: '1rem', fontSize: '0.9rem' }}>
            ✓ Đã gửi lời chúc thành công!
          </div>
        )}

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Đang gửi...' : 'Gửi lời chúc 💝'}
        </button>
      </form>
    </Modal>
  );
}