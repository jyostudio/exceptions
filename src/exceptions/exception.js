import overload from "@jyostudio/overload";
import { CONSTURCTOR_SYMBOL } from "../common/constants.js";
import { getMessage } from "../messages/message.js";

export default class Exception extends Error {
    static [CONSTURCTOR_SYMBOL] = function (...params) {
        Exception[CONSTURCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("Exception_WasThrown", this.name);
            })
            .add([String], function (msg) {
                this.message = msg;
            })
            .add([String, [Error, Exception]], function (msg, innerException) {
                this.message = msg;
                this.cause = innerException;
            });

        return Exception[CONSTURCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super(...params);

        this.name = this.constructor.name;

        Exception[CONSTURCTOR_SYMBOL].apply(this, params);
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
}
