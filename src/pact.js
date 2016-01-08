'use strict';

export class Pact {
  constructor(options) {
    console.log('created pact instance')
    this.providerStates = {}
  }

  serviceProvider(providerName, callback) {
    // todo
  }

  providerStatesFor(providerName, statesToRun) {
    console.log('adding ' + providerName)
    this.providerStates[providerName] = statesToRun
    console.log(this.providerStates)
    return this
  }

  providerState(stateName, providerStateTests) {
    console.log('providerState ' + stateName)
    console.log(providerStateTests)
    providerStateTests.apply()
  }

  setup(setupFn) {
    console.log('in pact setup')
    setupFn.apply()
    console.log('setup')
  }

  verify() {
    console.log('verifys fn')
    this.providerStates.fooConsumer.apply()
    console.log('verfiged')
  }


}

export class ProviderState {
  constructor(providerState, setupFn) {
    this.providerState = providerState
    this.setupFn = setupFn
  }

  doSetup() {
    this.setupFn.apply()
  }

}