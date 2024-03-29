import { ingredientTest } from '../../src/utils/cypress-constants';
import { burgerConstructorTest } from '../../src/utils/cypress-constants';
import { apiConfig } from '../../src/utils/burger.config';


describe('resourse is available', () => {
  beforeEach(() => {
    cy.viewport(1920, 1024)
  });
  it('switching to a resource is available', () => {
    cy.visit('/');
  });
  it('opening the block constructor', () => {
    cy.contains('Булки');
  });
  it('opening the block modal_window', () => {
    cy.visit('/');
    cy.get(ingredientTest).first().click()
    cy.contains('Детали ингредиента')
  });

  it('close modal_window', () => {
    cy.get('[class^=modal_closeIcon]').click();
    cy.visit('/');
  });
  it('sucsess dragndrop element', () => {
    cy.get(ingredientTest).first().drag(burgerConstructorTest);
    cy.get(ingredientTest).first().drag(burgerConstructorTest);
    cy.get(ingredientTest).eq(2).drag(burgerConstructorTest);
  })
  it('sucsess delete element', () => {
    cy.get('[class^=constructor-element__action]').eq(1).click()
  })
  it('sucsess open modal_window', () => {
    cy.get('button').click()
  });
  it('sucsess input email and password', () => {
    ;
    cy.get('input').first().type('rustiksagad@gmail.com')
    cy.get('input').last().type('12345')
  })

  it('sucsess user_autorization', () => {
    cy.get('button').contains('Войти').click();
    cy.getCookies().should('be.empty')
    cy.intercept('POST', `${apiConfig.baseUrl}/auth/login`).as('login')
      .wait('@login').its('response.statusCode').should('eq', 200);
    cy.url().should('not.contain', '/login')
    cy.getCookie('accessToken').should("not.be.empty");
  })

  it('sucsess open order_details', () => {

    cy.request({
      method: 'POST',
      url: `${apiConfig.baseUrl}/auth/login`,
      body: {
        email: 'rustiksagad@gmail.com',
        password: '12345',
      }
    })
      .as('loginResponse')
      .then((response) => {
        Cypress.env('token', response.body.accessToken);
        return response;
      })
      .its('status')
      .should('eq', 200);
    const authorization = `${Cypress.env('token')}`;
    cy.request({
      method: 'POST',
      url: `${apiConfig.baseUrl}/orders`,
      headers: {
        'Content-Type': 'application/json',
        authorization,
      },
      body: JSON.stringify({
        ingredients: ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733c6"],
      })
    })
      .then((response) => {
        return response;
      })
      .its('status')
      .should('eq', 200);
  })
})
