/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record'],
    (record) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            if(scriptContext.type == scriptContext.UserEventType.VIEW) {
                let form = scriptContext.form;
                let customBtn = form.addButton({
                    id: 'custpage_getItems_button',
                    label: 'Get Items',
                    functionName: `onGetItemsClick(${scriptContext.newRecord.id})`
                });
                form.clientScriptModulePath = './Ex1_cs.js';
            }
        };
        return {
            beforeLoad: beforeLoad
        };
    });
