# Include Ruby modules
require 'rubygems'
require 'less'
require 'rake'

# The base path for the website
SITE_ROOT = "."

# TODO Add script to fetch env and path: defailt, theme-2, etc.. when compiling less

# Other options
CONFIG = {

	# The folder where all the LESS files are located
	:less_folder => File.join( SITE_ROOT, "assets", "less" ),

	# The main less file should use @imports to pull in any others
	# b/c the compile_less task only takes one input file
	:less_file => File.join( SITE_ROOT, "assets", "less", "styles.less" ),

	# The site's compiled CSS file
	:css_file => File.join( SITE_ROOT, "assets", "css", "styles.css")
}


# Tasks
# --------------------
desc "Compile LESS master to CSS output file"
task :compile_less do

	puts "\n"
	print "Compiling LESS... "

	# Set up the parser & do the compilation
	source = File.open( CONFIG[:less_file], "r" ).read
	parser = Less::Parser.new( :paths => [CONFIG[:less_folder]] )
	tree = parser.parse( source )

	# Write the parsed stuff to the output CSS file
	File.open( CONFIG[:css_file], "w+" ) do |f|

		# :compress => true removes spaces/breaks
		f.puts tree.to_css( :compress => false )
	end

	puts "done!"
end # task :compile_less