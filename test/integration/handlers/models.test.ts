import { it } from '@jest/globals';
import Models from '../../../src/handlers/models';
import { integrationClient } from '../../utils';

describe('Models test', () => {
  describe('Integration test for `list` method', () => {
    it('should validate response', async () => {
      const models = new Models(integrationClient());
      await models.list();
    });
  });

  describe('Integration test for `retrieve` method', () => {
    it('should validate response', async () => {
      const models = new Models(integrationClient());
      await models.retrieve('text-davinci-002');
    });
  });

  describe('Integration test for `delete` method', () => {
    it('should validate response', async () => {
      const models = new Models(integrationClient());
      await models.delete('text-davinci-002');
    });
  });
});
