import logo from '../assets/small_logo.png';

const SignInPage = () => {

    const greetByTime = () => {
        const current = new Date().getHours();
        const greetings = [
            { time: [0, 6], title: "Good Early Morning,", text: "Rise and shine!" },
            { time: [6, 12], title: "Good Morning,", text: "Let's make today amazing!" },
            { time: [12, 18], title: "Good Afternoon,", text: "How was your lunch?" },
            { time: [18, 21], title: "Good Evening,", text: "How was your day?" },
            { time: [21, 24], title: "Good Night,", text: "Sleep well and sweet dreams." },
        ];

        const { title, text } = greetings.find(
            (greet) => current >= greet.time[0] && current < greet.time[1]
        ) || { title: "Hello,", text: "Hope you're having a good time!" };

        return <>
        <p>{title}</p>
        <p>{text}</p>
        </>
    }

    return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img alt="Main Logo" src={logo} className="mx-auto h-10 w-auto"/>
            <div className='mt-10 text-left text-4xl font-Cursive tracking-tight text-gray-900'>
                {greetByTime()}
            </div>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form action='#' method='POST' className='space-y-6'>
                <div>
                    <label htmlFor='email' className='block text-sm/6 text-xl font-Cursive text-gray-900'>
                    Email address
                    </label>
                <div className='mt-2'>
                    <input id='email' name='email' type='email' required autoComplete='email'
                        className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                    />
                </div>
            </div>

            <div>
                <div className='flex items-center justify-between'>
                    <label htmlFor='password' className='block text-xl font-Cursive font-medium text-gray-900'>
                    Password
                    </label>
                    <div className='text-sm'>
                        <a href='#' className='font-semibold text-black-600 hover:text-gray-500'>
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className='mt-2'>
                    <input id='password' name='password' type='password' required autoComplete='current-password'
                        className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                    />
                </div>
            </div>

            <div>
                <button type='submit'
                    className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-Cursive text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600'
                >
                Sign in
                </button>
            </div>
        </form>

            <p className='mt-10 text-center text-lg text-gray-500 font-Cursive'>
                Not a member?{" "}
                <a href='#' className='font-semibold text-black hover:text-gray-500'>
                Sign Up
                </a>
            </p>
        </div>
    </div>
    );
};

export default SignInPage;
