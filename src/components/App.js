import React from 'react';
import Display from './Display';
import '../style/Style.css';

class App extends React.Component {

    render() {
        return (
                <div className="Calculator">
                    <Display />
                </div>
        );
    }
}

export default App;