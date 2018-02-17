function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

dragula([document.querySelector("#viz-cards")], {
  "isContainer": function (el) {
    return el.classList.contains('dash-card');
  },
  "accepts": function (el, target, source, sibling) {
    return !source.classList.contains('dash-card');
  },
  "revertOnSpill": true,
  "copy": true
})
  .on('drag', function (el, target, source, sibling) {
  }).on('drop', function (el, target, source, sibling) {
    $(el).remove();
    $(target).find('.card-body > .vega-embed > .marks').remove();
    $(target).find('.card-header').remove();
    populateTargetWithViz(target, el);
    $(target).addClass('occupied');
  }).on('over', function (el, container) {
    $(container).addClass('ex-over');
    if (container.classList.contains('dash-card')) {
      $(container).children('.card-body > .vega-embed > .marks').hide();
    }
  }).on('out', function (el, container) {
    $(container).removeClass('ex-over');
    if (container.classList.contains('dash-card')) {
      $(container).children('.card-body > .vega-embed > .marks').show();
    }
  });

$().ready(function() {
  for (p in visualizationConfiguration) {
    vc = visualizationConfiguration[p];
    $("#viz-cards").append("<div id='" + p + "' class='viz-card text-center'>" + vc.panelTitle + "</div>");
  }
});
