import { UserController } from "../controllers/UserController";
import { isLoggedIn } from "../utils/guards";
import { BaseRouter } from "./BaseRouter";

export class UserRouter extends BaseRouter<UserController> {
  constructor(controller: UserController) {
    super(controller);
    this.attachRoutes();
  }

  attachRoutes() {
    this.router.post("/signup", this.asyncWrapper(this.controller.signup));
    this.router.post("/login", this.asyncWrapper(this.controller.login));
    this.router.get("/", isLoggedIn, this.asyncWrapper(this.controller.getUserByToken));
    this.router.post("/info", this.asyncWrapper(this.controller.getUserById));
  }

  getRoutes() {
    return this.router;
  }
}
