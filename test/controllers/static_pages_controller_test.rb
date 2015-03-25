require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get events" do
    get :events
    assert_response :success
  end

  test "should get groups" do
    get :groups
    assert_response :success
  end

  test "should get calendar" do
    get :calendar
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get profile" do
    get :profile
    assert_response :success
  end

end
