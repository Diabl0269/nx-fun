describe('shared-components-test3: SharedComponentsTest3 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest3--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest3!');
    });
});
