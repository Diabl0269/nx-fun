describe('shared-components-test8: SharedComponentsTest8 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest8--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest8!');
    });
});
