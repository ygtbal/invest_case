"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Returns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Returns.belongsTo(models.Books, {
        foreignKey: "book_id",
        as: "Book",
      });
    }
  }
  Returns.init(
    {
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Returns",
    }
  );
  return Returns;
};
