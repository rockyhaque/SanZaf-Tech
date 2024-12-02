
const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl font-semibold py-4">{heading}</h3>
            <div className="flex gap-1 justify-center items-center">
                <h1 className="border-2 text-neutral-400 w-3"></h1>
                <h1 className="border-2 bg-customBlack w-8"></h1>
                <h1 className="border-2 text-neutral-400 w-3"></h1>
            </div>
        </div>
    );
};

export default SectionTitle;