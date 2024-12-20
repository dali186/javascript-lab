import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { SELECT_GRETTINGS } from "../assets/static/constants";

const BrdWritePage = () => {
    const navigate = useNavigate();

    return (
    <Layout>
        <div className="bg-blue-500 bg-[url('./assets/background/bg_paper_black.jpg')] bg-cover bg-center h-screen w-screen">
            <div className="flex flex-col items-center justify-space-evenly min-h-screen pt-10">
                <h1 className="text-5xl md:text-7xl font-bold font-Cursive text-white mb-6 md:mb-8">
                    {SELECT_GRETTINGS.TITLE}
                </h1>
                <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                {/* 게시글 작성 버튼 */}
                <button
                    className="w-48 h-48 md:w-64 md:h-64 backdrop-invert text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:backdrop-invert-0 
                            focus:outline-none transition duration-300"
                    onClick={() => navigate("/brd/write")}
                >
                    게시글 작성
                </button>

                {/* 게시글 목록 버튼 */}
                <button
                    className="w-48 h-48 md:w-64 md:h-64 backdrop-invert text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:backdrop-invert-0 
                            focus:outline-none transition duration-300"
                    onClick={() => navigate("/brd/list")}
                >
                    게시글 목록
                </button>

                {/* 사용자 정보 버튼 */}
                <button
                    className="w-48 h-48 md:w-64 md:h-64 backdrop-invert text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:backdrop-invert-0 
                            focus:outline-none transition duration-300"
                    onClick={() => navigate("/user/info")}
                >
                    사용자 정보
                </button>
                </div>
            </div>
        </div>
    </Layout>
    );
}

export default BrdWritePage;