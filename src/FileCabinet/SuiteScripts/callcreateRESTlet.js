/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/https'],

    (https) =>{
        /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
        const pageInit=(scriptContext) =>{
        // let dateFromRestlet = https.get('/app/site/hosting/restlet.nl?script=3889&deploy=1');
            try {
                let url = '/app/site/hosting/restlet.nl?script=3715&deploy=1';
                let hearders = {
                    'Authorization': 'OAuth realm=TSTDRV2029057, oauth_consumer_key=c538f1c2f57bcdef3098e9a0a213f13c92620788bf63cfe0dda72f17e8743f19, oauth_token=c3dda34ccc125d2e4187b65feed2208ea48d55d2f09b64d7127c59b091d941b8,oauth_signature_method=HMAC-SHA256,oauth_timestamp=1689754186,oauth_nonce=Bq7z3stx1f3,oauth_version=1.0,oauth_signature=KymSPgyzvTgmCh297cfwBfjxqG2aflVoXZUkUh8Mxwc%3D',
                    'Content-Type': 'application/json'
                };
                try {
                    let dateFromRestlet = https.get({url: url, hearders: hearders});
                    log.debug('inside pageInit of callcreateRESTlet ', dateFromRestlet);
                } catch(e){
                    log.debug('error while calling http.get', e.message);
                }
            } catch(e) {
                log.debug('e ', e);
                alert('error in http.get() ', e.message);
            }
        };

        /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
        const fieldChanged = (scriptContext) =>{

        };

        /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
        const postSourcing = (scriptContext) =>{

        };

        /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
        const sublistChanged=(scriptContext)=> {

        };

        /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
        const lineInit = (scriptContext)=> {

        };

        /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
        const validateField = (scriptContext) =>{

        };

        /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
        const validateLine = (scriptContext)=> {

        };

        /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
        const validateInsert  = (scriptContext)=> {

        };

        /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
        const validateDelete = (scriptContext)=> {

        };

        /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
        const saveRecord=(scriptContext) =>{

        };

        return {
            pageInit: pageInit,
            fieldChanged: fieldChanged,
            postSourcing: postSourcing,
            sublistChanged: sublistChanged,
            lineInit: lineInit,
            validateField: validateField,
            validateLine: validateLine,
            validateInsert: validateInsert,
            validateDelete: validateDelete,
            saveRecord: saveRecord
        };
    });
