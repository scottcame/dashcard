populateTargetWithViz = function(target, viz) {

  vc = visualizationConfiguration[viz.id];
  targetId = target.id;
  divId = targetId.replace(/.+([0-9]+)/, "$1");

  $("<div class='card-header'>" + vc.panelTitle + "</div>").insertBefore($(target).children('.card-body'));

  if (vc.vizType === 'bar') {
    getDataFor(vc.query, function(v) {
      spec = makeBarChart(vc.dimensionName, vc.dimensionLabel, vc.measureName, vc.measureLabel, vc.measureFormat, vc.transformFunction, $("#" + targetId).width()*.90, 300, v);
      console.log(spec);
      vegaEmbed("#viz-dest-" + divId, spec, {"actions" : false, "renderer" : "svg"});
    });
  } else if (vc.vizType === 'timeline') {
    getDataFor(vc.query, function(v) {
      spec = makeTimelineChart(vc.timeDimensionName, vc.timeDimensionFormat, vc.measureName, vc.measureLabel, vc.measureFormat, vc.colorDimension, vc.transformFunction, $("#" + targetId).width()*.90, 300, v);
      vegaEmbed("#viz-dest-" + divId, spec, {"actions" : false, "renderer" : "svg"});
    });
  }

}

makeBarChart = function(yAxisField, yAxisTitle, xAxisField, xAxisTitle, xAxisFormat, transformFunction, width, height, data) {
  s = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "autosize": {
          "type": "fit",
          "contains": "padding"
      },
      "mark": "bar",
      "encoding": {
          "y": {"field": yAxisField, "type": "nominal", "axis" : {"title" : yAxisTitle}},
          "x": {"field": xAxisField, "type": "quantitative", "axis" : {"title" : xAxisTitle}}
      }
  };
  if (xAxisFormat != null) {
    s.encoding.x.axis.format = xAxisFormat;
  }
  s.data = transformFunction == null ? data : transformFunction(data);
  s.width = width;
  s.height = height;
  return s;
}

makeTimelineChart = function(timeDimensionField, timeFormat, yAxisField, yAxisTitle, yAxisFormat, colorField, transformFunction, width, height, data) {
  s = {
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "mark": "line",
    "encoding": {
      "x": {"field": timeDimensionField, "type": "temporal", "axis": {"format": timeFormat, "title" : ""}},
      "y": {"field": yAxisField, "type": "quantitative", "axis" : {"title" : yAxisTitle}}
    }
  };
  if (colorField != null) {
    s.encoding.color = {
      "field": colorField,
      "type": "nominal",
      "legend": {"title" : ""}
    };
  }
  if (yAxisFormat != null) {
    s.encoding.y.axis.format = yAxisFormat;
  }
  s.data = transformFunction == null ? data : transformFunction(data);
  s.width = width;
  s.height = height;
  return s;
}
