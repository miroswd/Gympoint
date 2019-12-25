const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('admins', [
      {
        name: 'Administrador',
        email: 'admin@gympoint.com',
        password: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: () => {},
};
