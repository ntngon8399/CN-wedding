import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';


const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const openWeddingMap = (url: string) => () => {
    window.open(url, '_blank');
  };
  return (
    <div className="bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark min-h-screen flex flex-col items-center justify-center relative transition-colors duration-300 pb-20 md:pb-0">
      <div className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-overlay z-0 bg-paper-texture dark:bg-dark-texture"></div>

      <main className="relative z-10 w-full max-w-lg md:max-w-2xl bg-white/40 dark:bg-black/20 backdrop-blur-sm shadow-xl dark:shadow-black/50 md:my-10 md:rounded-2xl border border-[#DCC8BC] dark:border-[#3E3028] overflow-hidden min-h-screen md:min-h-[90vh]">

        {/* Decorative ornaments */}
        <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 opacity-80 pointer-events-none text-primary-dark/40 dark:text-primary-dark/60">
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
            <path d="M10,10 Q40,10 50,30 T90,50 M10,10 Q10,40 30,50 T50,90 M20,20 Q40,20 50,40" fill="none"
              stroke="currentColor" strokeWidth="1.5"></path>
            <path d="M5,5 L15,5 L15,15 L5,15 Z" fill="currentColor" opacity="0.3"></path>
            <circle cx="25" cy="25" fill="currentColor" r="2"></circle>
            <path d="M90,10 C80,20 60,10 50,30 C40,50 30,20 10,90" fill="none" stroke="currentColor" strokeDasharray="2,2"
              strokeWidth="1"></path>
            <path d="M0,0 C30,0 50,20 60,60 C40,40 20,40 0,60 Z" fill="currentColor" opacity="0.1"></path>
            <path d="M0,0 C0,30 20,50 60,60 C40,40 40,20 60,0 Z" fill="currentColor" opacity="0.1"></path>
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-80 pointer-events-none text-primary-dark/40 dark:text-primary-dark/60 ornament-flip-x">
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
            <path d="M10,10 Q40,10 50,30 T90,50 M10,10 Q10,40 30,50 T50,90 M20,20 Q40,20 50,40" fill="none"
              stroke="currentColor" strokeWidth="1.5"></path>
            <path d="M5,5 L15,5 L15,15 L5,15 Z" fill="currentColor" opacity="0.3"></path>
            <circle cx="25" cy="25" fill="currentColor" r="2"></circle>
            <path d="M90,10 C80,20 60,10 50,30 C40,50 30,20 10,90" fill="none" stroke="currentColor" strokeDasharray="2,2"
              strokeWidth="1"></path>
            <path d="M0,0 C30,0 50,20 60,60 C40,40 20,40 0,60 Z" fill="currentColor" opacity="0.1"></path>
            <path d="M0,0 C0,30 20,50 60,60 C40,40 40,20 60,0 Z" fill="currentColor" opacity="0.1"></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 opacity-80 pointer-events-none text-primary-dark/40 dark:text-primary-dark/60 ornament-flip-y">
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
            <path d="M10,10 Q40,10 50,30 T90,50 M10,10 Q10,40 30,50 T50,90 M20,20 Q40,20 50,40" fill="none"
              stroke="currentColor" strokeWidth="1.5"></path>
            <path d="M5,5 L15,5 L15,15 L5,15 Z" fill="currentColor" opacity="0.3"></path>
            <circle cx="25" cy="25" fill="currentColor" r="2"></circle>
            <path d="M90,10 C80,20 60,10 50,30 C40,50 30,20 10,90" fill="none" stroke="currentColor" strokeDasharray="2,2"
              strokeWidth="1"></path>
            <path d="M0,0 C30,0 50,20 60,60 C40,40 20,40 0,60 Z" fill="currentColor" opacity="0.1"></path>
            <path d="M0,0 C0,30 20,50 60,60 C40,40 40,20 60,0 Z" fill="currentColor" opacity="0.1"></path>
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-80 pointer-events-none text-primary-dark/40 dark:text-primary-dark/60 ornament-flip-xy">
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
            <path d="M10,10 Q40,10 50,30 T90,50 M10,10 Q10,40 30,50 T50,90 M20,20 Q40,20 50,40" fill="none"
              stroke="currentColor" strokeWidth="1.5"></path>
            <path d="M5,5 L15,5 L15,15 L5,15 Z" fill="currentColor" opacity="0.3"></path>
            <circle cx="25" cy="25" fill="currentColor" r="2"></circle>
            <path d="M90,10 C80,20 60,10 50,30 C40,50 30,20 10,90" fill="none" stroke="currentColor" strokeDasharray="2,2"
              strokeWidth="1"></path>
            <path d="M0,0 C30,0 50,20 60,60 C40,40 20,40 0,60 Z" fill="currentColor" opacity="0.1"></path>
            <path d="M0,0 C0,30 20,50 60,60 C40,40 40,20 60,0 Z" fill="currentColor" opacity="0.1"></path>
          </svg>
        </div>

        <div className="absolute inset-4 md:inset-6 border border-[#DCC8BC] dark:border-[#5D4037] pointer-events-none opacity-50"></div>

        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 flex flex-col items-center justify-between min-h-full h-full">

          {/* Header Section */}
          <div className="text-center w-full space-y-6 animate-fade-in">
            <div className="flex justify-center mb-2">
              <span className="material-icons-outlined text-accent dark:text-primary-dark text-2xl opacity-60">favorite</span>
            </div>
            <h2 className="font-script text-3xl md:text-5xl text-accent dark:text-[#C4A484] tracking-wide transform -rotate-2">Wedding Invitation</h2>
            <h1 className="font-display text-2xl md:text-4xl text-primary-dark font-bold mt-4 tracking-wider uppercase leading-snug">
              Khanh Nhi <span className="mx-2 text-xl align-middle text-accent">&amp;</span> Duc Cuong
            </h1>
            <p className="font-serif text-sm md:text-base text-gray-600 dark:text-gray-300 italic mt-4 max-w-xs mx-auto">
              Chúng tôi rất vui mừng khi được mời bạn tham gia vào lễ cưới của chúng tôi
            </p>
          </div>

          {/* Image Section */}
          <div className="my-8 md:my-10 relative animate-fade-in delay-100">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-accent/10 dark:bg-accent/5 rounded-full blur-2xl z-0"></div>
            <img
              alt="Illustration of bride and groom walking away holding hands"
              className="w-48 h-auto md:w-56 relative z-10 mix-blend-multiply dark:mix-blend-normal dark:opacity-90 rounded-full border-4 border-white/50 dark:border-white/10 shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASwmyEIveow5R_hmWM3YoQb9xLsXcnnAB9QfREhlnpaXoa2nWtvsdbbz7Sg26rpVvdAIxNLSX1Ns6e8G47IGtacKAJzAhHv6tj5gsaQOs__v_J1nzLOjXUtLBIHdquGi69ydaCC-7C7t1M0J1dUUJlxY2-_-jM21-0x6gXD7S7BgYcGtFuAKeyZS6dXMjYz7YJL1I1irZhEDofYgxbA_fAfJaP6r_t8MV6lm7Kj5bmEWU6_No0vTArzeOcGvqvSo5OhyoJkAYGpwnh"
              style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
            />
          </div>

          {/* Details Section */}
          <div className="text-center w-full space-y-8 animate-fade-in delay-200">
            {/* Time Details */}
            <div className="space-y-2">
              <h3 className="font-display text-xl text-primary-dark font-semibold tracking-widest uppercase border-b border-primary/20 pb-1 inline-block px-4">Thời gian</h3>
              <div className="font-script text-2xl md:text-3xl text-gray-700 dark:text-[#D7C0AE] mt-2">
                15 <span className="mx-1 text-sm font-sans text-accent">/</span> 03 <span className="mx-1 text-sm font-sans text-accent">/</span> 2026
              </div>
              <div className="text-lg font-serif italic text-gray-500 dark:text-gray-400">
                VOW diễn ra lúc 17:15
              </div>
              <div className="text-lg font-serif italic text-gray-500 dark:text-gray-400">
                Tiệc cưới diễn ra lúc 18:00
              </div>
            </div>

            {/* Separator */}
            <div className="flex items-center justify-center space-x-2 text-accent/50 dark:text-accent/30">
              <span className="h-px w-12 bg-current"></span>
              <span className="material-icons-outlined text-sm">favorite</span>
              <span className="h-px w-12 bg-current"></span>
            </div>

            {/* Location Details */}
            <div className="space-y-2">
              <h3 className="font-display text-xl text-primary-dark font-semibold tracking-widest uppercase border-b border-primary/20 pb-1 inline-block px-4">Địa điểm</h3>
              <div className="font-serif text-lg text-gray-700 dark:text-[#D7C0AE]">
                Hidden Heaven
              </div>
              <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">
                393/21 Bình Quới, Phường 28, Bình Thạnh
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex justify-center gap-12 md:gap-24 text-center border-t border-primary/10 dark:border-primary/20 mt-4 animate-fade-in delay-300">
            <div className="flex flex-col items-center group cursor-pointer" onClick={openWeddingMap('https://maps.app.goo.gl/LG8RWcHCBSP9nAoF6')}>
              <div className="w-12 h-12 rounded-full bg-[#f8f5f2] dark:bg-[#3E3028] flex items-center justify-center shadow-sm mb-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary-dark dark:text-[#C4A484]">
                <span className="material-icons-outlined text-xl">map</span>
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-wide font-medium text-gray-600 dark:text-gray-400">Chỉ đường</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer" onClick={openWeddingMap('https://forms.gle/Ce3usWsDS3f3L5nX6')}>
              <div className="w-12 h-12 rounded-full bg-[#f8f5f2] dark:bg-[#3E3028] flex items-center justify-center shadow-sm mb-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary-dark dark:text-[#C4A484]">
                <span className="material-icons-outlined text-xl">check_circle</span>
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-wide font-medium text-gray-600 dark:text-gray-400">Xác nhận tham dự</span>
            </div>
          </div>
        </div>

        {/* Footer Icon */}
        <div className="flex justify-center mt-8 animate-fade-in delay-400">
          <span className="material-icons-outlined text-accent dark:text-primary-dark text-2xl opacity-60">spa</span>
        </div>
      </main>

      {/* Music Button */}
      <button className="fixed bottom-24 right-6 z-50 bg-primary dark:bg-[#C4A484] text-white dark:text-background-dark p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none ring-2 ring-offset-2 ring-primary dark:ring-offset-background-dark hidden md:block">
        <span className="material-icons-outlined animate-spin-slow">music_note</span>
      </button>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#f2ede9] border-t border-[#DCC8BC] z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
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

export default Home;
