
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
      if( !isWatch ){
        beginWatchKeys();
      } else {
        stopWatchKeys();
      }
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
      if(isSelectable == false){
        selectTarget();
      } else {
        deselectTarget();
      }
    });

    $('*').hover(
      function(){
        if(isSelectable==true){
          var savedBorder = $(this).css('border');
          $(this).data('saved-border', savedBorder);
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
      var self = this;
      if(isSelectable==true){
        checkIfTargetIsSelect(self);
        console.log(e.target);
        return false;
      }
    });

    // **
    // * Mouse related actionss
    // *

    function checkIfTargetIsSelect(self){
      if( $(self).attr('id') == 'select-button-icon-LKBG' ){
        isSelectable=false;
        returnAllBorderToOriginal();
      }
    }

    function returnAllBorderToOriginal(){
      $.each( $('[data-saved-border!=""]'), function(i, item){
        var savedBorder = $(item).data('saved-border');
        $(item).css('border', savedBorder);
      });
    }

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

    function deselectTarget(){
      isSelectable = false;
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
        joinedKey = tempKey.join(' ');
        displayTempKey(tempKey, joinedKey);
      }
    }

    function displayTempKey(tempKey, joinedKey){
      $displayKey.html(joinedKey);
      pastKey = tempKey;
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
      $('#watch-button-icon-LKBG').addClass('stop-button-icon-LKBG')
    }

    function showWatch(){
      $('#watch-button-icon-LKBG').removeClass('stop-button-icon-LKBG')
    }

    function showClear(){
      $('#clear-button-LKBG').parent().removeClass('hidden-LKBG')
    }

    function hideClear(){
      $('#clear-button-LKBG').parent().addClass('hidden-LKBG')
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
