import overload from "@jyostudio/overload";
import { CONSTRUCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../common/message.js";
import Exception from "./exception.js";
import SystemException from "./systemException.js";

export default class AccessViolationException extends SystemException {
    static [CONSTRUCTOR_SYMBOL] = function (...params) {
        AccessViolationException[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("Arg_AccessViolationException");
            })
            .add([String], function (msg) {
                SystemException[CONSTRUCTOR_SYMBOL].call(this, msg);
            })
            .add([String, [Error, Exception, null]], function (msg, innerException) {
                SystemException[CONSTRUCTOR_SYMBOL].call(this, msg, innerException);
            });

        return AccessViolationException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super();

        AccessViolationException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }
}