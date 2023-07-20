/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(['N/https', 'N/record'],
    
    (https, record) => {
        /**
         * Defines the function that is executed when a GET request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const get = (requestParams) => {
            try{
                log.debug('requestParams ', requestParams);
                let recordInfo = record.load({type: record.Type.CUSTOMER, id: requestParams['id']});
                if(!recordInfo) {
                    return {
                        error: 'Please provide a valid id in the request'
                    };
                }
                let data = {
                    "NAME": recordInfo.getValue({
                        fieldId: 'entityid'
                    }),
                    "STATUS": recordInfo.getValue({
                        fieldId: 'entitystatus'
                    }),
                    "ADDRESS":recordInfo.getValue({
                        fieldId: 'defaultaddress'
                    }),
                    "PHONE" :recordInfo.getValue({
                        fieldId: 'phone'
                    })
                };
                return {...data};
            } catch(e) {
                return 'Failure: ' + e.message;
            }
        };

        /**
         * Defines the function that is executed when a PUT request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body are passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const put = (requestBody) => {
            try {
                log.debug('requestBody ', requestBody);
                let recordInfo = record.load({type: record.Type.CUSTOMER, id: requestBody.id});
                if(!recordInfo) {
                    return {
                        error: 'Please provide a valid id in the request'
                    };
                }
                recordInfo.setValue({fieldId: 'phone', value: requestBody.phone});
                recordInfo.setValue({fieldId: 'comments', value: requestBody.comments});
                let updatedRecordId = recordInfo.save();
                return `Success: ${updatedRecordId} Record updated successfully: `;
            } catch(e) {
                return "Failure: " + e.message;
            }
        };

        /**
         * Defines the function that is executed when a POST request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body is passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const post = (requestBody) => {
            try {
                log.debug('requestBody ', requestBody);
                /* defaultValues: {
                    entityid: requestBody.entityid,
                    companyname: requestBody.companyname,
                    comments: requestBody.comments,
                    id: requestBody.id,
                    email: requestBody.email,
                    isperson: requestBody.isperson
                }}*/
                let addRecordInfo = record.create({type: record.Type.CUSTOMER});
                addRecordInfo.setValue({fieldId: 'companyname', value: requestBody.companyname});
                addRecordInfo.setValue({fieldId: 'customform', value: requestBody.customform});
                addRecordInfo.setValue({fieldId: 'entitystatus', value: requestBody.entitystatus});
                let addedRecordId = addRecordInfo.save();
                return `Success: ${addedRecordId} Record created successfully: `;
            } catch(e){
                return "Failure: " + e.message;
            }
        };

        /**
         * Defines the function that is executed when a DELETE request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters are passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const doDelete = (requestParams) => {

        };

        return {get, put, post, delete: doDelete};
    });
