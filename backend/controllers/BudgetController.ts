import { BudgetService } from "../services/BudgetService";
import { Request, Response } from "express";

export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  getExpenditureList = async (req: Request, res: Response) => {
    const expenditureList = await this.budgetService.getExpenditureList(1);

    res.json({ expenditureList });
  };

<<<<<<< HEAD
  // need 7 params for this fnc
  // updateExpenditureList = async (req: Request, res: Response) => {
  //   const updatedExpenditureList = await this.budgetService.updateExpenditureList(
  //     req.body.budgetListId,
  //     req.body.description,
  //     req.body.expenditure,
  //     req.body.paymentDate,
  //     req.body.amendDate,
  //     req.body.weddingEventId,
  //     req.body.recordCreatedAtDate
  //   );

  //   res.json(updatedExpenditureList);
  // };
=======
>>>>>>> fef340dd127977de36ae4ee095577433da02e7f2
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

  // need 7 params for this fnc
  // updateExpenditureList = async (req: Request, res: Response) => {
  //   const updatedExpenditureList = await this.budgetService.updateExpenditureList(
  //     req.body.budgetListId,
  //     req.body.description,
  //     req.body.expenditure,
  //     req.body.paymentDate,
  //     req.body.amendDate,
  //     req.body.weddingEventId,
  //     req.body.recordCreatedAtDate
  //   );

  //   res.json(updatedExpenditureList);
  // };
}
