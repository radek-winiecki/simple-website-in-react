import React, {Component} from "react";
import '../styles/App.css';
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header>
                        {<Header/>}
                    </header>
                    <main>
                        <aside>
                            {<Navigation/>}
                        </aside>
                        <section className="page">
                            {<Page/>}
                        </section>
                    </main>
                    <footer>
                        {<Footer/>}
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
