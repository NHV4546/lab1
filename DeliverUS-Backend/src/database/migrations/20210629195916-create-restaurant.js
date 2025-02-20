module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      shippingCosts: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      averageSeviceMinutes: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      heroImage: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUMERATE('online', 'offline', 'closed', 'temporarly closed'),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
