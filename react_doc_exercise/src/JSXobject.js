import React, { Component } from 'react';

const element1 = (
    <h3 className="greeting">
        element1 & element2 are same.
    </h3>
);

const element2 = React.createElement(
    'h3',
    {className: 'greeting'},
    'element1 & element2 are same.'
);

class JSXobject extends Component {
    render() {
        return (
            <div>
                <h2>Lesson 3: JSX Object</h2>
                {element1}
                {element2}
            </div>
        );
    }
}

export default JSXobject;
