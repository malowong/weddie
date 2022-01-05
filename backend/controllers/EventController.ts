import { Request, Response } from "express";
import { EventService } from "../services/EventService";

export class EventController {
  constructor(private eventService: EventService) {}

  createEvent = async (req: Request, res: Response) => {
    console.log(req.body);

    if (!req.body) {
      res.status(401).json({ msg: "Request are null" });
      return;
    }

    const { eventName, role, bigday, budget, pax, user_id } = req.body;

    // where shd i put the budget?

    const event = {
      wedding_name: eventName,
      wedding_date: bigday,
      budget,
      pax,
      user_id: user_id,
      role_id: parseInt(role),
    };

    await this.eventService.createEvent(event);

    const eventData = await this.eventService.getEventById(user_id);

    res.json(eventData);
  };

  getEventById = async (req: Request, res: Response) => {
    console.log(req.body);

    const userId = req.body.userId;

    if (!req.body) {
      res.status(401).json({ msg: "Request are null" });
      return;
    }

    const eventData = await this.eventService.getEventById(userId);
    // const eventData = {
    //     id: event.wedding_event_id,

    // }

    if (!eventData) {
      res.status(401).json({ msg: "Request are null" });
      return;
    }

    res.json(eventData);
  };

  getEventListByUserId = async (req: Request, res: Response) => {
    console.log(req.params.id);

    const userId = parseInt(req.params.id);

    if (!req.params.id) {
      res.status(401).json({ msg: "Request are null" });
      return;
    }

    const eventList = await this.eventService.getEventListByUserId(userId);

    res.json({ eventList });
  };
}
