# frozen_string_literal: true

require 'yaml'

class WebpackBuild
  attr_reader :insert_webpack_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode

  def initialize(mode:)
    self.mode = mode
    self.global_webpack_config_js = File.read('webpack/global_webpack_config.js')
  end

  def run
    _write_out_configuration
  end

  private

  attr_writer :insert_webpack_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode

  def _write_out_configuration
    File.write('webpack.config.js', global_webpack_config_js)
  end

  def _development?
    mode == 'development'
  end
end
