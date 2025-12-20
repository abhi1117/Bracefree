export interface Customer {
  id: string;
  name: string;
  email: string;
  city: string;
  joined: string;
  status: string;
}

export interface Provider {
  id: string;
  name: string;
  service: string;
  city: string;
  rating: number;
  status: string;
}
