import React from 'react';
import { useCardContext } from '../../contexts/card';

const Card = () => {
    const { state, actions } = useCardContext();
    const { addRule, deleteRule } = actions;
    const { rules, name } = state;
    console.log('card state', state);

    const handleAddRule = () => addRule({ id: 'new_rule' });
    const handleDeleteRule = () => deleteRule('new_rule')

    return (
        <div
            style={{
                border: '1px solid #ccc', 
                padding: '10px 5px',
                margin: '10px 0',
            }}
        >
            <span style={{ marginRight: '20px' }}>DS item {name}</span>
            {
                rules.length
                    ? (<button onClick={handleDeleteRule}>Del rule</button>)
                    : (<button onClick={handleAddRule}>Add rule</button>)
            }
        </div>
    );
}

export default Card;
