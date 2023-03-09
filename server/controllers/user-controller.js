import bcrypt from "bcryptjs";
import User from '../models/User.js';

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" })
  }
  return res.status(200).json({ users })
}
//var salt = bcrypt.genSaltSync(10);
//const secret = 'dkmefoi3rimqdoqdm3ij3evghkikhhdfgklhsh';
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds)



export const signup = async (req, res, next) => {

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    blog: [],
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user })
}


export const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "Could Not Find User!" });
  }

  const validatePassword = bcrypt.compareSync(password, existingUser.password);

  if (!validatePassword) {
    return res.status(400).json({ message: "Incorrect Password" })
  }
  return res.status(200).json({ user: existingUser, message: "You are now logged in" })
}

