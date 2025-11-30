# frozen_string_literal: true

module FolderHelpers
  def list_pages(dir)
    sitemap.resources.select do |resource|
      resource.path.start_with?(dir)
    end
  end
end
