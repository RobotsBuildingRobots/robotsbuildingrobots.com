# frozen_string_literal: true

Bundler.require(:development)

Slim::Engine.set_options(pretty: true)

activate :external_pipeline,
         name: :webpack,
         command: 'yarn run develop',
         source: 'build'

require_relative '../lib/build_process_functions'

after_build { adjust_final_source }
