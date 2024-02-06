import React from "react";

export default function App() {
  const [expression, setExpression] = React.useState("0");
  const [total, setTotal] = React.useState(0);

  function display(btn) {
    setExpression(expression == 0 ? btn : expression + btn);
    if (expression[expression.length - 1] == "=") {
      if (/[0-9.]/.test(btn)) {
        setExpression(btn);
      } else {
        setExpression(total + btn);
      }
    }
  }

  function operator(symbol) {
    setExpression(expression == 0 ? 0 : expression + " " + symbol + " ");
    const array = expression.split("");
    const lastIndex = array[array.length - 1];
    if (/[0-9]/.test(lastIndex)) {
      setExpression(expression + " " + symbol + " ");
    } else if (lastIndex === "=") {
      setExpression(total + " " + symbol + " ");
    } else {
      setExpression(expression);
    }
  }

  function decimal() {
    const array = expression.split(" ");
    const lastIndex = array[array.length - 1];
    if (!lastIndex.includes(".") && /[0-9]/.test(lastIndex)) {
      setExpression(expression + ".");
    }
  }

  function equals() {
    setTotal(eval(expression));
    setExpression((prev) => prev + " =");
  }

  function clearAll() {
    setTotal(0);
    setExpression("0");
  }

  function clear() {
    setExpression(
      expression
        .split("")
        .slice(0, expression.length - 1)
        .join("")
    );
    setTotal(0);
  }

  function negative() {
    total > 0 ? setTotal("-" + total) : setTotal(Math.abs(total));
  }

  function percentage() {
    setTotal(total / 100);
  }

  return (
    <main>
      <div className="calculator">
        <p id="display" className="row">
          {expression}
        </p>
        <h3 id="total">{total}</h3>
        <button id="clearAll" className="row" onClick={clearAll}>
          AC
        </button>
        <button id="clear" onClick={clear}>
          C
        </button>
        <button id="percentage" onClick={percentage}>
          %
        </button>
        <button className="number" id="seven" onClick={() => display("7")}>
          7
        </button>
        <button className="number" id="eight" onClick={() => display("8")}>
          8
        </button>
        <button className="number" id="nine" onClick={() => display("9")}>
          9
        </button>
        <button id="multiply" onClick={() => operator("*")}>
          x
        </button>
        <button className="number" id="four" onClick={() => display("4")}>
          4
        </button>
        <button className="number" id="five" onClick={() => display("5")}>
          5
        </button>
        <button className="number" id="six" onClick={() => display("6")}>
          6
        </button>
        <button id="divide" onClick={() => operator("/")}>
          /
        </button>
        <button className="number" id="one" onClick={() => display("1")}>
          1
        </button>
        <button className="number" id="two" onClick={() => display("2")}>
          2
        </button>
        <button className="number" id="three" onClick={() => display("3")}>
          3
        </button>
        <button id="add" onClick={() => operator("+")}>
          +
        </button>
        <button className="number" id="zero" onClick={() => display("0")}>
          0
        </button>
        <button id="decimal" onClick={decimal}>
          .
        </button>
        <button id="equals" onClick={equals}>
          =
        </button>
        <button id="subtract" onClick={() => operator("-")}>
          -
        </button>
      </div>
      <p className="footer">made by Pedro Martins</p>
    </main>
  );
}
