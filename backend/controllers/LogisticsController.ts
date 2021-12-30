import { LogisticsService } from "../services/LogisticsService";
import { Request, Response } from "express";

export class LogisticsController {
  constructor(private logisticsService: LogisticsService) {}

  getLogisticsList = async (req: Request, res: Response) => {
    const eventID = parseInt(req.params.id);

    const logisticsList = await this.logisticsService.getLogisticsList(eventID);

    res.json({ logisticsList });
  };

  addLogisticsItem = async (req: Request, res: Response) => {
    const logisticsItem = {
      logistics_item: req.body.itemName,
      logistics_remarks: req.body.remarks,
      wedding_event_id: req.body.wedding_event_id,
    };

    await this.logisticsService.addLogisticsItem(logisticsItem);

    res.json({ message: "successful add" });
  };

  updateLogisticsItem = async (req: Request, res: Response) => {
    const logisticsItem = {
      logistics_item: req.body.itemName,
      logistics_remarks: req.body.remarks,
    };
    const itemId = req.body.materialItemId;

    await this.logisticsService.updateLogisticsItem(logisticsItem, itemId);

    res.json({ message: "successful update" });
  };

  deleteLogisticsItem = async (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);

    await this.logisticsService.deleteLogisticsItem(itemId);

    res.json({ message: "successful delete" });
  };
}
