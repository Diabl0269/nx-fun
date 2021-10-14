describe('shared-components-test9: SharedComponentsTest9 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest9--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest9!');
    });
});
