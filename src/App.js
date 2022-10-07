import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FeedbackList from "./components/feedbackList"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./components/context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"

function App() {
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className='container'>
            <Routes>
            <Route exact path='/' element={
                <>
                    <FeedbackForm></FeedbackForm>
                    <FeedbackStats />
                    <FeedbackList />
                </>
            }>
            </Route>

            <Route path='/about' element={<AboutPage/>}/>
            </Routes>
            <AboutIconLink/>
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App