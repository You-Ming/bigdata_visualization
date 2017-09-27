<?php
    $town_num = $_POST['town_num'];
    $csv = array_map('str_getcsv', file('school/taichung_school_num.csv'));
    array_walk($csv, function(&$a) use ($csv) {
      $a = array_combine($csv[0], $a);
    });
    array_shift($csv); # remove column header
    //echo $csv[1];
    $i = 0;
    $cnt = count($csv);
    while($i < $cnt+1){
      if($csv[$i]['郵遞區號'] == $town_num){
        foreach($csv[$i] as $key => $result) {
          echo $key .": ". $result, '<br>';
        };
      }
      $i++;
    };
    
?> 