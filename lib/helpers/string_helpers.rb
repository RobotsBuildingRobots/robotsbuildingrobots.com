# frozen_string_literal: true

require 'titleize'

module StringHelpers
  def format_constant_name(str)
    str = str.split('-').map(&:capitalize).join
    str[0].downcase + str[1..-1]
  end

  def format_slug(str)
    str.strip.downcase.strip.tr(' ', '-').gsub(/[^\w-]/, '')
  end

  def format_title(str)
    str.gsub(/[^0-9a-z]/i, ' ').titleize
  end
end
