import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    console.log("🏠 Home component rendered");

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Welcome to Our App</h2>
                <p className="text-gray-500 mb-6">Choose an option to proceed</p>
                <button
                    onClick={() => navigate("/fill-the-blank")}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                    Go to Fill The Blank
                </button>
            </div>
        </div>
    );
}

export default Home;