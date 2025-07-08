import overload from "@jyostudio/overload";
import { CONSTURCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../messages/message.js";
import Exception from "./exception.js";
import SystemException from "./systemException.js";

export default class AccessViolationException extends SystemException {
    static [CONSTURCTOR_SYMBOL] = function (...params) {
        AccessViolationException[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("Arg_AccessViolationException");
            })
            .add([String], function (msg) {
                SystemException[CONSTURCTOR_SYMBOL].apply(this, msg);
            })
            .add([String, [Error, Exception]], function (msg, innerException) {
                SystemException[CONSTURCTOR_SYMBOL].apply(this, msg, innerException);
            });

        return AccessViolationException[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super();

        AccessViolationException[CONSTURCTOR_SYMBOL].apply(this, params);
    }
}