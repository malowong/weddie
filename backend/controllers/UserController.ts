import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import jwtSimple from "jwt-simple";
import jwt from "../utils/jwt";
import { checkPassword } from "../utils/hash";
export class UserController {
  constructor(private userService: UserService) { }

  login = async (req: Request, res: Response) => {
    try {
      if (!req.body.phone || !req.body.password) {
        res.status(401).json({ msg: "Wrong Username/Password" });
        return;
      }

      const { phone, password } = req.body;
      const user = await this.userService.getUserByPhone(phone);
      if (!user || !(await checkPassword(password, user.password))) {
        res.status(401).json({ msg: "Wrong Username/Password" });
        return;
      }

      const payload = { id: user.id };
      const token = jwtSimple.encode(payload, jwt.jwtSecret);

      res.json({ token });

    } catch (e) {
      console.log(e)
      res.status(500).json({ msg: e.toString() })
    }
  };
}
