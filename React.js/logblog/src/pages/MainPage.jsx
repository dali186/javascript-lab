import Layout from '../components/layout/Layout';       
import { MAIN_GREETINGS } from '../assets/static/constants';       
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="bg-blue-500 bg-[url('./assets/background/bg_paper_black.jpg')] bg-cover bg-center h-screen w-screen">
                <div className='h-screen w-screen bg-cover'>
                    <div className='pt-5 mb-1 text-center'>
                        <h1 className='text-5xl lg:text-7xl font-Cursive font-bold'>{MAIN_GREETINGS.TITLE}</h1>
                        <div className='text-3xl lg:text-5xl font-Cursive font-bold text-black'>{MAIN_GREETINGS.SUB_TITLE}</div>
                    </div>
                    <div className="pt-10 mb-2 text-center">
                        <div className="text-2xl font-Chubby">{MAIN_GREETINGS.EXPLAIN_HEADER}</div>
                            <div className="inline-block text-left">
                                <ul className="list-disc text-xl font-Chubby pl-6">
                                {MAIN_GREETINGS.EXPLAIN_LIST.map((list, index) => (
                                    <li key={index}>{list}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    <div className="flex justify-center pt-10 mt-10">
                        <button 
                            className="w-[300px] h-[300px] text-white text-5xl font-Cursive rounded-lg shadow-lg hover:backdrop-invert-0 
                            active:bg-black focus:outline-none transition duration-300 backdrop-invert"
                            type="button"
                            onClick={() => navigate(MAIN_GREETINGS.SELECT_PAGE_URL)}
                        >
                            {MAIN_GREETINGS.START_BTN_MSG}
                        </button>
                        </div>
                    <div className='pt-10 mt-10 text-center'>
                        <div className='text-3xl lg:text-5xl font-Chubby font-bold'>{MAIN_GREETINGS.EXPLAIN_FOOTER}</div>
                    </div>
                </div>
            </div>
    </Layout>
    );
}

export default MainPage;