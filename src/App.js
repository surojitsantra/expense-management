import Data from "./components/data/Data";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";
const App = () => {
  const [expenses, setNewExpenses] = React.useState(Data);

  const addExpenseHandler = (newExpense) => {
    newExpense = {
      ...newExpense,
      id: Data.length + 1,
    };

    setNewExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
