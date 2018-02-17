getDataFor = function(query, callbackFunction) {
	// DEMO_MODE defined in viz-config.js
	if (DEMO_MODE === true) {
		return getDataFor_static(query, callbackFunction);
	}
	return getDataFor_ajax(query, callbackFunction);
}

CONNECTION_NAME = "foodmart";

getDataFor_ajax = function(query, callbackFunction) {

	localCallback = function(response) {
		callbackFunction(response.responseJSON);
	}

	if (query != null) {

		request = new Object();
		request.tidy = new Object();
		request.connectionName = CONNECTION_NAME;
		request.query = query;
		request.tidy.enabled = true;
		request.tidy.simplifyNames = true;

		$.ajax({
		    "url"        : "/mondrian-rest/query",
		    "dataType"   : "json",
		    "contentType": "application/json",
		    "data"       : JSON.stringify(request),
		    "type"       : "POST",
		    "complete"   : localCallback
		});

	} else {
		callbackFunction({ "values" : [] });
	}

}

getDataFor_static = function(query, callbackFunction) {
	data = null;
	if (query === "SELECT NON EMPTY {[Measures].[Unit Sales]} ON COLUMNS, NON EMPTY {[Store].[Stores].[Store City].Members} ON ROWS FROM [Sales]") {
		data = {
	    "values": [
	        {
	            "Unit Sales": 21333,
	            "Store State": "CA",
	            "Store Country": "USA",
	            "Store City": "Beverly Hills"
	        },
	        {
	            "Unit Sales": 25663,
	            "Store State": "CA",
	            "Store Country": "USA",
	            "Store City": "Los Angeles"
	        },
	        {
	            "Unit Sales": 25635,
	            "Store State": "CA",
	            "Store Country": "USA",
	            "Store City": "San Diego"
	        },
	        {
	            "Unit Sales": 2117,
	            "Store State": "CA",
	            "Store Country": "USA",
	            "Store City": "San Francisco"
	        },
	        {
	            "Unit Sales": 26079,
	            "Store State": "OR",
	            "Store Country": "USA",
	            "Store City": "Portland"
	        },
	        {
	            "Unit Sales": 41580,
	            "Store State": "OR",
	            "Store Country": "USA",
	            "Store City": "Salem"
	        },
	        {
	            "Unit Sales": 2237,
	            "Store State": "WA",
	            "Store Country": "USA",
	            "Store City": "Bellingham"
	        },
	        {
	            "Unit Sales": 24576,
	            "Store State": "WA",
	            "Store Country": "USA",
	            "Store City": "Bremerton"
	        },
	        {
	            "Unit Sales": 25011,
	            "Store State": "WA",
	            "Store Country": "USA",
	            "Store City": "Seattle"
	        },
	        {
	            "Unit Sales": 23591,
	            "Store State": "WA",
	            "Store Country": "USA",
	            "Store City": "Spokane"
	        },
	        {
	            "Unit Sales": 35257,
	            "Store State": "WA",
	            "Store Country": "USA",
	            "Store City": "Tacoma"
	        },
	        {
	            "Unit Sales": 2203,
	            "Store State": "WA",
	            "Store Country": "USA",
	            "Store City": "Walla Walla"
	        },
	        {
	            "Unit Sales": 11491,
	            "Store State": "WA",
	            "Store Country": "USA",
	            "Store City": "Yakima"
	        }
	    ]
		};
	} else if (query === "SELECT NON EMPTY {[Measures].[Profit]} ON COLUMNS, NON EMPTY {[Time].[Time].[Quarter].Members} ON ROWS FROM [Sales]") {
		data = {
		    "values": [
		        {
		            "Quarter": "Q1",
		            "Year": "1997",
		            "Profit": 83876.1095
		        },
		        {
		            "Quarter": "Q2",
		            "Year": "1997",
		            "Profit": 79702.0452
		        },
		        {
		            "Quarter": "Q3",
		            "Year": "1997",
		            "Profit": 84367.02060000002
		        },
		        {
		            "Quarter": "Q4",
		            "Year": "1997",
		            "Profit": 91665.7211
		        }
		    ]
		};
	} else if (query === "SELECT NON EMPTY {[Measures].[Unit Sales]} ON COLUMNS, NON EMPTY {[Time].[Weekly].[Day].Members} ON ROWS FROM [Sales] WHERE {[Time].[Time].[1997].[Q3]}") {
		data = {
		    "values": [
		        {
		            "Unit Sales": 729,
		            "Year": "1997",
		            "Day": "1",
		            "Week": "28"
		        },
		        {
		            "Unit Sales": 1087,
		            "Year": "1997",
		            "Day": "2",
		            "Week": "28"
		        },
		        {
		            "Unit Sales": 751,
		            "Year": "1997",
		            "Day": "3",
		            "Week": "28"
		        },
		        {
		            "Unit Sales": 1464,
		            "Year": "1997",
		            "Day": "4",
		            "Week": "28"
		        },
		        {
		            "Unit Sales": 1287,
		            "Year": "1997",
		            "Day": "5",
		            "Week": "28"
		        },
		        {
		            "Unit Sales": 2745,
		            "Year": "1997",
		            "Day": "6",
		            "Week": "29"
		        },
		        {
		            "Unit Sales": 367,
		            "Year": "1997",
		            "Day": "9",
		            "Week": "29"
		        },
		        {
		            "Unit Sales": 605,
		            "Year": "1997",
		            "Day": "10",
		            "Week": "29"
		        },
		        {
		            "Unit Sales": 950,
		            "Year": "1997",
		            "Day": "11",
		            "Week": "29"
		        },
		        {
		            "Unit Sales": 550,
		            "Year": "1997",
		            "Day": "12",
		            "Week": "29"
		        },
		        {
		            "Unit Sales": 29,
		            "Year": "1997",
		            "Day": "13",
		            "Week": "30"
		        },
		        {
		            "Unit Sales": 1215,
		            "Year": "1997",
		            "Day": "14",
		            "Week": "30"
		        },
		        {
		            "Unit Sales": 34,
		            "Year": "1997",
		            "Day": "15",
		            "Week": "30"
		        },
		        {
		            "Unit Sales": 515,
		            "Year": "1997",
		            "Day": "16",
		            "Week": "30"
		        },
		        {
		            "Unit Sales": 747,
		            "Year": "1997",
		            "Day": "17",
		            "Week": "30"
		        },
		        {
		            "Unit Sales": 1592,
		            "Year": "1997",
		            "Day": "20",
		            "Week": "31"
		        },
		        {
		            "Unit Sales": 367,
		            "Year": "1997",
		            "Day": "22",
		            "Week": "31"
		        },
		        {
		            "Unit Sales": 1771,
		            "Year": "1997",
		            "Day": "23",
		            "Week": "31"
		        },
		        {
		            "Unit Sales": 828,
		            "Year": "1997",
		            "Day": "24",
		            "Week": "31"
		        },
		        {
		            "Unit Sales": 268,
		            "Year": "1997",
		            "Day": "26",
		            "Week": "31"
		        },
		        {
		            "Unit Sales": 3850,
		            "Year": "1997",
		            "Day": "27",
		            "Week": "32"
		        },
		        {
		            "Unit Sales": 1169,
		            "Year": "1997",
		            "Day": "28",
		            "Week": "32"
		        },
		        {
		            "Unit Sales": 789,
		            "Year": "1997",
		            "Day": "29",
		            "Week": "32"
		        },
		        {
		            "Unit Sales": 54,
		            "Year": "1997",
		            "Day": "30",
		            "Week": "32"
		        },
		        {
		            "Unit Sales": 617,
		            "Year": "1997",
		            "Day": "1",
		            "Week": "32"
		        },
		        {
		            "Unit Sales": 597,
		            "Year": "1997",
		            "Day": "2",
		            "Week": "32"
		        },
		        {
		            "Unit Sales": 493,
		            "Year": "1997",
		            "Day": "3",
		            "Week": "33"
		        },
		        {
		            "Unit Sales": 1663,
		            "Year": "1997",
		            "Day": "4",
		            "Week": "33"
		        },
		        {
		            "Unit Sales": 617,
		            "Year": "1997",
		            "Day": "5",
		            "Week": "33"
		        },
		        {
		            "Unit Sales": 1541,
		            "Year": "1997",
		            "Day": "6",
		            "Week": "33"
		        },
		        {
		            "Unit Sales": 323,
		            "Year": "1997",
		            "Day": "7",
		            "Week": "33"
		        },
		        {
		            "Unit Sales": 505,
		            "Year": "1997",
		            "Day": "8",
		            "Week": "33"
		        },
		        {
		            "Unit Sales": 26,
		            "Year": "1997",
		            "Day": "9",
		            "Week": "33"
		        },
		        {
		            "Unit Sales": 48,
		            "Year": "1997",
		            "Day": "10",
		            "Week": "34"
		        },
		        {
		            "Unit Sales": 569,
		            "Year": "1997",
		            "Day": "11",
		            "Week": "34"
		        },
		        {
		            "Unit Sales": 1222,
		            "Year": "1997",
		            "Day": "12",
		            "Week": "34"
		        },
		        {
		            "Unit Sales": 1223,
		            "Year": "1997",
		            "Day": "13",
		            "Week": "34"
		        },
		        {
		            "Unit Sales": 878,
		            "Year": "1997",
		            "Day": "14",
		            "Week": "34"
		        },
		        {
		            "Unit Sales": 897,
		            "Year": "1997",
		            "Day": "15",
		            "Week": "34"
		        },
		        {
		            "Unit Sales": 397,
		            "Year": "1997",
		            "Day": "16",
		            "Week": "34"
		        },
		        {
		            "Unit Sales": 487,
		            "Year": "1997",
		            "Day": "19",
		            "Week": "35"
		        },
		        {
		            "Unit Sales": 533,
		            "Year": "1997",
		            "Day": "21",
		            "Week": "35"
		        },
		        {
		            "Unit Sales": 1024,
		            "Year": "1997",
		            "Day": "22",
		            "Week": "35"
		        },
		        {
		            "Unit Sales": 814,
		            "Year": "1997",
		            "Day": "23",
		            "Week": "35"
		        },
		        {
		            "Unit Sales": 1021,
		            "Year": "1997",
		            "Day": "24",
		            "Week": "36"
		        },
		        {
		            "Unit Sales": 664,
		            "Year": "1997",
		            "Day": "25",
		            "Week": "36"
		        },
		        {
		            "Unit Sales": 976,
		            "Year": "1997",
		            "Day": "26",
		            "Week": "36"
		        },
		        {
		            "Unit Sales": 485,
		            "Year": "1997",
		            "Day": "27",
		            "Week": "36"
		        },
		        {
		            "Unit Sales": 862,
		            "Year": "1997",
		            "Day": "28",
		            "Week": "36"
		        },
		        {
		            "Unit Sales": 414,
		            "Year": "1997",
		            "Day": "29",
		            "Week": "36"
		        },
		        {
		            "Unit Sales": 422,
		            "Year": "1997",
		            "Day": "30",
		            "Week": "36"
		        },
		        {
		            "Unit Sales": 570,
		            "Year": "1997",
		            "Day": "4",
		            "Week": "37"
		        },
		        {
		            "Unit Sales": 343,
		            "Year": "1997",
		            "Day": "5",
		            "Week": "37"
		        },
		        {
		            "Unit Sales": 826,
		            "Year": "1997",
		            "Day": "6",
		            "Week": "37"
		        },
		        {
		            "Unit Sales": 736,
		            "Year": "1997",
		            "Day": "7",
		            "Week": "38"
		        },
		        {
		            "Unit Sales": 1595,
		            "Year": "1997",
		            "Day": "8",
		            "Week": "38"
		        },
		        {
		            "Unit Sales": 413,
		            "Year": "1997",
		            "Day": "9",
		            "Week": "38"
		        },
		        {
		            "Unit Sales": 1416,
		            "Year": "1997",
		            "Day": "10",
		            "Week": "38"
		        },
		        {
		            "Unit Sales": 185,
		            "Year": "1997",
		            "Day": "13",
		            "Week": "38"
		        },
		        {
		            "Unit Sales": 855,
		            "Year": "1997",
		            "Day": "17",
		            "Week": "39"
		        },
		        {
		            "Unit Sales": 1418,
		            "Year": "1997",
		            "Day": "18",
		            "Week": "39"
		        },
		        {
		            "Unit Sales": 388,
		            "Year": "1997",
		            "Day": "19",
		            "Week": "39"
		        },
		        {
		            "Unit Sales": 1380,
		            "Year": "1997",
		            "Day": "20",
		            "Week": "39"
		        },
		        {
		            "Unit Sales": 506,
		            "Year": "1997",
		            "Day": "21",
		            "Week": "40"
		        },
		        {
		            "Unit Sales": 574,
		            "Year": "1997",
		            "Day": "22",
		            "Week": "40"
		        },
		        {
		            "Unit Sales": 1664,
		            "Year": "1997",
		            "Day": "23",
		            "Week": "40"
		        },
		        {
		            "Unit Sales": 1242,
		            "Year": "1997",
		            "Day": "27",
		            "Week": "40"
		        },
		        {
		            "Unit Sales": 73,
		            "Year": "1997",
		            "Day": "28",
		            "Week": "41"
		        },
		        {
		            "Unit Sales": 377,
		            "Year": "1997",
		            "Day": "29",
		            "Week": "41"
		        }
		    ]
		};
	} else if (query === "SELECT NON EMPTY {[Measures].[Promotion Sales]} ON COLUMNS, NON EMPTY Order(TopCount({[Promotion].[Promotions].[Promotion Name].Members}, 10), [Measures].[Promotion Sales], BDESC) ON ROWS FROM [Sales]") {
		data = {
		    "values": [
		        {
		            "Promotion Sales": 9821.71,
		            "Promotion Name": "Cash Register Lottery"
		        },
		        {
		            "Promotion Sales": 4241.53,
		            "Promotion Name": "Best Savings"
		        },
		        {
		            "Promotion Sales": 3677.47,
		            "Promotion Name": "Big Promo"
		        },
		        {
		            "Promotion Sales": 3461.17,
		            "Promotion Name": "Dollar Days"
		        },
		        {
		            "Promotion Sales": 2608.71,
		            "Promotion Name": "Dimes Off"
		        },
		        {
		            "Promotion Sales": 2008.65,
		            "Promotion Name": "Bye Bye Baby"
		        },
		        {
		            "Promotion Sales": 1949.82,
		            "Promotion Name": "Big Time Discounts"
		        },
		        {
		            "Promotion Sales": 1912.86,
		            "Promotion Name": "Bag Stuffers"
		        },
		        {
		            "Promotion Sales": 1678.88,
		            "Promotion Name": "Dollar Cutters"
		        },
		        {
		            "Promotion Sales": 1510.07,
		            "Promotion Name": "Big Time Savings"
		        }
		    ]
		};
	} else if (query === "SELECT NON EMPTY {[Measures].[Supply Time]} ON COLUMNS, NON EMPTY {[Warehouse].[Warehouses].[Warehouse Name].Members} ON ROWS FROM [Warehouse]") {
		data = {
    "values": [
        {
            "State Province": "CA",
            "Country": "USA",
            "City": "Beverly Hills",
            "Warehouse Name": "Big  Quality Warehouse",
            "Supply Time": 559
        },
        {
            "State Province": "CA",
            "Country": "USA",
            "City": "Los Angeles",
            "Warehouse Name": "Artesia Warehousing, Inc.",
            "Supply Time": 1279
        },
        {
            "State Province": "CA",
            "Country": "USA",
            "City": "San Diego",
            "Warehouse Name": "Jorgensen Service Storage",
            "Supply Time": 1182
        },
        {
            "State Province": "CA",
            "Country": "USA",
            "City": "San Francisco",
            "Warehouse Name": "Food Service Storage, Inc.",
            "Supply Time": 80
        },
        {
            "State Province": "OR",
            "Country": "USA",
            "City": "Portland",
            "Warehouse Name": "Quality Distribution, Inc.",
            "Supply Time": 401
        },
        {
            "State Province": "OR",
            "Country": "USA",
            "City": "Salem",
            "Warehouse Name": "Treehouse Distribution",
            "Supply Time": 1650
        },
        {
            "State Province": "WA",
            "Country": "USA",
            "City": "Bellingham",
            "Warehouse Name": "Foster Products",
            "Supply Time": 216
        },
        {
            "State Province": "WA",
            "Country": "USA",
            "City": "Bremerton",
            "Warehouse Name": "Destination, Inc.",
            "Supply Time": 1130
        },
        {
            "State Province": "WA",
            "Country": "USA",
            "City": "Seattle",
            "Warehouse Name": "Quality Warehousing and Trucking",
            "Supply Time": 1193
        },
        {
            "State Province": "WA",
            "Country": "USA",
            "City": "Spokane",
            "Warehouse Name": "Jones International",
            "Supply Time": 546
        },
        {
            "State Province": "WA",
            "Country": "USA",
            "City": "Tacoma",
            "Warehouse Name": "Jorge Garcia, Inc.",
            "Supply Time": 1578
        },
        {
            "State Province": "WA",
            "Country": "USA",
            "City": "Walla Walla",
            "Warehouse Name": "Valdez Warehousing",
            "Supply Time": 83
        },
        {
            "State Province": "WA",
            "Country": "USA",
            "City": "Yakima",
            "Warehouse Name": "Maddock Stored Foods",
            "Supply Time": 528
        }
    ]
};
	} else if (query === "SELECT NON EMPTY {[Measures].[Warehouse Profit]} ON COLUMNS, NON EMPTY {[Product].[Products].[Product Department].Members} ON ROWS FROM [Warehouse]") {
		data = {
		    "values": [
		        {
		            "Warehouse Profit": 2991.5,
		            "Product Family": "Drink",
		            "Product Department": "Alcoholic Beverages"
		        },
		        {
		            "Warehouse Profit": 5527.5419,
		            "Product Family": "Drink",
		            "Product Department": "Beverages"
		        },
		        {
		            "Warehouse Profit": 1463.383,
		            "Product Family": "Drink",
		            "Product Department": "Dairy"
		        },
		        {
		            "Warehouse Profit": 2808.1576,
		            "Product Family": "Food",
		            "Product Department": "Baked Goods"
		        },
		        {
		            "Warehouse Profit": 6946.4004,
		            "Product Family": "Food",
		            "Product Department": "Baking Goods"
		        },
		        {
		            "Warehouse Profit": 1038.2594,
		            "Product Family": "Food",
		            "Product Department": "Breakfast Foods"
		        },
		        {
		            "Warehouse Profit": 7170.8932,
		            "Product Family": "Food",
		            "Product Department": "Canned Foods"
		        },
		        {
		            "Warehouse Profit": 433.2475,
		            "Product Family": "Food",
		            "Product Department": "Canned Products"
		        },
		        {
		            "Warehouse Profit": 6465.4366,
		            "Product Family": "Food",
		            "Product Department": "Dairy"
		        },
		        {
		            "Warehouse Profit": 4602.4272,
		            "Product Family": "Food",
		            "Product Department": "Deli"
		        },
		        {
		            "Warehouse Profit": 2208.1988,
		            "Product Family": "Food",
		            "Product Department": "Eggs"
		        },
		        {
		            "Warehouse Profit": 9979.7648,
		            "Product Family": "Food",
		            "Product Department": "Frozen Foods"
		        },
		        {
		            "Warehouse Profit": 715.0536,
		            "Product Family": "Food",
		            "Product Department": "Meat"
		        },
		        {
		            "Warehouse Profit": 15783.5131,
		            "Product Family": "Food",
		            "Product Department": "Produce"
		        },
		        {
		            "Warehouse Profit": 719.4529,
		            "Product Family": "Food",
		            "Product Department": "Seafood"
		        },
		        {
		            "Warehouse Profit": 12767.1505,
		            "Product Family": "Food",
		            "Product Department": "Snack Foods"
		        },
		        {
		            "Warehouse Profit": 2520.4834,
		            "Product Family": "Food",
		            "Product Department": "Snacks"
		        },
		        {
		            "Warehouse Profit": 3114.2123,
		            "Product Family": "Food",
		            "Product Department": "Starchy Foods"
		        },
		        {
		            "Warehouse Profit": 179.9891,
		            "Product Family": "Non-Consumable",
		            "Product Department": "Carousel"
		        },
		        {
		            "Warehouse Profit": 778.033,
		            "Product Family": "Non-Consumable",
		            "Product Department": "Checkout"
		        },
		        {
		            "Warehouse Profit": 5907.0513,
		            "Product Family": "Non-Consumable",
		            "Product Department": "Health and Hygiene"
		        },
		        {
		            "Warehouse Profit": 11821.5241,
		            "Product Family": "Non-Consumable",
		            "Product Department": "Household"
		        },
		        {
		            "Warehouse Profit": 1785.9613,
		            "Product Family": "Non-Consumable",
		            "Product Department": "Periodicals"
		        }
		    ]
		};
	}
	callbackFunction(data);
}
