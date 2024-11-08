"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Books.hasMany(models.Returns, {
        foreignKey: "book_id",
      });
    }
  }
  Books.init(
    {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
