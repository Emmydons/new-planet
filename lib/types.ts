export interface Room {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  features: string[];
}

export interface Amenity {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface EventSpace {
  name: string;
  capacity: string;
  description: string;
}

export interface BookingData {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guests: number;
  roomType: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}
