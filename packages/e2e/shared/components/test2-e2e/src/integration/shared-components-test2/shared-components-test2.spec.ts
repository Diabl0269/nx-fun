describe('shared-components-test2: SharedComponentsTest2 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedcomponentstest2--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedComponentsTest2!');
    });
});
