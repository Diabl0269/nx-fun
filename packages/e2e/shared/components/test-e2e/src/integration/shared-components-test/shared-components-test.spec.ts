describe('shared-components-test: SharedComponentsTest component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest!');
    });
});
