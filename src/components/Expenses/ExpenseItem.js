import "./css/ExpenseItem.css";
import ExpenceDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItem;
