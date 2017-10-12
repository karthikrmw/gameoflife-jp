#!/usr/bin/env bats
@test "Pinging server" { 
  run curl -s http://container.addteq.com:49167/gameoflife/ 
    [[ $output =~ "overcrowding" ]] 
   
}
