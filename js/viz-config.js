var DEMO_MODE = true;

var visualizationConfiguration = {

  "viz-1": {
    "panelTitle": "Unit Sales by City",
    "query": "SELECT NON EMPTY {[Measures].[Unit Sales]} ON COLUMNS, NON EMPTY {[Store].[Stores].[Store City].Members} ON ROWS FROM [Sales]",
    "vizType": "bar",
    "measureName": "Unit Sales",
    "measureLabel": "Sales",
    "dimensionName": "Store City",
    "dimensionLabel": "",
    "measureFormat": "$,.0f"
  },
  "viz-2": {
    "panelTitle": "Profits by Quarter",
    "query": "SELECT NON EMPTY {[Measures].[Profit]} ON COLUMNS, NON EMPTY {[Time].[Time].[Quarter].Members} ON ROWS FROM [Sales]",
    "vizType": "bar",
    "measureName": "Profit",
    "measureLabel": "Profit",
    "dimensionName": "Quarter",
    "dimensionLabel": "",
    "measureFormat": "$,.0f"
  },
  "viz-3": {
    "panelTitle": "Daily Sales, Q3",
    "query": "SELECT NON EMPTY {[Measures].[Unit Sales]} ON COLUMNS, NON EMPTY {[Time].[Weekly].[Day].Members} ON ROWS FROM [Sales] WHERE {[Time].[Time].[1997].[Q3]}",
    "vizType": "timeline",
    "measureName": "Unit Sales",
    "measureLabel": "",
    "timeDimensionName": "date",
    "timeDimensionFormat": "%b %-d",
    "measureFormat": "$,.0f",
    "transformFunction" : function(data) {
      ret = new Object();
      ret.values = [];
      data.values.forEach(function(v, i) {
        obj = v;
        obj.date = moment("1997-07-01").add(i-1, 'days').format('YYYY-MM-DD');
        ret.values.push(obj);
      });
      return ret;
    }
  },
  "viz-4": {
    "panelTitle": "Top Ten Promotion Sales",
    "query": "SELECT NON EMPTY {[Measures].[Promotion Sales]} ON COLUMNS, NON EMPTY Order(TopCount({[Promotion].[Promotions].[Promotion Name].Members}, 10), [Measures].[Promotion Sales], BDESC) ON ROWS FROM [Sales]",
    "vizType": "bar",
    "measureName": "Promotion Sales",
    "measureLabel": "Sales",
    "dimensionName": "Promotion Name",
    "dimensionLabel": "",
    "measureFormat": "$,.0f"
  },
  "viz-5": {
    "panelTitle": "Supply Time by Warehouse",
    "query": "SELECT NON EMPTY {[Measures].[Supply Time]} ON COLUMNS, NON EMPTY {[Warehouse].[Warehouses].[Warehouse Name].Members} ON ROWS FROM [Warehouse]",
    "vizType": "bar",
    "measureName": "Supply Time",
    "measureLabel": "Days",
    "dimensionName": "Warehouse Name",
    "dimensionLabel": "",
    "measureFormat": null
  },
  "viz-6": {
    "panelTitle": "Profits by Product",
    "query": "SELECT NON EMPTY {[Measures].[Warehouse Profit]} ON COLUMNS, NON EMPTY {[Product].[Products].[Product Department].Members} ON ROWS FROM [Warehouse]",
    "vizType": "bar",
    "measureName": "Warehouse Profit",
    "measureLabel": "Profit",
    "dimensionName": "Product Department",
    "dimensionLabel": "",
    "measureFormat": "$,.0f"
  }

}
