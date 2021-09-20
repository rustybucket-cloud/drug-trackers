function Header() {
    return (
        <header className="bg-main px-3 pt-1 d-flex">
            <h1 className="header text-primary">Medication Center</h1>
            <nav className="pb-0 mb-0">
                <ul className="navbar mb-0 h-100 pb-0">
                    <li className="navbar-brand active h-100 p-1">My Medications</li>
                    <li className="navbar-brand">Schedule</li>
                    <li className="navbar-brand">Resources</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;