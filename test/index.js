import List from "@jyostudio/list";
import * as Exceptions from "../src/index.js";

console.log("=== 异常类型示例 ===\n");

// 1. Exception - 基础异常类
console.log("1. Exception:");
const exception1 = new Exceptions.Exception();
const exception2 = new Exceptions.Exception("自定义异常消息");
const exception3 = new Exceptions.Exception("带内部异常的消息", new Error("内部错误"));
console.dir(exception1, { depth: 3 });
console.log("toString():", exception1.toString());
console.dir(exception2, { depth: 3 });
console.log("toString():", exception2.toString());
console.dir(exception3, { depth: 3 });
console.log("toString():", exception3.toString());
console.log("\n");

// 2. SystemException - 系统异常
console.log("2. SystemException:");
const systemException1 = new Exceptions.SystemException();
const systemException2 = new Exceptions.SystemException("系统异常消息");
const systemException3 = new Exceptions.SystemException("系统异常消息", new Error("内部系统错误"));
console.dir(systemException1, { depth: 3 });
console.log("toString():", systemException1.toString());
console.dir(systemException2, { depth: 3 });
console.log("toString():", systemException2.toString());
console.dir(systemException3, { depth: 3 });
console.log("toString():", systemException3.toString());
console.log("\n");

// 3. AccessViolationException - 访问冲突异常
console.log("3. AccessViolationException:");
const accessViolationException1 = new Exceptions.AccessViolationException();
const accessViolationException2 = new Exceptions.AccessViolationException("访问被拒绝");
const accessViolationException3 = new Exceptions.AccessViolationException("访问被拒绝", new Error("权限不足"));
console.dir(accessViolationException1, { depth: 3 });
console.log("toString():", accessViolationException1.toString());
console.dir(accessViolationException2, { depth: 3 });
console.log("toString():", accessViolationException2.toString());
console.dir(accessViolationException3, { depth: 3 });
console.log("toString():", accessViolationException3.toString());
console.log("\n");

// 4. ArgumentException - 参数异常
console.log("4. ArgumentException:");
const argumentException1 = new Exceptions.ArgumentException();
const argumentException2 = new Exceptions.ArgumentException("参数无效");
const argumentException3 = new Exceptions.ArgumentException("参数无效", "paramName");
const argumentException4 = new Exceptions.ArgumentException("参数无效", "paramName", new Error("参数格式错误"));
console.dir(argumentException1, { depth: 3 });
console.log("toString():", argumentException1.toString());
console.dir(argumentException2, { depth: 3 });
console.log("toString():", argumentException2.toString());
console.dir(argumentException3, { depth: 3 });
console.log("toString():", argumentException3.toString());
console.dir(argumentException4, { depth: 3 });
console.log("toString():", argumentException4.toString());
console.log("\n");

// 5. ArgumentNullException - 参数为空异常
console.log("5. ArgumentNullException:");
const argumentNullException1 = new Exceptions.ArgumentNullException();
const argumentNullException2 = new Exceptions.ArgumentNullException("参数不能为空");
const argumentNullException3 = new Exceptions.ArgumentNullException("nullParam", "参数 nullParam 不能为空");
console.dir(argumentNullException1, { depth: 3 });
console.log("toString():", argumentNullException1.toString());
console.dir(argumentNullException2, { depth: 3 });
console.log("toString():", argumentNullException2.toString());
console.dir(argumentNullException3, { depth: 3 });
console.log("toString():", argumentNullException3.toString());
console.log("\n");

// 6. AggregateException - 聚合异常
console.log("6. AggregateException:");
const aggregateException1 = new Exceptions.AggregateException();
const aggregateException2 = new Exceptions.AggregateException("多个异常发生", new List(Exceptions.Exception, [
    new Exceptions.ArgumentException("参数1无效"),
    new Exceptions.ArgumentNullException("参数2为空"),
    new Exceptions.SystemException("系统错误")
]));
// 创建一个包含内部异常的聚合异常
const aggregateException3 = new Exceptions.AggregateException("聚合异常消息", new List(Exceptions.Exception, [
    new Exceptions.ArgumentException("参数1无效"),
    new Exceptions.ArgumentNullException("参数2为空"),
    new Exceptions.SystemException("系统错误"),
    aggregateException2
]));
console.dir(aggregateException1, { depth: 3 });
console.log("toString():", aggregateException1.toString());
console.dir(aggregateException2, { depth: 3 });
console.log("toString():", aggregateException2.toString());
console.dir(aggregateException3, { depth: 3 });
console.log("toString():", aggregateException3.toString());

console.dir(aggregateException3.flatten());

console.log("\n");

console.log("=== 异常类型构造完成 ===");