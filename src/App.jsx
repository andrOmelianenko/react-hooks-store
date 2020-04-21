import React from 'react';
import { RootContextProvider } from './contexts/root';
import Canvas from './containers/canvas';

export default class App extends React.Component {
    render() {
        return (
            <RootContextProvider>
                <Canvas />
            </RootContextProvider>
        );
    }
};
