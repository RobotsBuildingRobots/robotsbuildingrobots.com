# frozen_string_literal: true

namespace :utilities do
  namespace :build do
    namespace :purge do
      desc 'Remove temporary, build, and cache directories.'
      task :middleman_files do
        puts("---------------------------------------------------------->>\n")
        puts('Removing temporary, build, and cache directories')
        puts("---------------------------------------------------------->>\n")
        FileUtils.rm_rf ['build']
      end

      desc 'Remove OSX operating system files'
      task :osx_files do
        puts("---------------------------------------------------------->>\n")
        puts('Removing osx files')
        puts("---------------------------------------------------------->>\n")
        system('find source/ -name .DS_Store -delete')
      end

      desc 'Remove all build files'
      task :all do
        Rake::Task['utilities:build:purge:middleman_files'].invoke
        Rake::Task['utilities:build:purge:osx_files'].invoke
        Rake::Task['webpack:delete'].invoke
      end
    end
  end
end
