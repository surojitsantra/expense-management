import ExpenseItem from "./ExpenseItem";
import "./css/ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </ul>
    </div>
  );
};
export default ExpenseList;
