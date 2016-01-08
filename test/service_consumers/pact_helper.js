'use strict';

import {Pact} from '../../src/pact'

let pact = new Pact()

pact.serviceProvider("fooProvider", () => {
  honoursPactWith('fooConsumer', () => {
    pactUri('pacts/fooconsumer-fooprovider.json')
  })
})

pact.providerStatesFor('fooConsumer', () => {

  pact.providerState('fooState1', () => {
    console.log('11111')
    pact.setup( () => {
      console.log('setup1')
      //block here
    })
  })

  pact.providerState('fooState2', () => {

    pact.setup( () => {
      console.log('setup2')
      //block here
    })
  })
}).verify()

