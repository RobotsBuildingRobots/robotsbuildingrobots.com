# frozen_string_literal: true

def adjust_final_source
  Dir.glob('build/assets/*.json').select { |file| file.include?('manifest') }.each { |file| File.delete(file) }

  File.write('build/CNAME', 'links.aboutchrishough.com')

  if File.exist?('build/four-o-four/index.html')
    FileUtils.cp('build/four-o-four/index.html', 'build/404.html')
    FileUtils.rm_rf('build/four-o-four')
  end

  add_content_to_source(postion: 'header', view_source_file: 'view_source_header.txt') if File.exist?('source/partials/view_source_header.txt')
  add_content_to_source(postion: 'footer', view_source_file: 'view_source_footer.txt') if File.exist?('source/partials/view_source_header.txt')
end

private

def add_content_to_source(postion:, view_source_file:)
  Dir.glob('build/**/*.html').map { |file| File.realpath(file) }.each do |path|
    File.write(path, add_to_source(postion:,
                                   content: File.read(path),
                                   view_source_file:))
  end
end

def add_to_source(postion:, content:, view_source_file:)
  return write_footer_content(content:, view_source_file:) if postion == 'footer'
  return write_header_content(content:, view_source_file:) if postion == 'header'

  raise StandardError, 'Unfortunately the view source postion is not valid!'
end

def read_source_file(view_source_file:)
  File.read("source/partials/#{view_source_file}").strip
rescue StandardError
  raise StandardError, 'Unfortunately the view source file can not be located!'
end

def write_footer_content(content:, view_source_file:)
  search_str = '</html>'
  content.insert(content.index(search_str), "\n\n#{read_source_file(view_source_file:)}\n\n")
rescue StandardError
  raise StandardError, 'Unfortunately the view source footer index can not be located!'
end

def write_header_content(content:, view_source_file:)
  search_str = 'html lang='

  pos_start = content.index(search_str)

  pos_end = content.index('>', pos_start) + 1

  content.insert(pos_end, "\n\n#{read_source_file(view_source_file:)}\n\n")
rescue StandardError
  raise StandardError, 'Unfortunately the view source header index can not be located!'
end
