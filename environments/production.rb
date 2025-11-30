# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'yarn run production',
         source: 'build'

activate :asset_hash, exts: %w[.jpg .png]

activate :minify_html do |html|
  html.remove_quotes = false
  html.remove_intertag_spaces = true
  html.remove_http_protocol = false
end

set :protocol, ENV.fetch('SITE_PROTOCOL', 'https://')
set :host, ENV.fetch('SITE_HOST', 'localhost')
set :port, ENV.fetch('SITE_PORT', '80').to_i

require_relative '../lib/build_process_functions'

after_build { adjust_final_source }
