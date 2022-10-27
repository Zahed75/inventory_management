const express = require('express')
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const UserController = require("../controllers/Users/UsersControllers")
const router = express.Router();


//UserProfile

router.post("/Registration", UserController.Registration);
router.post("/Login", UserController.Login);
router.post("/ProfileUpdate", AuthVerifyMiddleware, UserController.ProfileUpdate);
router.get("/ProfileDetails", AuthVerifyMiddleware, UserController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email", UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass", UserController.RecoverResetPass);


module.exports = router;