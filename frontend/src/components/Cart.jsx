
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

const togglePopup = () => {
    setIsOpen(!isOpen);
};

  function addItem(creature) {
    setItems([...items, creature]);
  }
  return (
    <div className="cart">
      <h2>:male_mage: Warenkorb der magischen Kreaturen</h2>
      {items.length === 0 ? (
        <p>Dein Warenkorb ist leer</p>
      ) : (
        <ul>
          {items.map((creature, index) => (
            <li key={index}>
              {creature.name} – {creature.type} – :sparkles: {creature.price} Gold
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}