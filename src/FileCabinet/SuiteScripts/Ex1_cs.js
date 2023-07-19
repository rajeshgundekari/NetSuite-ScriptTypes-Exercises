/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/record'], function (record) {
  function pageInit(scriptContext) {
    console.log('inside pageInit');
  }
  function onGetItemsClick(recordId) {
    let salesOrderRecords = record.load({
        type: record.Type.SALES_ORDER,
        id: recordId,
        isDynamic: true
      });
    let salesOrderRecordsCount = salesOrderRecords.getLineCount({sublistId: 'item'}), sublistValues = "";
    let sublistValuesOfSalesOrder = `No. of Items are ${salesOrderRecordsCount}`;
    for(let i=0; i< salesOrderRecordsCount ; i++){
        sublistValues = sublistValues + salesOrderRecords.getSublistValue({sublistId: 'item', fieldId: 'item_display', line: i});
        if (i != salesOrderRecordsCount - 1) {
            sublistValues += ",";
        }
    }
    console.log('sublistValues ', sublistValues);
        salesOrderRecords.setValue({
          fieldId: 'memo',
          value: sublistValuesOfSalesOrder + " and the names are: " + sublistValues
        });
        salesOrderRecords.save();
  }

  return {
    pageInit: pageInit,
    onGetItemsClick: onGetItemsClick
  };
});
