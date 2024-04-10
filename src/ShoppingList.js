import React from 'react';

function ShoppingList({shoppingList, setShoppingList}){
    return(
        <div className = "shopping-list">
            <h2>Shopping List</h2>
            <ul>
                {shoppingList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={() => setShoppingList([])}>Clear Shopping List</button>

        </div>
    );
}

export default ShoppingList;