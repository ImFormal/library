describe('Tests ajout catégorie', () => {
  //Arrange
  beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/category/new'); 
  });

  it('ajoute une catégorie valide', () => {
    //Act
      cy.get('#category_label').clear(); 
      cy.get('#category_label').type('Jardinage'); 
      cy.get('.btn').click();

    //Assert
      cy.get('td').should('be.visible').contains('Jardinage');
  });


  it('ajoute une catégorie non-valide', () => {
    //Act
      cy.get('#category_label').clear(); 
      cy.get('.btn').click();

    //Assert
      cy.url().should('eq', 'http://127.0.0.1:8000/category/new') // Le form n'a pas pu être validé donc on est toujours sur la même page
  });  
});
