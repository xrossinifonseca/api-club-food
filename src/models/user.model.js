import { Sequelize, DataTypes } from "sequelize";
import db from "../database/db.js";
import bcrypt from "bcrypt";
const User = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email invalid.",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      llowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(12, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
    },
  }
);

export default User;
