import { UserService } from "../services/UserService";
import { Request, Response } from "express";
import jwtSimple from "jwt-simple";
import jwt from "../utils/jwt";
import { checkPassword, hashPassword } from "../utils/hash";
export class UserController {
  constructor(private userService: UserService) { }

  getUser = async (req: Request, res: Response) => {
    let userData
    if (req.user) {
      userData = {
        id: req.user.id,
        nickname: req.user.nickname,
        email: req.user.email,
        phone: req.user.phone,
      }
    }
    res.json({ userData, message: "restore login success" })
  }

  login = async (req: Request, res: Response) => {
<<<<<<< HEAD
    console.log(req.body)
    if (!req.body.email || !req.body.password) {
      res.status(401).json({ msg: "電郵或密碼不能為空" });
      return;
    }
=======
    try {
      console.log(req.body);
      if (!req.body.email || !req.body.password) {
        res.status(401).json({ msg: "Email/Password are null" });
        return;
      }
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16

    const { email, password } = req.body;
    const user = await this.userService.getUserByEmail(email);

    if (!user || !(await checkPassword(password, user.password))) {
      res.status(401).json({ msg: "電郵或密碼錯誤" });
      return;
    }

    const payload = { id: user.id };
    const token = jwtSimple.encode(payload, jwt.jwtSecret);

    console.log(token);

    const userData = {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
      phone: user.phone,
    }

    res.json({ token, userData });
  };

  signup = async (req: Request, res: Response) => {
<<<<<<< HEAD
    console.log(req.body);
    console.log("hi")
=======
    try {
      console.log(req.body);
      console.log("hi");
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16

    if (!req.body) {
      res.status(401).json({ msg: "Request are null" });
      return;
    }

    const { email, password, nickname, phone, gender, districtId } = req.body;

<<<<<<< HEAD
    const user = {
      email,
      password: await hashPassword(password),
      nickname,
      phone,
      gender,
      district_id: districtId,
    }

    if (password.length < 8) {
      res.status(400).json({ message: "密碼必須為八位字符" });
      return;
    }
=======
      const user = {
        email,
        password: await hashPassword(password),
        nickname,
        phone,
        gender,
        district_id: districtId,
      };

      console.log(user);
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16

    const existEmail = await this.userService.getUserByEmail(email)

<<<<<<< HEAD
    if (existEmail) {
      res.status(400).json({ message: "此電郵已被使用" });
      return;
    }
=======
      const existUser = await this.userService.getUserByEmail(email);
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16

    const existPhone = await this.userService.getUserByPhone(phone)

    if (existPhone) {
      res.status(400).json({ message: "此電話號碼已被使用" });
      return;
    }

    const [newUserId] = await this.userService.insertNewUser(user);
    const payload = { id: newUserId };

<<<<<<< HEAD
    const token = jwtSimple.encode(payload, jwt.jwtSecret);

    const userData = {
      id: newUserId,
      nickname: user.nickname,
      email: user.email,
      phone: user.phone,
    }

    res.json({ token, userData });
  }
}
=======
      res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: e.toString() });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    // const userId = req.user?.id;
    const userInfo = await this.userService.getUserById(1);

    res.json({ userInfo });
  };
}
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
