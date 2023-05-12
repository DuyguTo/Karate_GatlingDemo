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
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1178",
        "ok": "1178",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "percentiles1": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "percentiles2": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "percentiles3": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "percentiles4": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 350,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 1
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
        "total": "5.867",
        "ok": "5.867",
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
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1178",
        "ok": "1178",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles2": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "percentiles3": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "percentiles4": {
        "total": "434",
        "ok": "434",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 175,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
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
        "total": "2.933",
        "ok": "2.933",
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
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1154",
        "ok": "1154",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "171",
        "ok": "171",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles1": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles2": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "percentiles3": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "percentiles4": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 175,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
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
        "total": "2.933",
        "ok": "2.933",
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
