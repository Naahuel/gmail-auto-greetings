;(function(document){
  // Greeting template
  var greeting = 'Hi %s!';
  // Get the FROM name
  var fromName = document.querySelector('[data-message-id] span[email]');
  // Get the editor
  var editor = document.querySelector('.editable[contenteditable]');
  if( editor ){
    editor.innerHTML = greeting.replace('%s', fromName.innerText) + '<br><br>' + editor.innerHTML;
  }
})(document);