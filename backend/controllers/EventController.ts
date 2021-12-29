import { Request, Response } from "express";
import { EventService } from "../services/EventService";

export class EventController {
    constructor(private eventService: EventService) { }

    createEvent = async (req: Request, res: Response) => {
        console.log(req.body)

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
        }

        const eventId = await this.eventService.createEvent(event);

        res.json({ eventId });

    };

    getEventById = async (req: Request, res: Response) => {
        console.log(req.body)

        const userId = req.body.userId

        if (!req.body) {
            res.status(401).json({ msg: "Request are null" });
            return;
        }

        const eventData = await this.eventService.getEvent(userId)

        res.json( eventData );
    };
}
