import React from 'react';
export default ({list, _delete, _update}) => {
    return (
        <ul>        
        {
            list.map((value, index) =>          
                <li key={index}>{value.text}
                <button onClick={() => _update(value)}>Update</button>
                <button onClick={() => _delete(value.id)}>Delete</button>
                </li>
            )
        }
      </ul>
      );
};