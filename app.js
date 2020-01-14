// importing npm packages for requesting the datafile && optimizely SDK
const req = require("sync-request");
const optly = require("@optimizely/optimizely-sdk");

// building up the logic that requests the particular datafile and converts it to a workable format
const request = req("GET", "https://cdn.optimizely.com/datafiles/HyxwR6PohJd4uKvqJZqazN.json");
const datafile = JSON.parse(request.body.toString());

// ### CUSTOMIZATIONS FOR THE OPTIMIZELY CLIENT
// import the logger packages so it can be used with Optimizely client
const defaultLogger = require("@optimizely/optimizely-sdk/lib/plugins/logger");
const LOG_LEVEL = require("@optimizely/optimizely-sdk/lib/utils/enums").LOG_LEVEL;

// import the error handler (using the default one here)
const defaultErrorHandler = require("@optimizely/optimizely-sdk/lib/plugins/error_handler");

// import the event dispatcher (using the default one here)
const defaultEventDispatcher = require("@optimizely/optimizely-sdk/lib/plugins/event_dispatcher/index.node");

// creating an instance of Optimizely client, including the logger, error handler, event dispatcher
var optimizely = optly.createInstance({ 
    datafile: datafile,
    logger: defaultLogger.createLogger({
        logLevel: LOG_LEVEL.DEBUG
    }),
    errorHandler: defaultErrorHandler,
    eventDispatcher: defaultEventDispatcher
});