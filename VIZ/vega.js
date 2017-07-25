"data": [
    {
        "name": "ptable",
        "sql": "SELECT decimalLongitude as x, decimalLatitude as y, c10_month as m, individualCount as c, ebird.rowid FROM ebird WHERE (county = 'San Francisco' OR county = 'Marin') AND c9_year = 2015 AND scientificName = 'Falco peregrinus' AND individualCount IS NOT NULL LIMIT 2000000"
    }
]

marks: [
    {
        "type": "points",
        "from": {
            "data": "ptable"
        },
        "properties": {
            "x": {
                "scale": "x",
                "field": "x"
            },
            "y": {
                "scale": "y",
                "field": "y"
            },
            "fillColor": {
                "scale": "color",
                "field": "m"
            },
            "size": {
                "scale": "count",
                "field": "c"
            }
        }
    }
]

"scales": [
    {
        "name": "x",
        "type": "linear",
        "domain": [-123.03,-122.35],
        "range": "width"
    },
    {
        "name": "y",
        "type": "linear",
        "domain": [37.4833,38.3094],
        "range": "height"
    },
    {
        "name": "count",
        "type": "quantize",
        "domain": [1,10],
        "range": [3,6,9,12,15,18,21,24,27,30]
    },
    {
        "name": "color",
        "type": "ordinal",
        "domain": [1,2,3,4,5,6,7,8,9,10,11,12],
        "range": ["#f49242", "#f4c842", "#e8f441",
                  "#acf441", "#64f441", "#41f4bb",
                  "#42b3f4", "#4170f4", "#8241f4",
                  "#cd41f4", "#f441b8", "#f44161"],
      "default": "#6c809b",
      "nullValue": "#cacaca"
    }
]
