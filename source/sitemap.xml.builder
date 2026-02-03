# frozen_string_literal: true

xml.instruct!
xml.urlset 'xmlns' => 'http://www.sitemaps.org/schemas/sitemap/0.9' do
  sitemap.resources.select { |page| page.path.include?('.html') }.each do |page|
    next unless page.data.seo != false

    site_url = 'https://robotsbuildingrobots.com'
    location = if page.url == '/'
                 "#{site_url}/index.html"
               else
                 "#{site_url}#{page.url}index.html"
               end

    xml.url do
      xml.loc location
      xml.lastmod Date.today.to_time.iso8601
      xml.changefreq page.data.changefreq || 'monthly'
      xml.priority page.data.priority || '0.5'
    end
  end
end
