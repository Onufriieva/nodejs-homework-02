const express = require('express');

const { validation, authMiddleware, upload } = require('../../middlewares');
const {authorization: authControllers} = require('../../controllers');
const {users: usersControllers} = require('../../controllers');
const { registerSchema, loginSchema, verifySchema } = require('../../schemas/authorization');

const router = express.Router();

router.post("/singup", validation(registerSchema), authControllers.singup)
router.post("/login", validation(loginSchema), authControllers.login)
router.get("/current",authMiddleware, usersControllers.getCurrent)
router.get("/logout",authMiddleware, authControllers.logout)
router.patch("/avatars", authMiddleware, upload.single("avatars"), authControllers.updateAvatar)
router.get('/verify/:verificationToken', authControllers.verifyEmail);
router.post('/verify', validation(verifySchema), authControllers.resendVerifyEmail);

module.exports = router;