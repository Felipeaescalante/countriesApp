const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app');
const {Country, Activities, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
    Name: 'Spain',
}

describe('Routes', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
    beforeEach(() => Country.sync({ force: false })
      .then(() => Country.findOne({
        where: {
          Name: country.Name
        }
      })));
    describe('GET de prueba', () => {
      it('Debe retornar un 200 si encuentra el pais elejio "Spain"', () =>
        agent.get('/countries?Name=Spain').expect(200)
      );
      it('Debe retornar un 200 si encuentran los datos del ID "ESP"', () =>
        agent.get('/countries/ESP').expect(200)
      );
    });
  });