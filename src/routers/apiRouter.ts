import { Router } from "express";
import patientController from "../controllers/patientController";
import encounterController from "../controllers/encounterController";

const apiRouter = Router();

apiRouter.get("/patients", patientController.getAll);
apiRouter.get("/patients/:patientId", patientController.get);
apiRouter.post("/patients", patientController.create);
apiRouter.put("/patients/:patientId", patientController.update);
apiRouter.delete("/patients/:patientId", patientController.delete);

apiRouter.get("/encounter", encounterController.getAll);
apiRouter.get("/encounter/:encounterId", encounterController.get);
apiRouter.post("/encounter", encounterController.create);
apiRouter.put("/encounter/:encounterId", encounterController.update);
apiRouter.delete("/encounter/:encounterId", encounterController.delete);

export default apiRouter;
