require 'test_helper'

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get name" do
    get api_v1_users_name_url
    assert_response :success
  end

end
