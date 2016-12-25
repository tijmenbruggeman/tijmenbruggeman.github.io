function getYPosition(el) {
    el = el.getBoundingClientRect();
    return el.top + window.scrollY;
}

(function() {
  var timelineEntries = document.getElementsByClassName('timeline-entry');
  var containerEl = document.getElementById('timeline');
  var containerYPosition = getYPosition(containerEl);
  for(var i = 0; i < timelineEntries.length; i++) {
    var currentEvent = timelineEntries[i];
    var entry = currentEvent.getAttribute('data-timeline');
    var paragraph = document.getElementById(entry);
    var paragraphPosition = getYPosition(paragraph);
    currentEvent.style.top = (paragraphPosition - containerYPosition) + "px";
  }
})();