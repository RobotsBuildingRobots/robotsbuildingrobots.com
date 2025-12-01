# frozen_string_literal: true

namespace :webpack do
  namespace :build do
    desc 'Build the webpack production configuration file'
    task :production do
      puts("---------------------------------------------------------->>\n")
      puts('Building Webpack Configurations...')
      WebpackBuild.new(mode: 'production').run
      puts("---------------------------------------------------------->>\n")
    end

    desc 'Build the webpack staging configuration file'
    task :staging do
      puts("---------------------------------------------------------->>\n\n")
      puts('Building Webpack Configurations...')
      WebpackBuild.new(mode: 'development').run
      puts("---------------------------------------------------------->>\n")
    end

    desc 'Build the webpack development configuration file'
    task :development do
      puts("---------------------------------------------------------->>\n\n")
      puts('Building Webpack Configurations...')
      WebpackBuild.new(mode: 'development').run
      puts("---------------------------------------------------------->>\n")
    end
  end

  desc 'Remove Generated Webpack File'
  task :delete do
    puts("---------------------------------------------------------->>\n")
    puts('Removing Generated Webpack File')
    puts("---------------------------------------------------------->>\n")
    FileUtils.rm_f('webpack.config.js')
  end
end
