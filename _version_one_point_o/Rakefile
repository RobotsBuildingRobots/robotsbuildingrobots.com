require 'pry'
require 'require_all'
require 'highline/import'
require 'active_support'
require 'active_support/core_ext/object'
require 'active_support/core_ext/integer/inflections'

require_all FileList['lib/modules/helpers/rake/*.rb']
load_all 'lib/tasks/*.rake'

include Message
include Workflow

desc 'List all rake tasks for this application.'
task :tasks do
  system('rake -T')
end
