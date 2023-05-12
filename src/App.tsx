import styles from './App.module.scss';
import { Navigation } from './components/navigation/navigation';
import Navigation_module from './components/navigation/navigation.module.scss';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { Projects } from './components/projects/projects';
import { Home } from './components/home/home';
import { Link } from 'react-router-dom';

function App() {
    return (
        <MemoryRouter>
            <div className={styles.App}>
                <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
            </div>
            <section id="home"></section>
            <section id="projects"></section>
        </MemoryRouter>
    );
}

export default App;
