import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import jwtSimple from "jwt-simple";
import jwt from "../utils/jwt";
import { checkPassword, hashPassword } from "../utils/hash";
export class UserController {
  constructor(private userService: UserService) {}

  login = async (req: Request, res: Response) => {
    try {
      console.log(req.body)
      if (!req.body.email || !req.body.password) {
        res.status(401).json({ msg: "Email/Password are null" });
        return;
      }

      const { email, password } = req.body;
      const user = await this.userService.getUserByEmail(email);
      console.log("password: ", password);
      console.log("user.password: ", user?.password);
      if (!user || !(await checkPassword(password, user.password))) {
        res.status(401).json({ msg: "Wrong Email/Password" });
        return;
      }

      const payload = { id: user.id };
      const token = jwtSimple.encode(payload, jwt.jwtSecret);

      console.log(token);

      res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: e.toString() });
    }
  };

  signup = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      console.log("hi")

      if (!req.body) {
        res.status(401).json({ msg: "Request are null" });
        return;
      }

      const { email, password, nickname, phone, gender, districtId } = req.body;

      const user = {
        email,
        password: await hashPassword(password),
        nickname,
        phone,
        gender,
        district_id: districtId,
      }

      console.log(user)

      if (password.length < 8) {
        res.status(400).json({ message: "Password must contain at least 8 characters" });
        return;
      }

      const existUser = await this.userService.getUserByEmail(email)

      if (existUser) {
        res.status(400).json({ message: "This email has been used" });
        return;
      }

      const newUserId = await this.userService.insertNewUser(user);
      const payload = { id: newUserId };

      const token = jwtSimple.encode(payload, jwt.jwtSecret);

      res.json({ token });

    } catch (e) {
      console.log(e)
      res.status(500).json({ msg: e.toString() })
    }
  }
}
