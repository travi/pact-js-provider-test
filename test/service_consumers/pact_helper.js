'use strict';
import q from 'q';

import Pact from 'pact-js-provider'
let pact = new Pact()

// pact.serviceProvider("fooProvider", () => {
//   honoursPactWith('fooConsumer', () => {
//     pactUri('pacts/fooconsumer-fooprovider.json')
//   })
// })

pact.provider('fooConsumer', () => {

  pact.providerState('fooState1', {
    file: './pacts/zoo_app-animal_service.json',
    setup: (deferred) => {
      console.log('setup1')
    },

    execute:(deferred) => {
      console.log('execute')

      return pact.rakeVerify({"pactUrl":'./pacts/zoo_app-animal_service.json',
        "baseUrl": 'http://localhost:5000'})
    },

    teardown: (deferred) => {
      console.log('teardown')
      return deferred.promise
    }

  })

}).verify()

