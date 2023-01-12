import { encounter } from "@prisma/client";
import db from "../db";

const encounterService = {
  getAll: async () => {
    try {
      const result = await db.encounter.findMany();
      return result;
    } catch (error) {
      throw error;
    }
  },
  get: async (id: string) => {
    try {
      const result = await db.encounter.findFirst({
        where: {
          encounterId: id,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  create: async (payload: encounter) => {
    try {
      const encounter = await db.encounter.create({
        data: payload,
      });
      return encounter;
    } catch (error) {
      throw error;
    }
  },
  update: async (id: string, payload: encounter) => {
    try {
      const encounter = await db.encounter.update({
        where: {
          encounterId: id,
        },
        data: {
          ...payload,
        },
      });
      return encounter;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id: string) => {
    try {
      const encounter = await db.encounter.delete({
        where: { encounterId: id },
      });
      return encounter;
    } catch (error) {
      throw error;
    }
  },
};

export default encounterService;
