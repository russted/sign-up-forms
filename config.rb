# Compass Configuration File
# Require any additional compass plugins here.
# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "/css/"
sass_dir = "/sass/"
images_dir = "img" #targets our pre existing image directory
javascripts_dir = "js" #targets our JavaScript directory


# Enable relative paths to assets via compass helper functions.
relative_assets = true

# Preferred CSS output style.
output_style = :compact #:expanded or :nested or :compact or :compressed

# Line comments for tracing CSS back to uncompiled SCSS files.
line_comments = false

# Source maps for tracing CSS back to uncompiled SCSS files.
sass_options = {:debug_info => false}

# Limit number rounding to 4 decimal places
Sass::Script::Number.precision = 4