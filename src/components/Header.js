function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-main px-3 pb-0 pt-1 d-flex align-items-end">
            <h1 className="header text-primary navbar-brand">Medication Center</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="pb-0 mb-0 collapse navbar-collapse" id="collapsibleNavbar" style={{height: '100%'}}>
                <ul className="navbar-nav mb-0 h-100 pb-0">
                    <li className="nav-item active h-100 p-1 mr-1">My Medications</li>
                    <li className="nav-item mr-1 p-1">Schedule</li>
                    <li className="nav-item p-1">Resources</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;