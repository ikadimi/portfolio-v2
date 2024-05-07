import { forwardRef } from "react";

function Home(_, ref) {
    return ( 
        <section ref={ref} className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
            <div className="flex flex-col ">
                <p className="text-2xl font-bold tracking-gap">ILIAS KADIMI</p>
                <h1 className="text-6xl font-bold">WEB DEVELOPER</h1>
                <p className="self-start font-thin">BASED IN PARIS</p>
            </div>
        </section>
    );
}

export default forwardRef(Home);