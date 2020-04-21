import React from 'react';
import Card from '../card';
import { useRootContext } from '../../contexts/root';
import { CardContextProvider } from '../../contexts/card';

const Canvas = () => {
    const { state, actions } = useRootContext();
    const { getDataSecurity } = actions;

    console.log('root state', state);
    
    const list = state.dataSecurity.map(item => (
        <CardContextProvider
            key={item.id}
            initialState={item}
        >
            <Card />
        </CardContextProvider>
    ));

    return (
        <div>
            <h2>Data Security list: </h2>
            <button
                onClick={getDataSecurity}
            >
                Trigger get DS
            </button>
            <div>
                {list}
            </div>
        </div>
    );
}

export default Canvas;
