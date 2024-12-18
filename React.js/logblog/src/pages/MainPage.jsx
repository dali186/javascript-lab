import Layout from '../components/layout/Layout';

const MainPage = () => {

    const blogPosts = [
        { id: 1, title: "How to Start Your Day Right", date: "2024-12-15", summary: "Discover tips for a productive and happy morning routine." },
        { id: 2, title: "Top 10 JavaScript Tricks", date: "2024-12-10", summary: "Explore the most effective JavaScript features you should know." },
        { id: 3, title: "React Best Practices", date: "2024-12-05", summary: "Learn how to write clean and maintainable React code." },
    ];

    return (
       <Layout>
            <div className="bg-blue-500 bg-[url('./assets/background/bg_paper_black.jpg')] bg-cover bg-center w-full h-screen md:h-4/5">
                <div className='bg-main h-screen w-screen bg-cover'>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h1 className="text-4xl font-bold">안녕하세요</h1>
                        <p className="text-xl">이곳은 정중앙입니다.</p>
                    </div>
                </div>
            </div>
            
       </Layout>
    );
}

export default MainPage;