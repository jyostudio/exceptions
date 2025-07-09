import overload from "@jyostudio/overload";
import { CONSTRUCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../common/message.js";
import Exception from "./exception.js";
import SystemException from "./systemException.js";

export default class ArgumentException extends SystemException {
    #paramName = "";

    get paramName() {
        return this.#paramName;
    }

    static [CONSTRUCTOR_SYMBOL] = function (...params) {
        ArgumentException[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("Arg_ArgumentException");
            })
            .add([String], function (msg) {
                SystemException[CONSTRUCTOR_SYMBOL].call(this, msg);
            })
            .add([String, [Error, Exception, null]], function (msg, innerException) {
                SystemException[CONSTRUCTOR_SYMBOL].call(this, msg, innerException);
            })
            .add([String, String, [Error, Exception, null]], function (msg, paramName, innerException) {
                SystemException[CONSTRUCTOR_SYMBOL].call(this, msg, innerException);
                this.#paramName = paramName;
            })
            .add([String, String], function (msg, paramName) {
                SystemException[CONSTRUCTOR_SYMBOL].call(this, msg);
                this.#paramName = paramName;
            });

        return ArgumentException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    processMsg() {
        const s = this.message;
        if (this.#paramName) {
            const resourceString = getMessage("Arg_ParamName_Name", this.#paramName);
            return `${s}\r\n${resourceString}`;
        }
        else {
            return s;
        }
    }

    constructor(...params) {
        super();

        ArgumentException[CONSTRUCTOR_SYMBOL].apply(this, params);
        this.message = this.processMsg();
    }
}