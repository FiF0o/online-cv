# Don't watch the compiled site folder
ignore /_site/

# Run Rake LESS task on a file change
guard "rake", :task => "compile_less" do
  watch(%r{^assets/less/.+\.less})
end

# Only do the jekyll business on windows;
# LESS is broken there
group :windows do

  # Run Jekyll locally, serve & watch for changes
  guard "jekyll-plus", :serve => true do
    watch /.*/
    ignore /^_site/
  end

end
