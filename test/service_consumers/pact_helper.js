import Pact from 'pact-js' 


Pact.service_provider("fooProvider", () => {

  honoursPactWith('fooConsumer', () => {
    pactUri('pacts/fooConsumer.json')
  }
})
 

Pact.providerStatesFor('fooConsumer', () => {

  providerState('fooConsumer', () => {

    setup( () => {
      //block here 
    })
  })
})

