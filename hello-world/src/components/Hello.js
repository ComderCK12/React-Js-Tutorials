import React from 'react'

const Hello = () => {
    // return (
    //     <div> Hello Duniya </div>
    // )

    // return React.createElement('div', null, 'Helloww Duniya !')
    // HTML tag to be rendered, Additional parameters, Child for HTML tag

    return React.createElement('div',
    {id: 'hello', class: 'dummyClass'},
    React.createElement('h1', null, 'Hello World from JSX'))

}

export default Hello