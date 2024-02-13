Cypress.Commands.add('getDate', (weight,height,weightWantToLoss,age,email) => {
    const apiUrl = Cypress.env('apiUrl')
 
    let idToken;

    cy.request({
     
        url: `${apiUrl}/v2/clients`,
        method: 'POST',
        body: {
        
            totalWeightLoss: null,
            weight: weight,
            height: height,
            weightWantToLoss: weightWantToLoss,
            age:age,
            gender: "Male",
            user: null,
            coach: null,
            email:email
          
        }
    })
        .then((response) => {
            expect(response.status).to.eq(201)
         
           // window.localStorage.setItem('token', response.body.user.token)
           //idToken=response.body.id_token
           console.log(response.body);
        })
        
})