import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import "./ClothesSection.css";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="clothes-section__heading">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__button">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        .
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // TODO: pass as prop
              // onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
