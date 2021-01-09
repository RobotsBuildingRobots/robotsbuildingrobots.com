# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'npm run staging',
         source: 'build'

Slim::Engine.set_default_options(pretty: true)

set :protocol, 'https://'
set :host, 'robotsbuildingrobots.com'
set :port, 80

after_build do
  Dir.glob('build/assets/*.json').select { |file| /manifest/.match file }.each { |file| File.delete(file) }

  File.write('build/CNAME', 'robotsbuildingrobots.com')
  FileUtils.cp('build/four-o-four/index.html', 'build/404.html')
  FileUtils.rm_rf('build/404')

  add_content_to_source(postion: 'header', view_source_file: 'view_source_header.txt')
  add_content_to_source(postion: 'footer', view_source_file: 'view_source_footer.txt')
end

def add_content_to_source(postion:, view_source_file:)
  Dir.glob('build/**/*.html').map(&File.method(:realpath)).each do |path|
    File.write(path, add_to_source(postion: postion,
                                   content: File.read(path),
                                   view_source_file: view_source_file))
  end
end

def add_to_source(postion:, content:, view_source_file:)
  return write_footer_content(content: content, view_source_file: view_source_file) if postion == 'footer'
  return write_header_content(content: content, view_source_file: view_source_file) if postion == 'header'

  raise StandardError, 'Unfortunately the view source postion is not valid!'
end

def read_source_file(view_source_file:)
  File.read('source/partials/' + view_source_file).strip
rescue StandardError
  raise StandardError, 'Unfortunately the view source file can not be located!'
end

def write_footer_content(content:, view_source_file:)
  content.insert(content.index('</html>') + 7, "\n#{read_source_file(view_source_file: view_source_file)}\n")
rescue StandardError
  raise StandardError, 'Unfortunately the view source header index can not be located!'
end

def write_header_content(content:, view_source_file:)
  content.insert(0, "#{read_source_file(view_source_file: view_source_file)}\n")
rescue StandardError
  raise StandardError, 'Unfortunately the view source footer index can not be located!'
end
