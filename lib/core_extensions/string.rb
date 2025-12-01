# frozen_string_literal: true

module CoreExtensions
  module String
    module ConstantName
      def constant_name
        str = File.basename(self, '.*')
        str = str.split('-').map(&:capitalize).join
        str[0].downcase + str[1..]
      end
    end
  end
end
String.prepend(CoreExtensions::String::ConstantName)
