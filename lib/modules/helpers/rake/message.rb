module Message
  def msg(txt, periods = 'yes', new_line = 'yes')
    txt += '...' if periods == 'yes'
    puts '===> ' + txt
    puts if new_line == 'yes'
  end

  def error(reason = nil, solution = nil)
    spacer
    puts "\nERROR! ABORTING!\n\n"
    puts "REASON: #{reason}\n\n"
    puts "SOLUTION: #{solution}\n\n" if solution.present?
    spacer
  end

  def shell(cmd, step = nil)
    msg("Starting step #{step}", new_line: 'no') if step.present?
    if ENV['TRY']
      puts '**>> ' + cmd
    else
      puts '-->> ' + cmd
      system(cmd)
    end
    msg("#{step} completed!", periods: 'no')
  end

  def spacer
    puts "************************************************************\n"
  end
end
