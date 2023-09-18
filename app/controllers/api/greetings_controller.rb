class Api::GreetingsController < ApplicationController
  def random_greeting
    random_message = Message.find(rand(1..5))
    render json: { greeting: random_message }
  end
end
