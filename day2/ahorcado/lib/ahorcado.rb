require 'rspec'
require 'pry'

class Ahorcado

  attr_reader :word, :arr
  def initialize (word)
    @word = word
    @arr = [
      <section class="m-cabeza"></section>
      <section class="m-cuerpo"></section>
      <section class="m-brazo-i"></section>
      <section class="m-brazo-d"></section>
      <section class="m-pierna-i"></section>
      <section class="m-pierna-d"></section>
           ]

  end
end