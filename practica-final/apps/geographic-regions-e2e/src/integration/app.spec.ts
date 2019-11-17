import { getGreeting, obtainRegionCountry } from '../support/app.po';

describe('WHEN: geographic-regions', () => {
  beforeEach(() => cy.visit('/regions/:id'));
  context('WHEN: user visits Region Page', () => {
    it('THEN: should display regions', () => {
      obtainRegionCountry().contains('regions-countrys', 'Details Country');
    });
    it('should display welcome message', () => {
      getGreeting().contains('Welcome to geographic-regions!');
    });
  });
});
