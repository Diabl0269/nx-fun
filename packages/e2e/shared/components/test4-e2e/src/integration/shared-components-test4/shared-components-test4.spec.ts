describe('shared-components-test4: SharedComponentsTest4 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest4--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest4!');
    });
});
