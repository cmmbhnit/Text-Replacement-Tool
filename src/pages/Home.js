import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    console.log("🏠 Home component rendered");

    const buttonClass =
        "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg";

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="bg-white shadow-xl rounded-3xl p-8 text-center w-96">
                <h2 className="text-3xl font-bold text-gray-700 mb-4">🚀 Welcome!</h2>
                <p className="text-gray-500 mb-6">Choose an option to proceed</p>
                <div className="flex flex-col space-y-4">
                    <button onClick={() => navigate("/fill-the-gaps")} className={buttonClass} style={{ margin: 10 }}>
                        Fill The Gaps
                    </button>
                    <button onClick={() => navigate("/free-text")} className={buttonClass} style={{ margin: 10 }}>
                        Free Text
                    </button>
                    <button onClick={() => navigate("/multiple-choice")} className={buttonClass} style={{ margin: 10 }}>
                        Multiple choice
                    </button>
                    <button onClick={() => navigate("/true-or-false")} className={buttonClass} style={{ margin: 10 }}>
                        True or False
                    </button>
                    <button onClick={() => navigate("/match-the-pairs")} className={buttonClass} style={{ margin: 10 }}>
                        Match the pairs
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
