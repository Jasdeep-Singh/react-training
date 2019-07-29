import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
export default ({list, _delete}) => {
    return (
        <ListGroup>
        
        {
            list.map((value, index) =>          
            <ListGroupItem key={index} style={{color:'white'}}>{value} <button onClick={() => _delete(index)}>Delete</button></ListGroupItem>
        )}
      </ListGroup>);
};