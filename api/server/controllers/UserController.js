import UserServices from "../services/UserService";
import Util from "../Utils/Utils";

const util = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserServices.getAllUsers();
      util.setSuccess(200, "Users retrieved", allUsers);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async getUser(req, res) {
    try {
      const user = await UserServices.getUser(req.params.id);
      util.setSuccess(200, "User retrieved", user);
      return util.send(res);
    } catch (error) {
      console.log("error", error);
      util.setError(400);
      return util.send(res);
    }
  }
  static async addUser(req, res) {
    try {
      const newUser = req.body;
      const createdUser = await UserServices.addUser(newUser);
      util.setSuccess(201, "User Added!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default UserController;
