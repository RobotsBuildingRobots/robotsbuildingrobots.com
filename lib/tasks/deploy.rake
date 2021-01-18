# frozen_string_literal: true

namespace :deploy do
  desc 'Push the built version to github pages'
  task github: ['utilities:build:purge:middleman_files', 'utilities:build:purge:osx_files'] do
    puts('---------------------------------------------------------->>')
    puts('Building the production static version of the application')
    puts('---------------------------------------------------------->>')
    system('time bundle exec middleman deploy -e production --verbose')
  end
end
