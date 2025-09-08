import { useState } from "react";

export default function Profile() {

  const [isOpen, setIsOpen] = useState(false);

const togglePopup = () => {
    setIsOpen(!isOpen);
};


  return (
    <div className="cart">
      <h2>Profile</h2>
    </div>
  );
}