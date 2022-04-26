import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    props.onAddExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
