

describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(2560, 1440)
    cy.visit('http://localhost:3000')
  })
  
  it('searchTv', () => {
    cy.visit('http://localhost:3000/tv-shows');
    cy.contains('TV Shows ').click();
    cy.get("input[placeholder=\"Search\"]").click().type("breaking bad {enter}");
    assert(cy.get('h1').contains("Breaking Bad"));
    cy.get('.Result_pic__32ZQP').first().click();
    cy.origin('https://www.themoviedb.org', () => {
      cy.url().should('include', 'https://www.themoviedb.org/tv/1396-breaking-bad');
    })
  })

  it('searchMovie', () => {
    cy.visit('http://localhost:3000/tv-shows');
    cy.contains('Movies ').click();
    cy.get("input[placeholder=\"Search\"]").click().type("nonstop {enter}");
    assert(cy.get('h1').contains("Non-Stop"));
    cy.get('.Result_pic__32ZQP').first().click();
    cy.origin('https://www.themoviedb.org', () => {
      cy.url().should('include', 'https://www.themoviedb.org/movie/225574-non-stop');
    })
  })

})