export interface User {
  id: number;
  nickname: string;
  email: string;
  phone: string;
  password: string;
}

export interface IEvent {
  wedding_name: string;
  wedding_date: string;
  budget: string;
  pax: string;
  role_id: number;
  user_id: number;
}

export interface SignupUser {
  email: string;
  password: string;
  nickname: string;
  phone: string;
  gender: "M" | "F";
  district_id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: { id: number; nickname: string; email: string; phone: string };
    }
  }
}

export enum EventType {
  Delete = "DELETE",
  Add = "ADD",
}

export interface EventStore {
  data: Object;
  eventType: EventType;
  amendDate: Date;
}

export interface GuestList {
  wedding_event_id: number;
  name: string;
  phone: string;
  relationship: string;
}

export interface LogisticsItem {
  wedding_event_id?: number;
  logistics_item: string;
  logistics_remarks: string;
  is_ready?: boolean;
}

export interface TodoItem {
  wedding_event_id?: number;
  to_do_date: Date;
  to_do_item: string;
  to_do_remarks?: string;
  is_finished?: boolean;
}
