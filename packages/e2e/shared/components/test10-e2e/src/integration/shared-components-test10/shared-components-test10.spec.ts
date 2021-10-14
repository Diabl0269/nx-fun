describe('shared-components-test10: SharedComponentsTest10 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest10--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest10!');
    });
});
