'use strict';
import q from 'q';
import rp from 'request-promise'

import request from 'request'
import Pact from 'pact-js-provider'
let pact = new Pact()

// pact.serviceProvider("fooProvider", () => {
//   honoursPactWith('fooConsumer', () => {
//     pactUri('pacts/fooconsumer-fooprovider.json')
//   })
// })

function switchMary(turnOn, done) {
  let urlPath = turnOn ? '/update/on' : '/update/off'
  let post_options = {
    url: 'http://localhost:5000' + urlPath,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  request(post_options, (error, req, resp) =>{
    console.log('callback on request')
    done()
  })
  }

pact.provider_states_for('Zoo App', () => {

  pact.providerState('there is an alligator named Mary', {
    file: './pacts/zoo_app-animal_service.json',
    setup: (done) => {
      console.log('setup111111')
      return switchMary(false, done)
    },

    options: {"pactUrl":'./pacts/zoo_app-animal_service.json',
        "baseUrl": 'http://localhost:5000'},

    teardown: (done) => {
      console.log('teardown')
      done()
    }

  }).then( () => {

    pact.providerState('there is not an alligator named Mary', {
      file: './pacts/zoo_app-animal_service.json',
      options: {"pactUrl":'./pacts/zoo_app-animal_service.json',
          "baseUrl": 'http://localhost:5000'},

      setup: (done) => {
        console.log('setup22222')
        return switchMary(false, done)
        // console.log('setup22222')
      },

      teardown: (done) => {
        console.log('teardown')
        done()
        // return
      }
    })
  })

}).verify()

