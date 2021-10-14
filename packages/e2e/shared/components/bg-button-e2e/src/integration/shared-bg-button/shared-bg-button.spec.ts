describe('shared-bg-button: BgButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bgbutton--primary&args=color;'));

  it('should render the component', () => {
    cy.screenshot();
  });
});
