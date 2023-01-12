import { Request, Response } from "express";
import patientService from "../services/patientService";

const patientController = {
  getAll: async (_: Request, res: Response) => {
    try {
      const result = await patientService.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const patientId = req.params.patientId;
      const result = await patientService.get(patientId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const payload = req.body;
      const result = await patientService.create(payload);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const patientId = req.params.patientId;
      const payload = req.body;
      const result = await patientService.update(patientId, payload);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const patientId = req.params.patientId;
      const result = await patientService.delete(patientId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default patientController;
