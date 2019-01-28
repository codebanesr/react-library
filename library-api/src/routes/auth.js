import express from "express";
import User from "../models/User";

const router = express.Router();

router.post("/", (req, res) => {
  const { credentials } = req.body;
  User.findOne({ email: credentials.email }).then(user => {
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJSON() });
    } else {
      res.status(400).json({ errors: { global: "Invalid credentials" } });
    }
  });
});




router.post("/confirmation", (req, res) => {
  const token = req.body.token;
  User.findOneAndUpdate(
    { confirmationToken: token },
    { confirmationToken:"", confirmed: true },
    { new: true }
  ). then(
    user=> user? res.json({ user: user.toAuthJSON() }): res.status(400).json({})
  );
})


router.post('/reset_password_token', (req, res)=>{
  const { password, token } = req.body.data;
  // token here is the reset token not the jwt token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err){
      res.status(401).json({})
    }else{
      res.json({})
    }
  })
})
export default router;
