# frozen_string_literal: true

require 'yaml'
require_relative '../helpers/string_helpers'

class ProcessWebpackConfigurations
  include StringHelpers

  attr_reader :insert_webpack_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode

  def initialize(mode:)
    self.mode = mode
    self.global_webpack_config_js = File.read('webpack/global.webpack.config.js')
    self.insert_webpack_plugins = ''
    self.insert_webpack_plugin_merges = ''
  end

  def run
    substitute_plugins
    write_out_configuration
  end

  private

  attr_writer :insert_webpack_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode

  def substitute_plugins
    return remove_plugins unless development?

    append_plugins
    process_substitution(insert_webpack_plugins, '{{insert-webpack-plugins}}')
    process_substitution(insert_webpack_plugin_merges, '{{insert-webpack-plugin-merges}}')
  end

  def append_plugins
    Dir.glob('webpack/plugins/*.js') do |file|
      self.insert_webpack_plugins = insert_webpack_plugins + "\n" + File.read(file)
      self.insert_webpack_plugin_merges = insert_webpack_plugin_merges + ',' + format_constant_name(File.basename(file, '.*'))
    end
  end

  def remove_plugins
    process_substitution('', '{{insert-webpack-plugins}}')
    process_substitution('', '{{insert-webpack-plugin-merges}}')
  end

  def write_out_configuration
    File.open('webpack.config.js', 'w') { |file| file.write(global_webpack_config_js) }
  end

  def development?
    mode == 'development'
  end

  def process_substitution(str_to_use, str_to_replace)
    global_webpack_config_js[str_to_replace] = str_to_use
  end

  def trim_excess(str)
    str.slice!(str.length - 1, str.length)
    str
  end
end
