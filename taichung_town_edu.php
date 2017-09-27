<?php
    $town_name = $_POST['town_name'];
    $csv = array_map('str_getcsv', file('education/taichung_town_edu.csv'));
    array_walk($csv, function(&$a) use ($csv) {
      $a = array_combine($csv[0], $a);
    });
    array_shift($csv); # remove column header
    //echo $csv[1];
    $i = 0;
    $stack = array();
    $cnt = count($csv);
    while($i < $cnt+1){
      if($csv[$i]['site_id'] == $town_name){
        foreach($csv[$i] as $key=>$result) {
          array_push($stack, $result);  
          //echo $result;
        };
      }
      $i++;
    };
    echo json_encode($stack);
    
?> 