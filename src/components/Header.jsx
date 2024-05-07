function Header({ homeRef, aboutRef, workHistoryRef, contactRef}) {
    function scrollToRef(ref) {
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <header className="absolute w-full text-white top-0 z-50 h-16 flex items-center justify-between px-6">
            <h2 className="text-3xl font-bold">IK</h2>
            <nav className="flex gap-6">
                <button onClick={() => scrollToRef(homeRef)} className="md:text-lg text:md font-bold">Home</button>
                <button onClick={() => scrollToRef(aboutRef)} className="md:text-lg text:md font-bold">About</button>
                <button onClick={() => scrollToRef(workHistoryRef)} className="md:text-lg text:md font-bold">Projects</button>
                <button onClick={() => scrollToRef(contactRef)} className="md:text-lg text:md font-bold">Contact</button>
            </nav>
        </header>
    );
}

export default Header;