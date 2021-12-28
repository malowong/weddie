import { GuestService } from "../services/GuestService";
import { Request, Response } from "express";

export class GuestController {
  constructor(private guestService: GuestService) {}

  getGuestList = async (req: Request, res: Response) => {
    const guestList = await this.guestService.getGuestList(1);

    res.json({ guestList });
  };
}
