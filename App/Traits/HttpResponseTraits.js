class HttpResponseTraits {
    static success(payload = null, message = 'success', code = 200) {
        return {
            code: code,
            message: message,
            data: payload
        };
    }

    static dataNotFound(message = 'Data not found', code = 404) {
        return {
            code: code,
            message: message
        };
    }

    static checkValidation(errors = null) {
        return {
            code: 422,
            message: 'Check your validation',
            errors: errors
        };
    }
    
    
    

    static idOrDataNotFound(message = 'ID or data not found', code = 404) {
        return {
            code: code,
            message: message
        };
    }

    static delete(message = 'Success delete', code = 200) {
        return {
            code: code,
            message: message
        };
    }

    // static error(message = 'error', code = 400, payload = null, className = null, methodName = '') {
    //     const data = {
    //         code: code,
    //         message: message
    //     };

    //     if (payload) {
    //         console.error(className, {
    //             'Message: ' + payload.message,
    //             'Method: ' + methodName,
    //             'On File: ' + payload.fileName,
    //             'On Line: ' + payload.lineNumber
    //         });
    //     }

    //     return data;
    // }
}

module.exports = HttpResponseTraits;
