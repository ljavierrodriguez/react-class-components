import React, { useState } from 'react';

const AppFunc = props => {
    const [name, setName] = useState("Luis Rodriguez");

    return (
        <>
            <h1>Componente Funcional</h1>
            <p>{name}</p>
        </>
    )
}

export default AppFunc;