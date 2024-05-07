import WorkCard from "../components/WorkCard";
import { forwardRef } from 'react';

function WorkHistory(_, ref) {
    const projects = [
        {
            title: 'Conforama',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stack: ['Angular', 'Spartacus', 'RxJs', 'Typescript', 'Javascript', 'SCSS', 'Hybris'],
            image: '/Conforama.png',
            year: '2024',
            url: 'https://www.conforama.ch/'
        }, {
            title: 'Jardiland',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stack: ['Nuxtjs', 'Vuejs', 'Typescript', 'Vuex', 'SCSS', 'Nodejs'],
            image: '/Jardiland.png',
            year: '2023',
            url: 'https://www.jardiland.com/'
        }, {
            title: 'Gammvert',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stack: ['Vuejs', 'Nuxtjs', 'Typescript', 'Vuex', 'SCSS', 'Nodejs'],
            image: '/Gammvert.png',
            year: '2023',
            url: 'https://www.gammvert.fr/'
        }, {
            title: 'Nespresso',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stack: ['React', 'Redux', 'Typescript', 'Javascript', 'SCSS', 'Nodejs'],
            image: '/Nespresso.png',
            year: '2021',
            url: 'https://www.nespresso.com/'
        },
    ]
    return (
        <section ref={ref} className="px-16 pb-32 flex flex-col items-center justify-center portfolio-wrapper bg-gray-950">
            <div className="no-scrollbar overflow-hidden pb-[80px] w-full overflow-x-hidden">
                <div className="flex items-center gap-[10px] mt-[100px]">
                    <h2 className="text-6xl font-bold text-white whitespace-nowrap">SELECTED WORKS</h2>
                </div>
            </div>
            <div className="flex flex-col w-full gap-12">
                {projects.map((project) => (
                    <WorkCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

export default forwardRef(WorkHistory);