class ApplicationController < ActionController::API
  protect_from_forgery with: :exception

  before_action :authenticate_request
    attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized...' }, status : 401 unless @current_user
  end

  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end


  # helper_method :current_user


end
