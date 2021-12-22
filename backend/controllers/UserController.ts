import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import { logger } from "../utils/logger";

export class UserController {
  constructor(private userService: UserService) {}

  login = async (req: Request, res: Response) => {};
}
