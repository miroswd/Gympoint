// Conexão dos models com o database
import Sequelize from 'sequelize';

// Importando as credenciais
import databaseConfig from '../config/database';

// Importando os models
import Admin from '../app/models/Admin';
import Checkins from '../app/models/Checkins';
import HelpOrder from '../app/models/HelpOrder';
import Plan from '../app/models/Plan';
import Register from '../app/models/Register';
import Students from '../app/models/Students';

const models = [Admin, Checkins, HelpOrder, Plan, Register, Students];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
