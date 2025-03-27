describe('Modification de catégorie', () => {
    //Arrange
    beforeEach(() => {
        cy.visit('https://127.0.0.1:8000/category'); 
    });

    it('devrait changer le nom de la catégorie avec succès', () => {
      // Act
      cy.contains('edit').click();
      cy.get('#category_label').clear(); 
      cy.get('#category_label').type('Bricolage'); 
      cy.contains('Update').click();
  
      // Assert
      cy.contains('Bricolage').should('exist');
    });

    it('devrait afficher une erreur que le nom n\'a pas été changé', () => {
    
        // Act
        cy.contains('edit').click();
        cy.get('#category_label').clear(); 
        cy.contains('Update').click();
    
        // Assert
        cy.visit('https://127.0.0.1:8000/category'); 
        cy.contains('Cuisine').should('not.exist');
      });

    it('ne devrait pas permettre de créer une catégorie avec un nom déjà existant', () => {
        // Act
        cy.contains('edit').click();  
        cy.get('#category_label').clear(); 
        cy.get('#category_label').type('Jardinage'); 
        cy.contains('Update').click(); 
    
        // Assert
        cy.get("title").should("contain", "Duplicate entry");
    });
  });