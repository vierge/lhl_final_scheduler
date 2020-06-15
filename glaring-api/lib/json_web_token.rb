class JsonWebToken
  class << self
  # encode takes a payload and an expiration date with a default of 24h from now
    def encode(payload, exp = 24.hours.from_now) 
      payload[:exp] = exp.to_i # add expiration as a symbol to payload and convert to integer
      JWT.encode(payload, Rails.application.secrets.secret_key_base) #encode using secret key
    end

# decode is relatively self explanatory
    def decode
      body = JWT.decode(token, Rails.application.secrets.secret_key_base)
      HashWithIndifferentAccess.new body
    rescue
      nil
    end



  end

  def secret_key
    Rails.application.secrets&.secret_key_base || Rails.application.credentials&.secret_key_base
  end
end