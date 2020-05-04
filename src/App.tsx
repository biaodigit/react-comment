import * as React from 'react';
import Header from '@/component/header'
import './App.scss'

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="App">app</div>
            </React.Fragment>
        )
    }
}

export default App;