# frozen_string_literal: true

namespace :test do
  namespace :lint do
    desc 'Run all linters.'
    task :all do
      system("clear && printf '\\e[3J'")
      Rake::Task['test:lint:js'].invoke
      Rake::Task['test:lint:css'].invoke
      Rake::Task['test:lint:ruby'].invoke
    end

    desc 'Lint JavaScript via esLint.'
    task :js do
      puts("---------------------------------------------------------->>\n")
      puts('Running esLint')
      puts("---------------------------------------------------------->>\n")
      system('yarn run lint:js_with_fix')
    end

    desc 'Lint CSS & SCSS via StyleLint.'
    task :css do
      puts("---------------------------------------------------------->>\n")
      puts('Running Style Lint')
      puts("---------------------------------------------------------->>\n")
      system('yarn run lint:css_with_fix')
    end

    desc 'Lint Ruby via rubocop.'
    task :ruby do
      puts("---------------------------------------------------------->>\n")
      puts('Running Rubocop')
      puts("---------------------------------------------------------->>\n")
      system('rubocop -a')
    end
  end
end
