Rails.application.routes.draw do

  root                      'static_pages#home'

  get 'about'           =>  'static_pages#about'

  get 'events'          =>  'static_pages#events'

  get 'groups'          =>  'static_pages#groups'

  get 'calendar'        =>  'static_pages#calendar'

  get 'contact'         =>  'static_pages#contact'

  get 'profile'         =>  'static_pages#profile'

  get 'signup'          =>  'users#new'
end
