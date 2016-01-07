import Pact from 'pact-js'


Pact.serviceProvider("fooProvider", () => {
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

