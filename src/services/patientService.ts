import { patient } from "@prisma/client";
import db from "../db";

const patientService = {
  getAll: async () => {
    try {
      const result = await db.patient.findMany();
      return result;
    } catch (error) {
      throw error;
    }
  },
  get: async (id: string) => {
    try {
      const result = await db.patient.findFirst({
        where: {
          patientId: id,
        },
        include: {
          encounter: true,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  create: async (payload: patient) => {
    try {
      const patient = await db.patient.create({
        data: payload,
      });
      return patient;
    } catch (error) {
      throw error;
    }
  },
  update: async (id: string, payload: patient) => {
    try {
      const patient = await db.patient.update({
        where: {
          patientId: id,
        },
        data: {
          ...payload,
        },
      });
      return patient;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id: string) => {
    try {
      const patient = await db.patient.delete({
        where: { patientId: id },
      });
      return patient;
    } catch (error) {
      throw error;
    }
  },
};

export default patientService;
