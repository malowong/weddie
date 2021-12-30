import { ItinService } from "../services/ItinService";
import { Request, Response } from "express";

export class ItinController {
  constructor(private itinService: ItinService) { }

  getItinList = async (req: Request, res: Response) => {

    const userId = req.user;

    const eventId = parseInt(req.params.id);

    console.log(userId)

    if (!userId) {
      res.status(400).json({ message: "User not found" })
    }

    const itinList = await this.itinService.getItinList(eventId);

    res.json({ itinList });
  };
}
