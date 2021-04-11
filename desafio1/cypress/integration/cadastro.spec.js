/// <reference types="cypress" />


let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('cadastro de usuário', () => {
        cy.visit('index.php');
        cy.get('a.login').click(); //clica em signin 

        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();

        //PREENCHER FORMLÁRIO DE CADASTRO
        cy.get('input[value="2"]').check();
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());

        cy.get('input#passwd').type('agili12345');

        cy.get('select[id="days"]').select('10');
        cy.get('select[id="months"]').select('4');
        cy.get('select[id="years"]').select('2021');

        //cy.get('input[type="checkbox"]').check('1');

        cy.get('input[id="firstname"]').type(chance.first());
        cy.get('input[id="lastname"]').type(chance.last());

        cy.get('input[id="company"]').type(chance.company());
        cy.get('input[id="address1"]').type('First Street');

        cy.get('input[id="city"]').type(chance.city());

        cy.get('select[name="id_country"]').select('21');
        cy.get('select[id="id_state"]').select('Idaho')

        cy.get('input[id="postcode"]').type(12345);

        cy.get('input[id="phone"]').type(chance.phone({formatted: false}));
        cy.get('input[id="phone_mobile"]').type(chance.phone({formatted: false}));
        cy.get('button[id="submitAccount"]').click();

        cy.url().should('contain', 'controller')



    });

});

