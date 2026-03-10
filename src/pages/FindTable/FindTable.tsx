import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindTable.scss';
import db from '../../firebase';
import { collection, onSnapshot } from "firebase/firestore";

interface Guest {
  id: string;
  name: string;
  table: number;
}

const FindTable: React.FC = () => {
  const [guests, setGuests] = React.useState<Guest[]|any>([]);
  const [activeTab, setActiveTab] = useState<string>('/find-table');

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [foundUser, setFoundUser] = useState<Guest | null>(null);
  const [matchedUsers, setMatchedUsers] = useState<Guest[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
  const q = collection(db, "guest_list");

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const guestsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setGuests(guestsData||[]);
  });

  return () => unsubscribe();
}, []);



  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Searching for:', searchQuery);
    setHasSearched(true);
    
    // Search for all matching users in guests array
    const matches = guests.filter((guest :any)=> 
      guest.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    
    if (matches.length === 0) {
      setFoundUser(null);
      setMatchedUsers([]);
      setShowDropdown(false);
    } else if (matches.length === 1) {
      setFoundUser(matches[0]);
      setMatchedUsers([]);
      setShowDropdown(false);
    } else {
      // Multiple matches found - show dropdown
      setMatchedUsers(matches);
      setShowDropdown(true);
      setFoundUser(null);
    }
  };

  const handleUserSelect = (user: Guest) => {
    setFoundUser(user);
    setShowDropdown(false);
    setMatchedUsers([]);
  };

  const handleNavigation = (path: string) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div className="findtable-screen bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark min-h-screen relative overflow-x-hidden pb-24">

      {/* Decorative ornaments */}
      <div className="fixed top-0 left-0 w-32 h-32 md:w-48 md:h-48 z-0 pointer-events-none opacity-40 dark:opacity-20 text-primary">
        <svg className="w-full h-full transform -scale-x-100 rotate-180" fill="currentColor" viewBox="0 0 100 100">
          <path d="M10,10 Q50,10 50,50 T90,90 M10,30 Q30,30 30,50 M10,50 Q20,50 20,60" fill="none"
            stroke="currentColor" strokeWidth="2"></path>
          <path d="M90,10 C70,10 70,30 50,30 C30,30 30,50 10,50" fill="none" stroke="currentColor" strokeWidth="1">
          </path>
          <circle cx="20" cy="20" r="2"></circle>
          <circle cx="80" cy="15" r="3"></circle>
          <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" opacity="0.1"></path>
        </svg>
      </div>

      <div className="fixed top-0 right-0 w-32 h-32 md:w-48 md:h-48 z-0 pointer-events-none opacity-40 dark:opacity-20 text-primary">
        <svg className="w-full h-full transform rotate-180" fill="currentColor" viewBox="0 0 100 100">
          <path d="M10,10 Q50,10 50,50 T90,90 M10,30 Q30,30 30,50 M10,50 Q20,50 20,60" fill="none"
            stroke="currentColor" strokeWidth="2"></path>
          <path d="M90,10 C70,10 70,30 50,30 C30,30 30,50 10,50" fill="none" stroke="currentColor" strokeWidth="1">
          </path>
          <circle cx="20" cy="20" r="2"></circle>
          <circle cx="80" cy="15" r="3"></circle>
          <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" opacity="0.1"></path>
        </svg>
      </div>

      <div className="fixed bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 z-0 pointer-events-none opacity-40 dark:opacity-20 text-primary">
        <svg className="w-full h-full transform -scale-x-100" fill="currentColor" viewBox="0 0 100 100">
          <path d="M10,10 Q50,10 50,50 T90,90 M10,30 Q30,30 30,50 M10,50 Q20,50 20,60" fill="none"
            stroke="currentColor" strokeWidth="2"></path>
          <path d="M90,10 C70,10 70,30 50,30 C30,30 30,50 10,50" fill="none" stroke="currentColor" strokeWidth="1">
          </path>
          <circle cx="20" cy="20" r="2"></circle>
          <circle cx="80" cy="15" r="3"></circle>
          <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" opacity="0.1"></path>
        </svg>
      </div>

      <div className="fixed bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 z-0 pointer-events-none opacity-40 dark:opacity-20 text-primary">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
          <path d="M10,10 Q50,10 50,50 T90,90 M10,30 Q30,30 30,50 M10,50 Q20,50 20,60" fill="none"
            stroke="currentColor" strokeWidth="2"></path>
          <path d="M90,10 C70,10 70,30 50,30 C30,30 30,50 10,50" fill="none" stroke="currentColor" strokeWidth="1">
          </path>
          <circle cx="20" cy="20" r="2"></circle>
          <circle cx="80" cy="15" r="3"></circle>
          <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" opacity="0.1"></path>
        </svg>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 max-w-5xl flex flex-col items-center min-h-[80vh]">

        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl text-primary dark:text-primary mb-2">Find Your Table</h1>
          <div className="h-px w-24 bg-primary mx-auto opacity-50"></div>
          <p className="font-sans text-primary/80 dark:text-primary/70 text-sm md:text-base tracking-wide uppercase">
            Khanh Nhi &amp; Duc Cuong Wedding
          </p>
        </div>

        {/* Search Section */}
        <div className="w-full max-w-md mx-auto mb-12 relative group animate-fade-in delay-100">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-primary/20 p-2 flex items-center">
            <span className="material-icons text-primary/50 ml-3">search</span>
            <input
              className="w-full bg-transparent border-none focus:ring-0 text-primary dark:text-primary placeholder-primary/40 font-sans text-lg px-4 py-2"
              placeholder="Nhập tên của bạn..."
              type="text"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-transform active:scale-95 shadow-md ${
                searchQuery.trim()
                  ? 'bg-primary hover:bg-primary/90 text-white dark:text-white cursor-pointer'
                  : 'bg-primary text-white dark:text-white cursor-not-allowed opacity-50'
              }`}
              onClick={handleSearchSubmit}
              disabled={!searchQuery.trim()}
            >
              Tìm
            </button>
          </div>
          <p className="text-center text-xs mt-3 text-primary/60 dark:text-primary/50 italic">
            *Vui lòng nhập tên để tìm bàn của bạn
          </p>
        </div>

        {/* Dropdown for multiple matches */}
        {showDropdown && matchedUsers.length > 0 && (
          <div className="w-full max-w-md mx-auto mb-8 animate-fade-in delay-300">
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-xl border border-primary/20 overflow-hidden">
              <div className="p-4 border-b border-primary/10">
                <p className="text-sm text-primary/60 dark:text-primary/40 text-center">
                  Tìm thấy {matchedUsers.length} người trùng tên. Vui lòng chọn:
                </p>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {matchedUsers.map((user, index) => (
                  <button
                    key={user.id || index}
                    onClick={() => handleUserSelect(user)}
                    className="w-full px-4 py-3 text-left hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors border-b border-primary/5 last:border-b-0 flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-medium text-primary dark:text-primary group-hover:text-primary/80">
                        {user.name}
                      </p>
                    </div>
                    <span className="material-icons text-primary/40 group-hover:text-primary/60">
                      arrow_forward_ios
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        {hasSearched && foundUser && (
          <div className="w-full grid md:grid-cols-2 gap-8 items-start animate-fade-in delay-400">

            {/* Wedding Map */}
            <div className="order-2 md:order-1">
              <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-xl border border-primary/10 overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-center text-xl text-primary mb-6">Sơ đồ tiệc cưới</h3>
                  <div className="relative aspect-square bg-background-light dark:bg-background-dark rounded-lg border border-primary/10 p-4">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-12 bg-primary/20 dark:bg-primary/30 rounded-t-lg border-t border-l border-r border-primary flex items-center justify-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Stage</span>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-4 gap-4 mt-16 h-full pb-8">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-full border border-primary/30 flex items-center justify-center text-xs transition-all relative ${
                            i + 1 === foundUser.table 
                              ? 'bg-primary text-white dark:text-white shadow-lg shadow-primary/40 flex items-center justify-center font-bold scale-110 z-10 animate-pulse' 
                              : 'text-primary/50'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                          {i + 1 === foundUser.table && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-card-light dark:bg-card-dark text-primary text-xs px-2 py-1 rounded shadow border border-primary/20">
                              You are here
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="order-1 md:order-2">
              <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-xl border border-primary/20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 100 100">
                    <path d="M50 0 C50 0 70 30 100 30 C70 30 70 60 50 100 C30 60 30 30 0 30 C30 30 50 0 50 0 Z">
                    </path>
                  </svg>
                </div>

                <div className="relative z-10 p-8 md:p-12 text-center">
                  <p className="font-display text-3xl text-primary/60 mb-2">Welcome</p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">{foundUser.name}</h2>

                  <div className="my-6">
                    <div className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 border-double border-primary/30 bg-background-light dark:bg-background-dark">
                      <span className="text-xs uppercase tracking-wider text-primary/60 dark:text-primary/40 mb-1">Bàn số</span>
                      <span className="font-serif text-5xl font-bold text-primary">{String(foundUser.table).padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-primary/80 dark:text-primary/70">
                    <p className="text-sm italic">
                      "Cảm ơn bạn đã đến chung vui cùng chúng tôi!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Show message when user not found */}
        {hasSearched && !foundUser && !showDropdown && (
          <div className="w-full max-w-md mx-auto text-center animate-fade-in">
            <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-xl border border-primary/20 p-8">
              <span className="material-icons text-4xl text-primary/40 mb-4">search_off</span>
              <p className="text-primary/60 dark:text-primary/40 text-lg">
                Không tìm thấy thông tin của bạn. Vui lòng kiểm tra lại tên hoặc liên hệ với cô dâu chú rể.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#f2ede9] border-t border-[#DCC8BC] z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
        <ul className="flex justify-around items-center h-16 px-2">
          <li className="flex-1">
            <button
              onClick={() => handleNavigation('/')}
              className={`flex flex-col items-center justify-center h-full w-full hover:bg-black/5 transition-colors relative ${
                activeTab === '/' ? 'text-primary bg-white/30' : 'text-[#af897c]'
              }`}
            >
              {activeTab === '/' && <span className="absolute top-0 left-0 w-full h-0.5 bg-[#af897c]"></span>}
              <span className="material-symbols-outlined text-2xl mb-0.5">home</span>
              <span className="text-[10px] font-medium font-body uppercase tracking-wider">Wedding</span>
            </button>
          </li>
          <li className="flex-1">
            <button
              onClick={() => handleNavigation('/find-table')}
              className={`flex flex-col items-center justify-center h-full w-full hover:bg-black/5 transition-colors relative ${
                activeTab === '/find-table' ? 'text-primary bg-white/30' : 'text-[#af897c]'
              }`}
            >
              {activeTab === '/find-table' && <span className="absolute top-0 left-0 w-full h-0.5 bg-[#af897c]"></span>}
              <span className="material-symbols-outlined text-2xl mb-0.5">table_restaurant</span>
              <span className="text-[10px] font-medium font-body uppercase tracking-wider">Tìm bàn</span>
            </button>
          </li>
          <li className="flex-1">
            <button
              onClick={() => handleNavigation('/timeline')}
              className={`flex flex-col items-center justify-center h-full w-full hover:bg-black/5 transition-colors relative ${
                activeTab === '/timeline' ? 'text-primary bg-white/30' : 'text-[#af897c]'
              }`}
            >
              {activeTab === '/timeline' && <span className="absolute top-0 left-0 w-full h-0.5 bg-[#af897c]"></span>}
              <span className="material-symbols-outlined text-2xl mb-0.5">list_alt</span>
              <span className="text-[10px] font-medium font-body uppercase tracking-wider">Thông tin</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FindTable;
