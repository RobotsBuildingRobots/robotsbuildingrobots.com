module Workflow
  def environments(env, restrict = nil)
    env = 'development' unless env.present?
    approved_environments = %w(development testing production)
    if approved_environments.include?(env)
      if env == 'production' && restrict == 'production'
        error("#{env.capitalize} environment not allowed for this task")
        exit
      else
        puts
        msg('Environment parameter is valid')
        return env
      end
    else
      error('Invalid environment parameter')
      exit
    end
  end
end
