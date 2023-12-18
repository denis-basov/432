// тестирование функции sum
describe("Тестирование функции sum", function () {
  it("2 + 2 равно 4", function () {
    assert.equal(sum(2, 2), 4);
  });
  it("5 + 5 равно 10", function () {
    assert.equal(sum(5, 5), 10);
  });
  it("10 + 7 равно 17", function () {
    assert.equal(sum(10, 7), 17);
  });
  it("1 + 0 равно 1", function () {
    assert.equal(sum(1, 0), 1);
  });
  it("-5 + 5 равно 0", function () {
    assert.equal(sum(-5, 5), 0);
  });
  it("-7 + -5 равно -12", function () {
    assert.equal(sum(-7, -5), -12);
  });
  it("0 + 0 равно 1", function () {
    assert.equal(sum(0, 0), 0);
  });
});

// тестирование функции getPow
describe("Тестирование функции getPow", function () {
  it("2 в степени 3 равно 8", function () {
    assert.equal(getPow(2, 3), 8);
  });
  it("4 в степени 2 равно 16", function () {
    assert.equal(getPow(4, 2), 16);
  });
  it("5 в степени 3 равно 125", function () {
    assert.equal(getPow(5, 3), 125);
  });
});

// тестирование функции getPow
describe("Тестирование функции sayHello", function () {
  it("Привет, Иван", function () {
    assert.equal(sayHello("Иван"), "Привет, Иван");
  });
  it("Привет, Анна", function () {
    assert.equal(sayHello("Анна"), "Привет, Анна");
  });
  it("Привет, Петр", function () {
    assert.equal(sayHello("Петр"), "Привет, Петр");
  });
  it("Передача в аргумент пустой строки", function () {
    assert.equal(sayHello(""), "Введите имя");
  });
  it("Передача в аргумент числа", function () {
    assert.equal(sayHello(7), "Введите строковое значение");
  });
});
