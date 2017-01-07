function getYPosition(el) {
    el = el.getBoundingClientRect();
    return el.top + window.scrollY;
}

(function () {

    /*==Timeline==*/
    var timelineEntries = document.getElementsByClassName('timeline-entry');
    var containerEl = document.getElementById('timeline');
    if (containerEl) {
        var containerYPosition = getYPosition(containerEl);
        for (var i = 0; i < timelineEntries.length; i++) {
            var currentEvent = timelineEntries[i];
            var entry = currentEvent.getAttribute('data-timeline');
            var paragraph = document.getElementById(entry);
            var paragraphPosition = getYPosition(paragraph);
            currentEvent.style.top = (paragraphPosition - containerYPosition) + "px";
        }
    }

    /*==TimeLine Fadein==*/
    for (var i = 0; i < timelineEntries.length; i++) {
        Velocity(timelineEntries[i],
            {
                opacity: 1
            },
            {
                delay: 300 * i
            });
    }

    /*==Portfolio Fadein==*/
    var portfolioItems = document.getElementsByClassName('portfolio-item');

    for (var i = 0; i < portfolioItems.length; i++) {
        Velocity(portfolioItems[i],
            {
                opacity: 1
            },
            {
                delay: 300 * i
            });
    }

})();

