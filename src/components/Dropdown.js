import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DropDownMenuList from "./DropdownMenuList";

function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("Select");

  const menuOptions = ['Yes', 'No', 'Prefer Not To Say'];

  return (
    <div className={styles.dropdown}>
      <div className={styles.main}>
        <div className={styles.btnActive} onClick={()=> setIsActive(!isActive)}>
          <div>{value}</div>
          <div>
            {isActive === false ? (
              <FaChevronDown className={styles.icon} />
            ) : (
              <FaChevronUp onClick={() => setIsActive(!isActive)} />
            )}
          </div>
        </div>

        <DropDownMenuList styles={styles} isActive={isActive} setValue={setValue} list={menuOptions}  setIsActive={setIsActive}/>
      </div>
    </div>
  );
}

export default Dropdown;
