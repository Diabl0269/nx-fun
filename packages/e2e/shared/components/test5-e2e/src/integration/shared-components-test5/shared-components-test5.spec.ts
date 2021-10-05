describe('shared-components-test5: SharedComponentsTest5 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest5--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest5!');
    });
});
