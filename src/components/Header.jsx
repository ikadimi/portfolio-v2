function Header({ homeRef, aboutRef, workHistoryRef, contactRef}) {
    function scrollToRef(ref) {
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <header className="absolute w-full text-white top-0 z-50 h-16 flex items-center justify-between px-6">
            <h2 className="text-3xl font-bold">IK</h2>
            <nav className="flex gap-6">
                <a onClick={() => scrollToRef(homeRef)} className="text-lg font-bold">Home</a> 
                <a onClick={() => scrollToRef(aboutRef)} className="text-lg font-bold">About</a> 
                <a onClick={() => scrollToRef(workHistoryRef)} className="text-lg font-bold">Projects</a>
                <a onClick={() => scrollToRef(contactRef)} className="text-lg font-bold">Contact</a>
            </nav>
        </header>
    );
}

export default Header;