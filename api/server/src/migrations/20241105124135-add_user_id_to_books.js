module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "Books",
          "user_id",
          {
            type: Sequelize.INTEGER,
            references: {
              model: "Users",
              key: "id",
            },
            allowNull: true,
            defaultValue: null,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("Books", "user_id", {
          transaction: t,
        }),
      ]);
    });
  },
};
