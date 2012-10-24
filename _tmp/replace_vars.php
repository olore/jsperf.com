<?php

  $convert = array(                                                  #TODO: Should be able to change the some other way
    'gaId = \'\'' => 'gaId = \'UA-6065217-40\'',                     #ui.js
    'if (freeExports)' => 'if (false)',                              #benchmark.js
    '\'selector\': \'\'' => '\'selector\': \'#bs-results\'',         #ui.browserscope.js
    'archive = \'../../nano.jar\'' => 'archive = \'/_jar/nano.jar\'' #ui.js
  );

  $file = './_js/main.src.js';
  $source = str_replace(array_keys($convert), array_values($convert), preg_replace('/(if\s*\()(typeof define|freeDefine)\b/', '$1false', file_get_contents($file)));
  
	file_put_contents($file, $source);

?>
