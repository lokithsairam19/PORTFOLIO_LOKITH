$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "loki<br/>" +
      "><span class='caret'>$</span> role: fullstack python developer<br/> ^100" +
      "><span class='caret'>$</span> skills: Html, Css ,Bootstrap, Java Script, React, Python, Flask, Mysql<br/> ^100" +
      "><span class='caret'>$</span> location: Chennai,India<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
