
    var keyCombos = [];
    var savedKeys = [];
    var keys      = {};
    var pastKey   = [];
    var tempKey = [];
    var keyComboDisplay = [];
    var isWatch   = false;
    var isSelectable = false;
    var $displayKey = $('#display-current-key-LKBG');

    // **
    // * Keybaord related events
    // *

    $(document).keydown(function (e) {
      keys[e.which] = true;
      printKeys();
    });

    $(document).keyup(function (e) {
      delete keys[e.which];
    });

    $('#watch-button-LKBG').on('click', function(event){
      var self = this;
      beginWatchKeys();
    });

    $('#stop-button-LKBG').on('click', function(event){
      var self = this;
      stopWatchKeys();
    });

    $('#clear-button-LKBG').on('click', function(event){
      var self = this;
      clearKeyCombos(event, self);
    });

    $('#save-button-LKBG').on('click', function(event){
      var self = this;
      saveKeyCombo(event, self);
    });

    // **
    // * Mouse related events
    // *

    $('#select-target-button-LKBG').on('click', function(event){
      selectTarget();
    });

    $('*').hover(
      function(){
        if(isSelectable==true){
          var savedBorder = $(this).css('border');
          $(this).data('saved-border', savedBorder);
          console.log(savedBorder);
          $(this).css('border', '1px solid red');
        }
      },
      function(){
        if(isSelectable==true){
          var savedBorder = $(this).data('saved-border');
          $(this).css('border', savedBorder);
        }
      }
    );

    $('*').on('click', function(e){
      if(isSelectable==true){
        console.log(e.target);
        return false;
      }
    });

    // **
    // * Mouse related actionss
    // *

    function createBorder(e, self){
      console.log(self);
      if(e.type == 'mouseenter'){
        $(self).css('border', '1px solid red');
      } else {
        $(self).css('border', 'none');
      }
    }

    function scanForClick(){
      if(isSelectable == true){
      }
    }

    function selectTarget(){
      isSelectable = true;
      scanForClick();
    }

    // **
    // * Keyboard related Actions
    // *

    function printKeys() {
      if(isWatch == true){
        tempKey = [];
        for (var i in keys) {
          if (!keys.hasOwnProperty(i)) continue;
          tempKey.push(i);
        }
        displayTempKey(tempKey);
      }
    }

    function displayTempKey(tempKey){
      $displayKey.html(tempKey);
      pastKey = tempKey;
      console.log(tempKey);
    }

    function beginWatchKeys(){
      isWatch = true;
      hideWatch();
    }

    function stopWatchKeys(){
      isWatch = false;
      showWatch();
    }

    function hideWatch(){
      $('#watch-button-LKBG').css('display', 'none');
      $('#stop-button-LKBG').css('display', 'inline-block');
    }

    function showWatch(){
      $('#watch-button-LKBG').css('display', 'inline-block');
      $('#stop-button-LKBG').css('display', 'none');
    }

    function showClear(){
      $('#clear-button-LKBG').css('display', 'inline-block');
    }

    function hideClear(){
      $('#clear-button-LKBG').css('display', 'none');
    }

    function saveKeyCombo(event, self){
      var comboKeys = tempKey.join(' ');
      if(comboKeys !== ''){
        keyCombos.push(comboKeys);
        displayKeyCombos();
        clearSavedKey();
        showClear();
      }
    }

    function displayKeyCombos(){
      keyComboDisplay = prepareKeyCombos();
      $('#current-keys').html(keyComboDisplay);
    }

    function prepareKeyCombos(){
      keyComboDisplay = [];
      for(i = 0; i < keyCombos.length; i++){
        keyComboDisplay.push('<li>' + keyCombos[i] + '</li>');
      }
      keyComboDisplay.join('');
      return keyComboDisplay;
    }

    function clearSavedKey(){
      savedKeys = [];
    }


    function clearKeyCombos(){
      hideClear();
      keyCombos = [];
      displayKeyCombos();
    }

    jQuery('#box-container-LKBG').draggable();
