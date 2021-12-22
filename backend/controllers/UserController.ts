import { UserService } from "../services/UserService";
import { Request, Response } from "express";

export class UserController {
  constructor(private userService: UserService) {}

  login = async (req: Request, res: Response) => {};
}
