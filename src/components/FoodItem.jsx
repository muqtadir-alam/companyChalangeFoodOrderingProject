import "../components/fooditem.css";

function FoodItem(props) {
  return (
    <>
      <div className="food-item-container">
        <div className="img-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/330px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            alt=""
          />
        </div>
        <p key={props.id}>{props.name}</p>
      </div>
    </>
  );
}

export default FoodItem;
