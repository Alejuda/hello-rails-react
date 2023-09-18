class Api::GreetingsController < ApplicationController
  def random_greeting
    random_message = Message.find(rand(1..5))
    if random_message
      render json: { greeting: random_message.content }
    else
      render json: { error: 'No greetings available' }, status: :not_found
    end
  end
end
