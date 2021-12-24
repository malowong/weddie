export interface ICreateEvent {
  eventName: string,
  role: string,
  bigday: Date,
  budget: string,
};

export interface IEventState {
    message: string | null,
  }
