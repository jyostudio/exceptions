import overload from "@jyostudio/overload";
import { CONSTRUCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../common/message.js";
import Exception from "./exception.js";

export default class SystemException extends Exception {
    static [CONSTRUCTOR_SYMBOL] = function (...params) {
        SystemException[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("Arg_SystemException");
            })
            .add([String], function (msg) {
                Exception[CONSTRUCTOR_SYMBOL].call(this, msg);
            })
            .add([String, [Error, Exception, null]], function (msg, innerException) {
                Exception[CONSTRUCTOR_SYMBOL].call(this, msg, innerException);
            });

        return SystemException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super();

        SystemException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }
}