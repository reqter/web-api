var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth');
var controller = require('../controllers/contentTypeController');

router.get("/getall", auth.verifyToken, controller.getAll);
router.get("/getbyid", auth.verifyToken, controller.findById);

router.post("/add", auth.verifyToken, controller.add);

router.delete("/remove", auth.verifyToken, controller.remove);

router.put("/update", auth.verifyToken, controller.update);

module.exports = router;