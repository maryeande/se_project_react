import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";
import "./ClothesSection.css";

function ClothesSection({ onCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__heading">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__button">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
