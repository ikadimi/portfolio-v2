function TextBlock({ text }) {
    return (
        <div className="flex items-center justify-center w-fit px-4 py-2 bg-transparent border border-gray-400 rounded-lg">
            <p>{text}</p>
        </div>
    );
}

export default TextBlock;