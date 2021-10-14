describe('shared-components-test7: SharedComponentsTest7 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest7--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest7!');
    });
});
