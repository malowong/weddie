import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import { logger } from "../utils/logger";

export class UserController {
  private readonly tag = "UserController";
  constructor(private userService: UserService) {}

  login = async (req: Request, res: Response) => {
    try {
    } catch (err) {
      logger.error(`[${this.tag}] ${err.message}`);
    }
  };
}
