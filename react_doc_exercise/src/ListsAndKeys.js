import React, { Component } from 'react';

const numbers = [1, 2, 3, 4, 5];

/* Rendering Multiple componets */
function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>{listItem}</ul>
    );
}

class ListsAndKeys extends Component {
    render() {
        return (
            <div>
                <h2>Lesson 8: List and Keys | Multiple componets Rendering</h2>
                <NumberList numbers={numbers} />
            </div>
        );
    }
}

export default ListsAndKeys;
