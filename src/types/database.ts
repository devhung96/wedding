export interface Confirmation {
  id?: string;
  name: string;
  message?: string;
  attendance: 'yes' | 'no';
  guest_count: number;
  side: 'bride' | 'groom';
  created_at?: string;
}

export interface Wish {
  id?: string;
  name: string;
  message: string;
  created_at?: string;
}

