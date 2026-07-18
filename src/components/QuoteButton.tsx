import { useNavigate } from 'react-router-dom';

const QuoteButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/cost-calculation')}
      // Replace the background color hex with your exact brand color
      className="bg-[#ffc000] text-[#1a1a1a] font-bold 
                 py-2 px-5 md:py-3 md:px-4 
                 text-sm md:text-base cursor-pointer


                 rounded-3xl shadow-md hover:shadow-lg 
                 transition-all duration-300 ease-in-out 
                 w-full sm:w-auto "
    >
      Get a <span className='hidden lg:inline-block'>Free</span>  Quote
    </button>
  );
};

export default QuoteButton;