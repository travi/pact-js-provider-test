require 'pact/provider/proxy/tasks'


$: << File.join(File.dirname(__FILE__), "lib")


Pact::ProxyVerificationTask.new :zoo_app_pact do | task |
 task.pact_url './pacts/zoo_app-animal_service.json', :pact_helper => './spec/support/pact_helper'
 task.provider_base_url 'http://localhost:5000' #scheme, host and optional port
end

