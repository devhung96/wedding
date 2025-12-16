import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Wish, Confirmation } from '../../types/database';
import './WeddingWishes.scss';

interface DisplayWish {
  id: string;
  name: string;
  message: string;
  created_at: string;
  source: 'wish' | 'confirmation';
}

const WeddingWishes: React.FC = () => {
  const [wishes, setWishes] = useState<DisplayWish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllWishes();
    
    // Subscribe to real-time updates for wishes
    const wishesChannel = supabase
      .channel('wishes-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'wishes'
        },
        () => {
          fetchAllWishes();
        }
      )
      .subscribe();

    // Subscribe to real-time updates for confirmations
    const confirmationsChannel = supabase
      .channel('confirmations-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'confirmations'
        },
        () => {
          fetchAllWishes();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(wishesChannel);
      supabase.removeChannel(confirmationsChannel);
    };
  }, []);

  const fetchAllWishes = async () => {
    try {
      setIsLoading(true);
      
      // Fetch wishes
      const { data: wishesData, error: wishesError } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (wishesError) {
        throw wishesError;
      }

      // Fetch confirmations with messages
      const { data: confirmationsData, error: confirmationsError } = await supabase
        .from('confirmations')
        .select('*')
        .not('message', 'is', null)
        .order('created_at', { ascending: false })
        .limit(50);

      if (confirmationsError) {
        throw confirmationsError;
      }

      // Combine and transform data
      const allWishes: DisplayWish[] = [
        ...(wishesData || []).map((wish: Wish) => ({
          id: wish.id || '',
          name: wish.name,
          message: wish.message,
          created_at: wish.created_at || '',
          source: 'wish' as const
        })),
        ...(confirmationsData || []).map((confirmation: Confirmation) => ({
          id: confirmation.id || '',
          name: confirmation.name,
          message: confirmation.message || '',
          created_at: confirmation.created_at || '',
          source: 'confirmation' as const
        }))
      ];

      // Sort by created_at descending
      allWishes.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return dateB - dateA;
      });

      setWishes(allWishes);
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

