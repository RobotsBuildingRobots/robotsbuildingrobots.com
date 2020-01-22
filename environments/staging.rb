# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'npm run staging',
         source: 'build'

Slim::Engine.set_default_options(pretty: true)

set :relative_links, true

activate :relative_assets

set :protocol, 'http://'
set :host, 'robotsbuildingrobots.com'
set :port, 80
