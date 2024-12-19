import Layout from '../components/layout/Layout';       
import { MAIN_GREETINGS } from '../assets/static/constants';       

const MainPage = () => {

    return (
        <Layout>
            <div className="bg-blue-500 bg-[url('./assets/background/bg_paper_black.jpg')] bg-cover bg-center w-full h-screen">
                <div className='h-screen w-screen bg-cover'>
                    <div className='pt-5 mb-1 text-center'>
                        <h1 className='text-5xl lg:text-7xl font-Cursive font-bold'>{MAIN_GREETINGS.TITLE}</h1>
                    </div>
                    <div className='pt-1 mb-10 text-center'>
                        <div className='text-3xl lg:text-5xl font-Cursive font-bold text-red-900 underline decoration-2'>{MAIN_GREETINGS.SUB_TITLE}</div>
                    </div>
                    <div className='pt-5 mb-10 text-center'>
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-yellow-600">
                            <span>🎉</span>
                            <span>Celebrate</span>
                        </button>
                    </div>
                    <div className='pt-5 mb-10 text-center'>
                        <div className='text-3xl lg:text-5xl font-Chubby font-bold'>{MAIN_GREETINGS.EXPLAIN}</div>
                    </div>
                </div>
            </div>
    </Layout>
    );
}

export default MainPage;