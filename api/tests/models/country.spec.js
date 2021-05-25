  
const { Country, Activities, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Models', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
    describe('Validaciones', () => {
      beforeEach(() => Activities.sync({ force: false }));
      describe('Name', () => {
        it('Debes crear una nueva actividad llamada Prueba', () => {
            Activities.create({ Name: 'Prueba' });
        });
        it('La actividad Prueba debe estar creada', () => {
            Activities.findOne({
            where: { Name: 'Prueba' }
          })
        });
      });
    });
  });