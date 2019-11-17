import { getGreeting } from '../support/app.po';

describe('geographic-regions', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to geographic-regions!');
  });
});
