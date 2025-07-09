import overload from "@jyostudio/overload";
import { CONSTRUCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../common/message.js";

export default class Exception extends Error {
    static [CONSTRUCTOR_SYMBOL] = function (...params) {
        Exception[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("Exception_WasThrown", this.name);
            })
            .add([String], function (msg) {
                this.message = msg;
            })
            .add([String, [Error, Exception, null]], function (msg, innerException) {
                this.message = msg;
                this.cause = innerException;
            });

        return Exception[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super(...params);

        this.name = this.constructor.name;

        Exception[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    toJSON() {
        const obj = {};
        Object.getOwnPropertyNames(this).forEach((key) => {
            const v = this[key];
            if (key === "cause" && typeof v === "object" && v instanceof Error && !(v instanceof Exception)) {
                obj[key] = this.toJSON.call(v);
            } else {
                obj[key] = v;
            }
        });
        return obj;
    }

    toString(...params) {
        Exception.prototype.toString = overload([], function () {
            const message = this.message;
            let s;

            if (message === null || message.length <= 0) {
                s = this.constructor.name;
            } else {
                s = `${this.constructor.name}: ${message}`;
            }

            if (this.cause) {
                s = `${s} ---> ${this.cause.toString()}\r\n   ${getMessage("Exception_EndOfInnerExceptionStack")}`;
            }

            return s;
        });

        return Exception.prototype.toString.apply(this, params);
    }
}
