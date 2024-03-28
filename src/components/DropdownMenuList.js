import React from "react";

function DropDownMenuList({ isActive, setIsActive, styles, setValue, list }) {
  function handleClick(item) {
    setValue(item);
    setIsActive(false);
  }

  return (
    <div
      className={
        isActive === true ? styles.optionsActive : styles.optionsInactive
      }
    >
      {list.map((item) => (
        <div className={styles.option} onClick={() => handleClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default DropDownMenuList;
