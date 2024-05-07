import TextBlock from "./TextBlock";

function WorkCard({ title, description, stack, image, year, url }) {
    return (
        <article className="group bg-transparent grid grid-cols-2 gap-4 border border-gray-400 rounded-md px-4">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-between align-left py-12">
                    <h3 className="text-5xl font-bold text-white mb-8">{title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300 font-thin items-center">
                        {stack.map((technology) => (
                            <TextBlock key={technology} text={technology} />
                        ))}
                    </div>
                </div>
                <a href={url} target="_blank" className="flex text-white items-center py-4" rel="noreferrer">
                    <span>Website</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Arrow / Arrow_Up_Right_LG"><path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                </a>
            </div>
            <div className="text-white flex flex-col justify-around text-right">
                {/* <img src={image} alt={title} className="project-img-1 scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100"></img> */}
                {/* <p>{year}</p> */}
                
            </div>
        </article>
    );
}

export default WorkCard;