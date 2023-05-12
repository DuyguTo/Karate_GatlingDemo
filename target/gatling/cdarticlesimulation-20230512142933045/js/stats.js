var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "352",
        "ok": "352",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1160",
        "ok": "1160",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "366",
        "ok": "366",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "288",
        "ok": "288",
        "ko": "-"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles2": {
        "total": "618",
        "ok": "618",
        "ko": "-"
    },
    "percentiles3": {
        "total": "859",
        "ok": "859",
        "ko": "-"
    },
    "percentiles4": {
        "total": "923",
        "ok": "923",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 309,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 43,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.966",
        "ok": "5.966",
        "ko": "-"
    }
},
contents: {
"req_create-and-dele-5c840": {
        type: "REQUEST",
        name: "Create And Delete Article",
path: "Create And Delete Article",
pathFormatted: "req_create-and-dele-5c840",
stats: {
    "name": "Create And Delete Article",
    "numberOfRequests": {
        "total": "176",
        "ok": "176",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1160",
        "ok": "1160",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "percentiles1": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "percentiles2": {
        "total": "590",
        "ok": "590",
        "ko": "-"
    },
    "percentiles3": {
        "total": "881",
        "ok": "881",
        "ko": "-"
    },
    "percentiles4": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 156,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.983",
        "ok": "2.983",
        "ko": "-"
    }
}
    },"req_delete-api-arti-9e94f": {
        type: "REQUEST",
        name: "DELETE api/articles/{articleId}",
path: "DELETE api/articles/{articleId}",
pathFormatted: "req_delete-api-arti-9e94f",
stats: {
    "name": "DELETE api/articles/{articleId}",
    "numberOfRequests": {
        "total": "176",
        "ok": "176",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "933",
        "ok": "933",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "298",
        "ok": "298",
        "ko": "-"
    },
    "percentiles1": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "percentiles2": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "percentiles3": {
        "total": "834",
        "ok": "834",
        "ko": "-"
    },
    "percentiles4": {
        "total": "909",
        "ok": "909",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 153,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.983",
        "ok": "2.983",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
