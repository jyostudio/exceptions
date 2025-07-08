import overload from "@jyostudio/overload";
import * as Exceptions from "../src/index.js";

const err = new Exceptions.SystemException();
console.dir(err);


class NetworkTimeoutException extends Error {
    constructor() {
        super();

        this.message = "网络超时错误！";
    }
}

console.dir(new NetworkTimeoutException());