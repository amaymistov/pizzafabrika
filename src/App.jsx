import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Layout from './components/Layout'
import EditPage from './pages/EditPage/EditPage'
import AddPage from './pages/AddPage/AddPage'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/edit/:id' element={<EditPage />} />
                <Route path='/add' element={<AddPage />} />
            </Route>
        </Routes>
    )
}

export default App
