import { LogisticsService } from "../services/LogisticsService";
import { Request, Response } from "express";
import { logger } from "../utils/logger";

export class LogisticsController {
  constructor(private logisticsService: LogisticsService) {}

  getLogisticsList = async (req: Request, res: Response) => {
    const eventID = 1;

    const logisticsList = await this.logisticsService.getLogisticsList(eventID);
    res.json({ logisticsList });
  };
}
