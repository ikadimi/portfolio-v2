import AboutCard from "../components/AboutCard";
import Toolkit from "../components/Toolkit";
import { forwardRef } from 'react';


function About(_, ref) {
    return (
        <section ref={ref} className="min-h-screen bg-gray-950 text-white flex flex-col justify-center p-8">
            <div className="grid grid-cols-2 text-left pt-8 gap-8">
                <AboutCard />
                <Toolkit />
            </div>
        </section>
        

    );
}

export default forwardRef(About);