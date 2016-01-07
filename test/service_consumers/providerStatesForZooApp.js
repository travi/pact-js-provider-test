Pact.provider_states_for("Zoo App", () => {
  setUp( () => {
   // AnimalService::DATABASE[:animals].truncate
  })

  providerState("there is an alligator named Mary", () => {
    setUp( () => {
      // AnimalService::DATABASE['animals'].insert('name': 'Mary')
    })
  })

  providerState("there is not an alligator named Mary", () => {
    setUp( () => {
      no_op()
    })
  })

  providerState("an error occurs retrieving an alligator", () => {
    setUp( () => {
      // allow(AnimalService.AnimalRepository).to.receive('find_alligator_by_name').and_raise("Argh!!!")
    })
  })
})