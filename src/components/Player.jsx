import { useState } from "react";

export default function Player({
  name = "#",
  symbol,
  isActivePlayer,
  onChangeName,
}) {
  const [nameState, updateName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing);
    setIsEditing((editing) => !editing); //React is scheduling
  }
  function nameChange(object) {
    //console.log(object);
    updateName(object.target.value);
    if (isEditing) onChangeName(symbol, nameState);
  }
  let playerName = <span className='player-name'>{nameState} </span>;
  if (isEditing) {
    playerName = (
      <input
        type='text'
        required
        placeholder={nameState}
        onChange={nameChange}
      />
    );
  }
  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
