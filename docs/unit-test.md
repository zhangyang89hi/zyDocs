
##
+ 提供测试框架(Mocha, Jasmine, Jest, Cucumber)
+ 提供断言(Chai, Jasmine, Jest, Unexpected)
+ 生成，展示测试结果(Mocha, Jasmine, Jest, Karma)
+ 快照测试(Jest, Ava)
+ 提供仿真(Sinon, Jasmine, enzyme, Jest, testdouble)
+ 生成测试覆盖率报告(Istanbul, Jest, Blanket)
+ 提供类浏览器环境(Protractor, Nightwatch, Phantom, Casper)




## mocha
```js
var assert = require('assert'); // nodejs 内建断言
var math = require('../Math');
describe("Math", function() {
  var firstOperand;
  var secondOperand;
  beforeEach(function() {
    firstOperand = 2;
    secondOperand = 3;
  });
  it("should add two numbers", function() {
    var result = math.add(firstOperand, secondOperand);
    assert.equal(result, firstOperand + secondOperand);
  });
});

```



## jest

```js
jest.unmock('../Math'); // unmock to use the actual implementation of Math

var math = require('../Math');

describe("Math", function() {
  var firstOperand;
  var secondOperand;

  beforeEach(function() {
    firstOperand = 2;
    secondOperand = 3;
  });

  it("should add two numbers", function() {
    var result = math.add(firstOperand, secondOperand);
    expect(result).toEqual(firstOperand + secondOperand);
  });
});

```