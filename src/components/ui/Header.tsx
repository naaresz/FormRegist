import { Home, Trophy, Users, Laptop, Mic, User } from "lucide-react";

const Header = () => {
  const menu = [
    { label: "Beranda", icon: Home },
    { label: "Competition", icon: Trophy },
    { label: "Seminar", icon: Users },
    { label: "Workshop", icon: Laptop },
    { label: "Talkshow", icon: Mic },
  ];

  return (
    <header className="bg-white shadow-sm px-8 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <img
          src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
          className="h-14"
        />

        <div className="flex items-center gap-6">
          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-2 text-gray-600 hover:text-red-700 cursor-pointer">
                <Icon size={18} />
                <span>{item.label}</span>
              </div>
            );
          })}

          <User size={22} className="text-red-900 cursor-pointer" />
        </div>

      </div>
    </header>
  );
};

export default Header;