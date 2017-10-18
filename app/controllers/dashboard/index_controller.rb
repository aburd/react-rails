module Dashboard
  class IndexController < ApplicationController
    protect_from_forgery with: :exception
    layout 'react'

    def index; end
  end
end
