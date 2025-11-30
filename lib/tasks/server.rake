# frozen_string_literal: true

namespace :server do
  desc 'Work on the site with livereload'
  task development: ['utilities:build:purge:all', 'webpack:build:development'] do
    puts("---------------------------------------------------------->>\n")
    puts('Cranking up the development server running on port 4567')
    puts('Open your browser to http://localhost:4567/')
    puts("---------------------------------------------------------->>\n")

    log = begin
      verbose == true ? '> tmp/development.log 2>&1' : ''
    rescue StandardError
      ''
    end

    system("bundle exec middleman server -e development --verbose #{log}")
  end

  namespace :build do
    desc 'Build the site for local staging testing'
    task staging: ['utilities:build:purge:all', 'webpack:build:staging'] do
      puts("---------------------------------------------------------->>\n")
      puts('Building static files, but I will not be starting the staging server')
      puts("---------------------------------------------------------->>\n")

      log = begin
        verbose == true ? '> tmp/staging.log 2>&1' : ''
      rescue StandardError
        ''
      end

      system("bundle exec middleman build -e staging --verbose #{log}")
    end

    desc 'Build the site for production testing '
    task production: ['utilities:build:purge:all', 'webpack:build:production'] do
      puts("---------------------------------------------------------->>\n")
      puts('Building static files, but I will not be starting the production server')
      puts("---------------------------------------------------------->>\n")

      log = begin
        verbose == true ? '> tmp/production.log 2>&1' : ''
      rescue StandardError
        ''
      end

      system("bundle exec middleman build -e production --verbose #{log}")
    end
  end
end
