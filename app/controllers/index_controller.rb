class IndexController < ActionController::Base
  protect_from_forgery with: :exception
  layout 'application'

  def index
    render layout: true
  end
end
