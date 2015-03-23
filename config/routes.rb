Rails.application.routes.draw do

  root                      'static_pages#home'

  get 'about'           =>  'static_pages#about'

  get 'events'          =>  'static_pages#events'

  get 'student_groups'  =>  'static_pages#student_groups'

  get 'calendar'        =>  'static_pages#calendar'

  get 'contact'         =>  'static_pages#contact'

  get 'profile_page'    =>  'static_pages#profile_page'

  get 'signup'          =>  'users#new'
end
