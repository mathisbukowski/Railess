import Single from "/logorailess-removebg.png";

const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div
                    className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-lineColor">
                    <img
                        className="w-20 mx-auto mt-[-3rem] bg-white border-2 border-lineColor rounded-lg"
                        src={Single}
                        alt="/"
                    />
                    <h2 className="text-2xl font-bold text-center py-8 text-textColor">Single User</h2>
                    <p className="text-center text-4xl font-bold text-textColor">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8 text-textColor">500 GB Storage</p>
                        <p className="py-2 border-b mx-8 text-textColor">1 Granted User</p>
                        <p className="py-2 border-b mx-8 text-textColor">Send up to 2 GB</p>
                    </div>
                    <button
                        className="bg-buttonColor w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-textColor">
                        Start Trial
                    </button>
                </div>
                <div
                    className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-lineColor">
                    <img
                        className="w-20 mx-auto mt-[-3rem] bg-white border-2 border-lineColor rounded-lg"
                        src={Single}
                        alt="/"
                    />
                    <h2 className="text-2xl font-bold text-center py-8 text-textColor">Single User</h2>
                    <p className="text-center text-4xl font-bold text-textColor">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8 text-textColor">500 GB Storage</p>
                        <p className="py-2 border-b mx-8 text-textColor">1 Granted User</p>
                        <p className="py-2 border-b mx-8 text-textColor">Send up to 2 GB</p>
                    </div>
                    <button
                        className="bg-buttonColor w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-textColor">
                        Start Trial
                    </button>
                </div>
                <div
                    className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-lineColor">
                    <img
                        className="w-20 mx-auto mt-[-3rem] bg-white border-2 border-lineColor rounded-lg"
                        src={Single}
                        alt="/"
                    />
                    <h2 className="text-2xl font-bold text-center py-8 text-textColor">Single User</h2>
                    <p className="text-center text-4xl font-bold text-textColor">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8 text-textColor">500 GB Storage</p>
                        <p className="py-2 border-b mx-8 text-textColor">1 Granted User</p>
                        <p className="py-2 border-b mx-8 text-textColor">Send up to 2 GB</p>
                    </div>
                    <button
                        className="bg-buttonColor w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-textColor">
                        Start Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
