/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

define(['N/log'], function(log) {
    function pageInit(context) {
            try {
                // load bootstrap css
                var link = document.createElement("link");
                link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
                link.rel = "stylesheet";
                link.type = "text/css";
                document.head.appendChild(link);
            } catch (e) {
                log.error('Error in pageInit', e.message);
            }
        }
    return {
        pageInit: pageInit
    };
});