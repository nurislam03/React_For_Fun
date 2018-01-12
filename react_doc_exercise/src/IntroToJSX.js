import React, { Component } from 'react';

function formatWord(temp) {
    return temp.firtstWord + ' ' + temp.lastWord;
}

/* creating element in different Way */
const element1 = <h2>I'm Nur Islam</h2>;

const element2 = {
    firtstWord: 'Happy',
    lastWord  : 'Coding'
};

const element3 = (
    <h3> Again!!! {formatWord(element2)} </h3>
);

class IntroToJSX extends Component {
    render() {
        return (
            <div>
                <h2> Lesson 2 : IntroToJSX </h2>
                {element1}
                <h2> {formatWord(element2)} </h2>
                {element3}
            </div>
        );
    }
}

export default IntroToJSX;
