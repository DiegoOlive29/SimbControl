import express from "express";
import { register, login } from "../controllers/usersController";
import {
  getLoadUnloadController,
  deleteLoadUnloadController,
  postLoadUnloadController,
  updateLoadUnloadController,
} from "../controllers/loadUnLoadController";

import {
  postAccessController,
  getAllAccessController,
  getAccessByIdController,
  deleteAccessController,
} from "../controllers/accessController";

import {
  postDeliveryController,
  getAllDeliveriesController,
  getDeliveryByIdController,
  deleteDeliveryController,
} from "../controllers/deliveryController";

import {
  postAccessRecordController,
  getAllAccessRecordsController,
  getAccessRecordByIdController,
  deleteAccessRecordController,
} from "../controllers/accessRecordController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/load-unload", getLoadUnloadController);
router.post("/load-unload", postLoadUnloadController);
router.patch("/load-unload/:id", updateLoadUnloadController);
router.delete("/load-unload/:id", deleteLoadUnloadController);

router.get("/access", getAllAccessController);
router.get("/access/:id", getAccessByIdController);
router.post("/access", postAccessController);
router.delete("/access/:id", deleteAccessController);

router.get("/delivery", getAllDeliveriesController);
router.get("/delivery/:id", getDeliveryByIdController);
router.post("/delivery", postDeliveryController);
router.delete("/delivery/:id", deleteDeliveryController);

router.get("/access-record", getAllAccessRecordsController);
router.get("/access-record/:id", getAccessRecordByIdController);
router.post("/access-record", postAccessRecordController);
router.delete("/access-record/:id", deleteAccessRecordController);

export default router;
