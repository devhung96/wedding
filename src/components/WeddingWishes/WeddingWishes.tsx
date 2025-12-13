import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Wish } from '../../types/database';
import './WeddingWishes.scss';

const WeddingWishes: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWishes();
    
    // Subscribe to real-time updates
    const channel = supabase
      .channel('wishes-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'wishes'
        },
        () => {
          fetchWishes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchWishes = async () => {
    try {
      setIsLoading(true);
      const { data, error: supabaseError } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (supabaseError) {
        throw supabaseError;
      }

      setWishes(data || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Không thể tải lời chúc');
      console.error('Error fetching wishes:', err);
    } finally {
      setIsLoading(false);
    }
  };


  if (isLoading) {
    return (
      <div className="wedding-wishes">
        <div className="wishes-header">
          <h2 className="title">Lời Chúc</h2>
          <div className="line-right"></div>
        </div>
        <div className="loading">Đang tải lời chúc...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="wedding-wishes">
        <div className="wishes-header">
          <h2 className="title">Lời Chúc</h2>
          <div className="line-right"></div>
        </div>
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="wedding-wishes">
      <div className="wishes-header">
        <h2 className="title">Lời Chúc</h2>
        <div className="line-right"></div>
      </div>

      {wishes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💝</div>
          <p>Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc đến cô dâu chú rể!</p>
        </div>
      ) : (
        <div className="wishes-list">
          {wishes.map((wish) => (
            <div key={wish.id} className="wish-card">
              <div className="wish-header">
                <div className="wish-name">{wish.name}</div>
              </div>
              <div className="wish-message">{wish.message}</div>
              <div className="wish-decoration"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeddingWishes;

