require 'test_helper'

module Api
  class GreetingsControllerTest < ActionDispatch::IntegrationTest
    test 'should get random_greeting' do
      get api_greetings_random_greeting_url
      assert_response :success
    end
  end
end
