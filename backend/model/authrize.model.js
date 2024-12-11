import mongoose from "mongoose";

const userAuth = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,

  },
  price: {
    type: Number,
    required: true,
  },
  categeory: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  }
});
const UserAuth = mongoose.model("UserAuth", userAuth);
export default UserAuth;