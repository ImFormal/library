describe('Tests editor', () => {
    //Arrange
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/editor'); 
    });

    it('affiche la liste des éditeurs (vide)', () => {
        cy.visit('http://127.0.0.1:8000/editor');
        cy.contains('no records found').should('exist');  
    });
  
    it('ajoute une editor valide', () => {
      //Act
        cy.contains('Create new').click();
        cy.get('#editor_name').clear(); 
        cy.get('#editor_name').type('Hachette'); 
        cy.get('.btn').click();
  
      //Assert
        cy.get('td').should('be.visible').contains('Hachette');
    });
  
    it('ajoute une editor non-valide (existe déjà)', () => {
        // Act
        cy.contains('Create new').click();
        cy.get('#editor_name').clear(); 
        cy.get('#editor_name').type('Hachette'); 
        cy.get('.btn').click(); 
    
        // Assert
        cy.get("title").should("contain", "Duplicate entry");
      });  

    it('ajoute une editor non-valide (champs vides)', () => {
      //Act
        cy.contains('Create new').click();
        cy.get('#editor_name').clear(); 
        cy.get('.btn').click();
  
      //Assert
      cy.get('li').should('be.visible').contains('This value should not be blank.');
    });  

    it('affiche la liste des éditeurs', () => {
        cy.visit('http://127.0.0.1:8000/editor');
        cy.get('td').should('have.length.greaterThan', 1);
    });
  });