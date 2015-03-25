require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "layout links" do
    get root_path
    assert_template 'static_pages/home'
    assert_select "a[href=?]", root_path
    assert_select "a[href=?]", about_path
    assert_select "a[href=?]", events_path
    assert_select "a[href=?]", groups_path
    assert_select "a[href=?]", calendar_path
    assert_select "a[href=?]", contact_path
  end
end
