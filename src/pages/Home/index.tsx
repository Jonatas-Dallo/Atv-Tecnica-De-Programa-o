import Main_ from '../../component/MainHome';
import Navbar_ from '../../component/NavBar';
import './styles.css'

function Home(){
    return (
        <section>
            <header>
            <Navbar_/>
            </header>
            <main>
            <Main_/>
            </main>               
        </section>
);}

export default Home;