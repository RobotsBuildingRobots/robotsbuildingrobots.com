namespace :server do
  desc 'Work on the site with livereload'
  task development: ['utilities:build:purge:middleman_files'] do
    msg('Cranking up the development server running on port 4567')
    msg('Open your browser to http://localhost:4567/')
    shell('middleman server -e development --verbose')
  end

  desc 'Build the site'
  task build: ['utilities:build:purge:middleman_files'] do
    msg('Building static files, but I will not be starting the server')
    shell('PRODUCTION=true time middleman build --verbose')
  end
end
