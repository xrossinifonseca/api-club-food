import User from "../models/user.model.js";

const create = (body) => User.create(body);
const findAllUser = () =>
  User.findAll({ attributes: { exclude: ["password"] } });
const findById = (id) => User.findByPk(id);

export default { create, findAllUser, findById };
