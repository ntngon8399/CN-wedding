// Common types used across the application

export interface Table {
  id: number;
  name: string;
  guests: string[];
  capacity: number;
  occupied: number;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export type RouteParams = {
  id?: string;
};
