/**
 * @NScriptName
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(["N/search", "N/record", "N/log"], /**
 * @param{currentRecord} currentRecord
 * @param{email} email
 * @param{error} error
 * @param{runtime} runtime
 * @param{search} search
 */
    (search, record, log) => {
        const getInputData = (inputContext) => {
            let customerOrderSearchObj = search.create({
                type: "customrecord_mr_customerlist1",
                filters: [["custrecord_mr_date", "within", "5/1/2023", "5/31/2023"]],
                columns: [
                    search.createColumn({ name: "custrecord_custname", label: "CustName" }),
                    search.createColumn({
                        name: "custrecord_mr_date",
                        label: "JoiningDate",
                    }),
                    search.createColumn({
                        name: "custrecord_mr_status",
                        label: "JoiningStatus",
                    }),
                    search.createColumn({
                        name: "name",
                        sort: search.Sort.ASC,
                        label: "Name",
                    }),
                    search.createColumn({name: "internalid", label: "Internal ID"})
                ],
            });

            let searchObjCount = customerOrderSearchObj.runPaged().count;
            // log.debug("searchObjCount", "customrecord_mr_customerlist1");
            /* var customrecord_mr_customerlist1SearchObj = search.create({
                type: "customrecord_mr_customerlist1",
                filters:
                [
                   ["custrecord_mr_date","within","5/1/2023","5/31/2023"]
                ],
                columns:
                [
                   search.createColumn({
                      name: "name",
                      sort: search.Sort.ASC,
                      label: "Name"
                   }),
                   search.createColumn({name: "scriptid", label: "Script ID"}),
                   search.createColumn({name: "custrecord_custname", label: "CustName"}),
                   search.createColumn({name: "custrecord_mr_date", label: "JoiningDate"}),
                   search.createColumn({name: "custrecord_mr_status", label: "JoiningStatus"})
                ]
             }); */
            /* var searchResultCount = customrecord_mr_customerlist1SearchObj.runPaged().count;
             log.debug("customrecord_mr_customerlist1SearchObj result count",searchResultCount);
             customrecord_mr_customerlist1SearchObj.run().each(function(result){
                // .run().each has a limit of 4,000 results
                return true;
             });
             
 */ /*
             customrecord_mr_customerlist1SearchObj.id="customsearch1689590692642";
             customrecord_mr_customerlist1SearchObj.title="Custom CustomersList_Exercise Search (copy)";
             var newSearchId = customrecord_mr_customerlist1SearchObj.save();
             */
            /* let customerOrderSearchObj = search.create({
                type: 'customer',
                filters: joiningDateFilter
            }); */
            //customerOrderSearchObj.save();
            log.debug('searchObjCount ', searchObjCount);
            return customerOrderSearchObj;
        };

        const map = (mapContext) => {
            log.debug('JSON.parse(mapContext.value) ', mapContext.value);
            let jsonObj = JSON.parse(mapContext.value);
            let loadSearchRecord;
            loadSearchRecord = record.load({
                type: "customrecord_mr_customerlist1",
                id: jsonObj['id']
            });
            loadSearchRecord.setValue({
                fieldId: "custrecord_mr_status",
                value: "Joined With us",
            });
    
            let id = loadSearchRecord.save();
        };
        const reduce = (reduceContext) => {
            log.debug("reduce", reduceContext.value);
        };

        const summarize = (summaryContext) => {
            log.debug("summarize", summaryContext);
        };
        return {
            getInputData: getInputData,
            map: map,
            reduce: reduce,
            summarize: summarize,
        };
    });
