import overload from "@jyostudio/overload";
import { CONSTURCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../messages/message.js";
import Exception from "./exception.js";

export default class SystemException extends Exception {
    static [CONSTURCTOR_SYMBOL] = function (...params) {
        SystemException[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("Arg_SystemException");
            })
            .add([String], function (msg) {
                Exception[CONSTURCTOR_SYMBOL].apply(this, msg);
            })
            .add([String, [Error, Exception]], function (msg, innerException) {
                Exception[CONSTURCTOR_SYMBOL].apply(this, msg, innerException);
            });

        return SystemException[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super();

        SystemException[CONSTURCTOR_SYMBOL].apply(this, params);
    }
}