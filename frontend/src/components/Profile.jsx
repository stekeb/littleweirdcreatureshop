import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const [isOpen, setIsOpen] = useState(false);

const togglePopup = () => {
    setIsOpen(!isOpen);
};


  return (
    <div className="profile">
      <h2>Profile</h2>
    </div>
  );
}