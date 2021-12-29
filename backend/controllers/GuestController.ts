import { GuestService } from "../services/GuestService";
import { Request, Response } from "express";

export class GuestController {
  constructor(private guestService: GuestService) {}

  getGuestList = async (req: Request, res: Response) => {
    const guestList = await this.guestService.getGuestList(1);

    res.json({ guestList });
  };

  addGuest = async (req: Request, res: Response) => {
    const guestData = req.body;

    await this.guestService.addGuest(guestData);

    res.json({ message: "add success" });
  };
}
