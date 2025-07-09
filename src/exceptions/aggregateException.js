import overload from "@jyostudio/overload";
import List from "@jyostudio/list";
import { CONSTRUCTOR_SYMBOL } from "../common/constants.js";
import { asType, formatString } from "../common/utils.js";
import { getMessage } from "../common/message.js";
import Exception from "./exception.js";
import ArgumentNullException from "./argumentNullException.js";
import ArgumentException from "./argumentException.js";

export default class AggregateException extends Exception {
    #causes = null;

    get causes() {
        return this.#causes;
    }

    get causeCount() {
        return this.#causes?.length || 0;
    }

    static [CONSTRUCTOR_SYMBOL] = function (...params) {
        AggregateException[CONSTRUCTOR_SYMBOL] = overload()
            .add([], function () {
                this.message = getMessage("AggregateException_ctor_DefaultMessage");
                this.#causes = new List(Exception).asReadOnly();
                this.cause = this.#causes[0] || null;
            })
            .add([String], function (msg) {
                Exception[CONSTRUCTOR_SYMBOL].call(this, msg);
                this.#causes = new List(Exception).asReadOnly();
                this.cause = this.#causes[0] || null;
            })
            .add([String, [Error, Exception, null]], function (msg, innerException) {
                Exception[CONSTRUCTOR_SYMBOL].call(this, msg, innerException);

                if (innerException === null) {
                    throw new ArgumentNullException("innerException");
                }

                this.#causes = new List(Exception, [innerException]).asReadOnly();
                this.cause = this.#causes[0] || null;
            })
            .add([List.T(Exception)], function (innerExceptions) {
                AggregateException[CONSTRUCTOR_SYMBOL].call(this, getMessage("AggregateException_ctor_DefaultMessage"), innerExceptions);
            })
            .add([String, List.T(Exception)], function (msg, innerExceptions) {
                Exception[CONSTRUCTOR_SYMBOL].call(this, msg, innerExceptions[0] || null);

                const exceptionsCopy = new List(Exception, innerExceptions.length);

                for (let i = 0; i < exceptionsCopy.length; i++) {
                    exceptionsCopy[i] = innerExceptions[i];

                    if (!exceptionsCopy[i]) {
                        throw new ArgumentException(getMessage("AggregateException_ctor_InnerExceptionNull"));
                    }
                }

                this.#causes = exceptionsCopy.asReadOnly();
                this.cause = this.#causes[0] || null;
            });

        return AggregateException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    constructor(...params) {
        super();

        AggregateException[CONSTRUCTOR_SYMBOL].apply(this, params);
    }

    getBaseException(...params) {
        AggregateException.prototype.getBaseException = overload([], function () {
            let back = this;
            let backAsAggregate = this;
            while (backAsAggregate && backAsAggregate.cause?.length === 1) {
                back = back.cause[0];
                backAsAggregate = asType(back, AggregateException);
            }
            return back;
        });

        return AggregateException.prototype.getBaseException.apply(this, params);
    }

    handle(...params) {
        AggregateException.prototype.handle = overload([Function], function (predicate) {
            let unhandledExceptions = null;
            for (let i = 0; i < this.cause?.length; i++) {
                if (!predicate(this.cause[i])) {
                    if (unhandledExceptions === null) {
                        unhandledExceptions = new List(Exception);
                    }

                    unhandledExceptions.add(this.cause[i]);
                }
            }

            if (unhandledExceptions !== null) {
                throw new AggregateException(this.message, unhandledExceptions);
            }
        });

        return AggregateException.prototype.handle.apply(this, params);
    }

    flatten(...params) {
        AggregateException.prototype.flatten = overload([], function () {
            const flattenedExceptions = new List(Exception);

            const exceptionsToFlatten = new List(AggregateException);
            exceptionsToFlatten.add(this);
            let nDequeueIndex = 0;

            while (exceptionsToFlatten?.length > nDequeueIndex) {
                const currentInnerExceptions = exceptionsToFlatten[nDequeueIndex++]?.causes;

                for (let i = 0; i < currentInnerExceptions?.length; i++) {
                    const currentInnerException = currentInnerExceptions[i];

                    if (!currentInnerException) {
                        continue;
                    }

                    const currentInnerAsAggregate = asType(currentInnerException, AggregateException);

                    if (currentInnerAsAggregate) {
                        exceptionsToFlatten.add(currentInnerAsAggregate);
                    } else {
                        flattenedExceptions.add(currentInnerException);
                    }
                }
            }

            return new AggregateException(this.message, flattenedExceptions);
        });

        return AggregateException.prototype.flatten.apply(this, params);
    }

    toString(...params) {
        const superToString = super.toString;

        AggregateException.prototype.toString = overload([], function () {
            let text = superToString.call(this);

            for (let i = 0; i < this.#causes?.length; i++) {
                text = formatString(
                    getMessage("AggregateException_ToString"),
                    text, "\r\n", i, this.#causes[i].toString(), "<---", "\r\n");
            }

            return text;
        });

        return AggregateException.prototype.toString.apply(this, params);
    }
}