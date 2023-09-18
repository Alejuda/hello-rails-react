# frozen_string_literal: true

module Api
  class GreetingsController < ApplicationController
    def random_greeting
      random_message = Message.find(rand(1..5))
      if random_message
        render json: { greeting: random_message.content }
      else
        render json: { error: 'No greeting found' }, status: :not_found
      end
    end
  end
end
