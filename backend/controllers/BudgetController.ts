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

  updateBudgetItem = async (req: Request, res: Response) => {
    const budgetItemData = {
      wedding_event_id: req.body.wedding_event_id,
      budget_cat_id: req.body.categoryId,
      expenditure: req.body.expenditure,
      description: req.body.description,
    };
    const itemId = req.body.id;

    await this.budgetService.updateBudgetItem(budgetItemData, itemId);

    res.json({ message: "successful update budget item" });
  };

  deleteTodoItem = async (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);

    await this.budgetService.deleteBudgetItem(itemId);

    res.json({ message: "successful delete budget item" });
  };

  // categoryId if might not be useful
  updateExpenditureList = async (req: Request, res: Response) => {
    await this.budgetService.updateExpenditureList(
      req.body.budgetListId,
      req.body.description,
      req.body.expenditure,
      req.body.amendDate
    );
    res.status(200).json({ msg: "successfully updated" });
  };

  deleteExpenditureList = async (req: Request, res: Response) => {
    await this.budgetService.deleteExpenditureList(req.body.budgetListId, req.body.amendDate);
    res.status(200).json({ msg: "successfully deleted" });
  };

  addExpenditureList = async (req: Request, res: Response) => {
    const budgetItemData = {
      wedding_event_id: req.body.wedding_event_id,
      description: req.body.description,
      expenditure: req.body.expenditure,
      budget_cat_id: req.body.budget_cat_id,
    };
    // console.log(req.body);
    await this.budgetService.addExpenditureList(budgetItemData, req.body.amendDate);
    res.status(200).json({ msg: "successfully added" });
  };
}
