import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/LandingPage';
import { RoomPage } from './components/RoomPage';
import {
    AppContainer,
    AppHeader,
    Footer
} from './AppStyles';

function App() {
    return (
        <AppContainer>
            <AppHeader>
                <i className="fas fa-question-circle"></i>
                Triple Trivia
            </AppHeader>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/room" element={<RoomPage />} />
                </Routes>
            </BrowserRouter>
            <Footer>
                © 2023 Fossibly the Best Game Ever. All Rights Reserved.
            </Footer>
        </AppContainer>
    );
}


export default App;
