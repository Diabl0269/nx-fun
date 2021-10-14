describe('shared-components-test6: SharedComponentsTest6 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest6--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest6!');
    });
});
