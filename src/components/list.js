import React from 'react';

export default ({list, _delete}) => {
    return (<ul>
        {
            list.map((value, index) => 
         
            <li key={index}>{value} <button onClick={() => _delete(index)}>Delete</button></li>
        
    )}
    </ul>);
};