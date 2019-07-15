var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth');
var controller = require('../controllers/companyCntroller');

router.get("/filter", auth.verifyToken, controller.filter);
router.get("/getall", auth.verifyToken, controller.getAll);
router.get("/partners", auth.verifyToken, controller.getpartners);
router.get("/getbyid", auth.verifyToken, controller.getById);

router.post("/add", auth.verifyToken, controller.add);

router.delete("/remove", auth.verifyToken, controller.remove);

router.put("/update", auth.verifyToken, controller.update);

router.put("/setstatus", auth.verifyToken, controller.setstatus);
module.exports = router;