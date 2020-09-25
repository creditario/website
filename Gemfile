source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Hello! This is where you manage which Bridgetown version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Bridgetown with `bundle exec`, like so:
#
#   bundle exec bridgetown serve
#
# This will help ensure the proper Bridgetown version is running.
#
# To install a plugin, simply run bundle add and specify the group
# "bridgetown_plugins". For example:
#
#   bundle add some-new-plugin -g bridgetown_plugins
#
# Happy Bridgetowning!

gem "bridgetown", "~> 0.16.0"

group :development do
  gem "capistrano", "~> 3.14", require: false
  gem "capistrano-rails", "~> 1.6", require: false
  gem 'capistrano-rvm', require: false
  gem 'ed25519'
  gem 'bcrypt_pbkdf'
end
