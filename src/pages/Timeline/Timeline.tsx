import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Timeline.scss';

const Timeline: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const timelineEvents = [
    {
      time: "16:45",
      title: "Đón Khách",
      subtitle: "Sign & Welcome",
      description: "Chụp hình lưu niệm cùng cô dâu chú rể và thưởng thức tiệc trà nhẹ nhàng tại sảnh đón khách.",
      icon: "photo_camera"
    },
    {
      time: "17:15",
      title: "Cử Hành Hôn Lễ",
      subtitle: "The Ceremony",
      description: "Khoảnh khắc thiêng liêng trao nhẫn và lời thề nguyện trăm năm.",
      icon: "diamond"
    },
    {
      time: "18:00",
      title: "Khai Tiệc",
      subtitle: "Dinner Time",
      description: "Cùng nâng ly chúc phúc và thưởng thức thực đơn đặc biệt đã được chuẩn bị kỹ lưỡng.",
      icon: "restaurant"
    },
    {
      time: "20:00",
      title: "After-wedding Party",
      subtitle: "After Party",
      description: "Hòa mình vào âm nhạc, các trò chơi vui nhộn.",
      icon: "queue_music"
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 min-h-screen relative overflow-x-hidden pb-20">
      <div className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-overlay z-0 bg-paper-texture dark:bg-dark-texture"></div>
      
      <div className="container mx-auto px-4 py-12 max-w-lg relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-2">Wedding Timeline</h2>
          <h1 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest text-text-light dark:text-text-dark mt-4 border-b-2 border-primary border-opacity-30 inline-block pb-2">
            Chương Trình Tiệc Cưới
          </h1>
          <p className="mt-4 text-sm font-light italic opacity-80">
            Hãy cùng chúng tôi lưu lại những khoảnh khắc đẹp nhất
          </p>
        </header>
        <div className="relative px-2">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`flex gap-6 mb-12 timeline-item animate-fade-in delay-${(index + 1) * 100} group`}
            >
              <div className="flex flex-col items-center relative timeline-line min-w-[60px]">
                <div className="w-10 h-10 rounded-full bg-paper-light dark:bg-paper-dark border-2 border-primary flex items-center justify-center shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-outlined text-primary text-xl">{event.icon}</span>
                </div>
              </div>
              
              <div className="pt-1 flex-1 bg-paper-light dark:bg-paper-dark p-6 rounded-lg shadow-sm border border-primary/10 dark:border-primary/20 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-bold text-primary">{event.title}</h3>
                  <span className="font-sans font-bold text-lg text-text-light dark:text-text-dark">{event.time}</span>
                </div>
                <div className="font-script text-2xl text-primary/70 mb-2">{event.subtitle}</div>
                <p className="text-sm opacity-80 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 opacity-60">
          <div className="flex items-center gap-4 text-primary">
            <div className="h-px w-16 bg-current"></div>
            <span className="text-2xl">❧</span>
            <div className="h-px w-16 bg-current"></div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#f2ede9] border-t border-[#DCC8BC] z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <ul className="flex justify-around items-center h-16 px-2">
          <li className="flex-1">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex flex-col items-center justify-center h-full w-full text-[#af897c] hover:bg-black/5 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl mb-0.5">home</span>
              <span className="text-[10px] font-medium font-body uppercase tracking-wider">Wedding</span>
            </button>
          </li>
          <li className="flex-1">
            <button 
              onClick={() => handleNavigation('/find-table')}
              className="flex flex-col items-center justify-center h-full w-full text-[#af897c] hover:bg-black/5 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl mb-0.5">table_restaurant</span>
              <span className="text-[10px] font-medium font-body uppercase tracking-wider">Tìm bàn</span>
            </button>
          </li>
          <li className="flex-1">
            <button 
              onClick={() => handleNavigation('/timeline')}
              className="flex flex-col items-center justify-center h-full w-full text-[#af897c] hover:bg-black/5 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl mb-0.5">list_alt</span>
              <span className="text-[10px] font-medium font-body uppercase tracking-wider">Thông tin</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Timeline;
