require 'pry'
require 'require_all'
require 'highline/import'


require_all ['lib/webpack', 'lib/core_extensions']

load_all 'lib/tasks/*.rake'

desc 'List all rake tasks for this project!'
task :tasks do
  system("clear && printf '\\e[3J'")
  system('rake -T')
end

desc 'Rake help me information!'
task :readme do
  system("clear && printf '\\e[3J'")

  readme = <<~EOF
    Here are some helpful notes if you forget where things are!

    1. Use "rake tasks" to list all the tasks available in the project.
    2. The server rake tasks accept the "--verbose" flag to output the verbose stream to a log file.
  EOF

  puts("---------------------------------------------------------->>\n\n")
  puts readme
  puts("\n---------------------------------------------------------->>\n\n")
end
