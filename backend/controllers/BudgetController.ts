import { BudgetService } from "../services/BudgetService";
import { Request, Response } from "express";

export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  getExpenditureList = async (req: Request, res: Response) => {
    const expenditureList = await this.budgetService.getExpenditureList(1);

    res.json({ expenditureList });
  };

  addBudgetItem = async (req: Request, res: Response) => {
    const budgetItem = {
      wedding_event_id: req.body.wedding_event_id,
      budget_cat_id: parseInt(req.body.categoryId),
      expenditure: req.body.amount,
      description: req.body.description,
    };

    await this.budgetService.addBudgetItem(budgetItem);

    res.json({ message: "success add budget item" });
  };

  updateExpenditureList = async (req: Request, res: Response) => {
    const updatedExpenditureList = await this.budgetService.updateExpenditureList(
      req.body.budgetListId,
      req.body.description,
      req.body.expenditure,
      req.body.paymentDate,
      req.body.amendDate
    );

    res.json(updatedExpenditureList);
  };
}
