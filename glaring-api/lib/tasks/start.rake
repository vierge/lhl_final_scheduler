task :start do
  exec 'rake db:reset && foreman start -p 3000'
end