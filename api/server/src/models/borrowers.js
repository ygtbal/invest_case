"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Borrowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Borrowers.init(
    {
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      return: DataTypes.BOOLEAN,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Borrowers",
    }
  );
  return Borrowers;
};
