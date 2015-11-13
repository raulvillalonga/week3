require 'sinatra'
require "sinatra/reloader" if development?
require_relative "./lib/ahorcado.rb"
require 'pry'

get "/" do
  erb(:index)
end
