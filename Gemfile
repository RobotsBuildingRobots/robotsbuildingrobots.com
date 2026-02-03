source 'https://rubygems.org'

ruby '4.0.0'

if Gem::Version.new( Bundler::VERSION ) < Gem::Version.new( '2.0.0' )
  abort 'Bundler version >= 2.X.X is required'
end

gem 'abbrev'
gem 'ostruct'
gem 'rake'
gem 'highline'
gem 'require_all'
gem 'dotenv'

gem 'builder'
gem 'middleman', '~> 4.5', '>= 4.5.1'
gem 'middleman-minify-html'
gem 'middleman-deploy', '~> 2.0.0.pre.alpha'
gem 'net-ftp', '~> 0.1.3'
gem 'redcarpet'

# Unfortunately Middleman v4 incompatible with slim v5
# https://stackoverflow.com/a/77356029/161869
gem 'slim', '~>4.0'
gem 'titleize'

# Fixes warnings you're seeing indicate that certain Ruby standard
# library gems (bigdecimal and mutex_m) are used by activesupport
# but will not be included as default gems in future Ruby versions
# (starting from Ruby 3.4.0).
gem 'bigdecimal'
gem 'mutex_m'
gem 'csv'

# Ruby 4.0.0 removed these gems from the standard library
# Required by Middleman, Rack, RuboCop, and Tilt
gem 'cgi'
gem 'tsort'
gem 'rdoc'

group :development do
  gem 'pry'
  gem 'pry-nav'
  gem 'rubocop'
  gem 'rubocop-performance', '~> 1.21.0'
  gem 'rubocop-rake', '~> 0.6.0'
end
