'use strict';
import childProcess from 'child_process'
import q from 'q';

import {Pact} from '../../src/pact'

let pact = new Pact()

// pact.serviceProvider("fooProvider", () => {
//   honoursPactWith('fooConsumer', () => {
//     pactUri('pacts/fooconsumer-fooprovider.json')
//   })
// })

pact.provider('fooConsumer', () => {

  pact.providerState('fooState1', {
    setup: (deferred) => {
      console.log('setup1')
    },

    execute:(deferred) => {
      console.log('execute')

      childProcess.exec('bundle exec rake pact:verify:javascript', (error, stdout) => {
        console.log('exec bundle here')
        console.log(stdout.toString());
        if (error) {
            console.log(error)
            deferred.reject(new Error('pact:verify failed: ' + error.message))
        } else {
            console.log('success')
            deferred.resolve();
        }
      });
      console.log('executedddd')
      return deferred.promise

      //block here
    },

    teardown: (deferred) => {
      console.log('teardown')
      return deferred.promise
      //block here
    }

  })

}).verify()

