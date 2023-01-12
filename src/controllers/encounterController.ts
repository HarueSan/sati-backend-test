import { Request, Response } from "express";
import encounterService from "../services/encounterService";

const encounterController = {
  getAll: async (_: Request, res: Response) => {
    try {
      const result = await encounterService.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const encounterId = req.params.encounterId;
      const result = await encounterService.get(encounterId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const payload = req.body;
      const result = await encounterService.create(payload);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const encounterId = req.params.encounterId;
      const payload = req.body;
      const result = await encounterService.update(encounterId, payload);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const encounterId = req.params.encounterId;
      const result = await encounterService.delete(encounterId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default encounterController;
