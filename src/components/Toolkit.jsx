import TextBlock from "./TextBlock";

function Toolkit() {
    const Toolkit = ['Javascript', 'Typescript', 'React', 'Vue'];
    return (
    <section className="grid grid-flow-row gap-8">
        <h3 className="text-3xl font-bold">My Toolkit</h3>
        <div className="flex flex-wrap gap-4 font-bold">
            {[...Toolkit, ...Toolkit, ...Toolkit].map(
                (tool) => <TextBlock key={tool} text={tool} />
            )}
        </div>
    </section>
);
}

export default Toolkit;