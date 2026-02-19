interface StatProps {
  icon: string;
  text: React.ReactNode;
}

const StatBox: React.FC<StatProps> = ({ icon, text }) => (
  <div className="flex items-center justify-center space-x-6">
    <div className="bg-[#ffda6a] w-25 h-25 rounded-full flex items-center justify-center font-luxe font-bold text-3xl">
      {icon}
    </div>
    <div className="flex-1 text-base leading-snug font-inter">
      {text}
    </div>
  </div>
);

export default StatBox;