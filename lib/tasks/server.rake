# frozen_string_literal: true

namespace :server do
  desc 'Work on the site with livereload'
  task development: ['utilities:build:purge:all', 'webpack:build:development'] do
    puts("---------------------------------------------------------->>\n")
    puts('Cranking up the development server running on port 4567')
    puts('Open your browser to http://localhost:4567/')
    puts("---------------------------------------------------------->>\n")
    system('bundle exec middleman server -e development --verbose')
  end

  namespace :build do
    desc 'Build the site for local testing'
    task staging: ['utilities:build:purge:all'] do
      ProcessWebpackConfigurations.new(mode: 'development').run
      puts("---------------------------------------------------------->>\n")
      puts('Building static files, but I will not be starting the server')
      puts("---------------------------------------------------------->>\n")
      system('time bundle exec middleman build -e staging --verbose')
    end

    desc 'Build the site for production'
    task production: ['utilities:build:purge:all', 'webpack:build:production'] do
      puts("---------------------------------------------------------->>\n")
      puts('Building static files, but I will not be starting the server')
      puts("---------------------------------------------------------->>\n")
      system('time bundle exec middleman build -e production --verbose')
    end
  end
end
