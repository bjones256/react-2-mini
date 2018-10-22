import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" 
    disabled={props.canEdit === 'false'} 
    onChange={ (e) => props.update(e.target.value) }
    >
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}