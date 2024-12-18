import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const headerMarqueeContext = [
        "Winners embrace hard work. They love the discipline of it, the trade-off they're making to win. Losers, on the other hand, see it as punishment. And that’s the difference.",
        "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
        "That which we persist in doing becomes easier for us to do; not that the nature of the thing itself is changed, but that our power to do is increased.",
        "Learning and innovation go hand in hand. The arrogance of success is to think that what you did yesterday will be sufficient for tomorrow.",
        "Study is not everything in life, but if you are unable to conquer study that's only a part of life, what can you be able to achieve in life?"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header marqueeContext={headerMarqueeContext}/>
            <div className="flex flex-grow">
                {/* <Sidebar /> */}
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;