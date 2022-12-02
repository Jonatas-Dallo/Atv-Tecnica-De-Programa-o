import { Component } from 'react';
import Main_ from '../../component/MainHome';
import Navbar_ from '../../component/NavBar';
import './styles.css'

export class Home extends Component {
    render(){

        return (
            <section>
                <header>
                <Navbar_/>
                </header>
                <main>
                <Main_/>
                </main>               
            </section>
    );
}
}