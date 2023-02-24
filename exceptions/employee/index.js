const EXCEPTIONS = {
    INVALID_EMPLOYEE_ID: new Error("Invalid Employee ID Provided"),
    EMPLOYEE_NOT_FOUND: new Error("Employee not found"),
    NAME_NOT_PROVIDED: new Error("Invalid Payload. Name not provided"),
    EMAIL_NOT_PROVIDED: new Error("Invalid Payload. Email not provided"),
    PHONE_NOT_PROVIDED: new Error("Invalid Payload. Phone not provided"),
    INVALID_PAYLOAD: new Error("Invalid Payload.")
};

EXCEPTIONS.INVALID_EMPLOYEE_ID.status = 400;
EXCEPTIONS.EMPLOYEE_NOT_FOUND.status = 404;
EXCEPTIONS.NAME_NOT_PROVIDED.status = 400;
EXCEPTIONS.EMAIL_NOT_PROVIDED.status = 400;
EXCEPTIONS.PHONE_NOT_PROVIDED.status = 400;
EXCEPTIONS.INVALID_PAYLOAD.status = 400;

module.exports = EXCEPTIONS;
