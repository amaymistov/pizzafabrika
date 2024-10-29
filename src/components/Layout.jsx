import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <header className='container m-auto pb-5'>
                <nav className='flex gap-3'>
                    <Link to='/'>Главная</Link>
                </nav>
            </header>
            <main className='container m-auto'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
