// a. Define the target for shortcut
// b. Choose the keyboard to press
// c. Choose whether last


;(function($){

  var shortBoard = {} || shortBoard;

  shortBoard = {

    keyActions: {
      // key: action
    },

    shortboardWrap: '<div id="shortboard-wrap"></div>',
    shortboardStatus: '<span id="shortboard-status"></span>',
    shortboardList: '<ul id="shortboard-list"></ul>',
    shortboardItem: '<li class="shortboard-item"></li>',
    /**
     * Template for shortboard controls
     * Field for css selector and keyboard shortcut
     */
    shortboardCreatePanel:
      '<div id="shortboard-controls">'+
      ' <div class="col-50">'+
      '   <input id="shortboard-shortcut" type="text"></input>'+
      ' </div>'+
      ' <div class="col-50">'+
      '   <input id="shortboard-selector" type="text"></input>'+
      ' </div>'+
      '</div>',


    /**
     *  On keypress, check keyActions
     *  @keyPressed: Button pressed
     */
    keyboardEvents: function(keyPressed){
      $.on('keypress', function(e){
        // e.target;
        // if( pressedKey === up ){
        // }
      });
    }

    /**
     * Run Initialize on load
     * @clickTarget: CSS selector for click target
     */
    initialize: function(clickTarget){
      this.setClickTarget(clickTarget);
    },

    /**
     * Load UI to determine shortcuts
     * @clickTarget: CSS selector for click target
     */
    loadShortcutDefiner: function(){

      $('body').append('')
    },

    /**
     * Associate keyboard key to css element on page
     * @clickTarget: CSS selector for click target
     */
    saveKeyClickPair: function(clickTarget, keyboardTarget){
      this.keyActions[keyboardTarget] = clickTarget;
    },

    /**
     * Define the click target
     * @clickTarget: CSS selector for click target
     */
    setClickTarget: function(clickTarget){
      return clickTarget;
    },

    /**
     * Click the defined target
     * @keyboardTarget: Keyboard button action
     */
    doClickTarget: function(clickTarget){
      $(clickTarget).click();
    }

    /**
     * Set the keyboard button to trigger
     * @keyboardTarget: Keyboard button action
     */
    setKeyboardTarget: function(pressedKey){
      return pressedKey;
    },

    /**
     * Set length of timeout between click
     * @timeBetween: Time between clicks in seconds
     */
    setBetweenClickCondition: function(timeBetween){
      var timeBetween = 1000 * timeBetween;
      setTimeout(function(){

      }, timeBetween);
    },

    /**
     * Select if last key
     * @isLast: Select if last
     */
    chooseIfLast: function(isLast){

    }

  }

})(jQuery);
