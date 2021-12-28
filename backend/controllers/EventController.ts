import { Request, Response } from "express";
import { EventService } from "../services/EventService";

export class EventController {
  constructor(private eventService: EventService) {}

  getEventListByUserId = async (req: Request, res: Response) => {
    const userId = req.user!.id;

    const eventList = await this.eventService.getEventListByUserId(userId);

    res.json({ eventList });
  };
}
