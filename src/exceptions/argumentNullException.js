import overload from "@jyostudio/overload";
import { CONSTRUCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../common/message.js";
import Exception from "./exception.js";
import ArgumentException from "./argumentException.js";

export default class ArgumentNullException extends ArgumentException {
    static [CONSTRUCTOR_SYMBOL] = function (...params) {
        ArgumentNullException[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("ArgumentNull_Generic");
            })
            .add([String], function (paramName) {
                ArgumentException[CONSTRUCTOR_SYMBOL].call(this, getMessage("ArgumentNull_Generic"), paramName);
            })
            .add([String, [Error, Exception, null]], function (msg, innerException) {
                ArgumentException[CONSTRUCTOR_SYMBOL].call(this, msg, innerException);
            })
            .add([String, String], function (paramName, msg) {
                ArgumentException[CONSTRUCTOR_SYMBOL].call(this, msg, paramName);
            });

        return ArgumentNullException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super();

        ArgumentNullException[CONSTRUCTOR_SYMBOL].apply(this, params);
        this.message = this.processMsg();
    }
}