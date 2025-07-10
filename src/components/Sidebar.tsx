import { useHref, A, useLocation } from "@solidjs/router";
import HomeIconA from "../assets/Yellow/home2.png";

const Sidebar = () => {
const location = useLocation();

  const menus = [
  { name: 'Dashboard', icon: '/src/assets/Gray/home 2.png' , Activeicon: HomeIconA, href: '/Dashboard' },
  { name: 'Transactions', icon: '/src/assets/Gray/transfer 1.png' , Activeicon: '/src/assets/Yellow/17-transfer.png', href: '/Transaction' },
  { name: 'Accounts', icon: '/src/assets/Gray/user 3 1.png' , Activeicon: '/src/assets/Yellow/user 3 1.png', href: '/Accounts' },
  { name: 'Add', icon: '/src/assets/Gray/economic-investment 1.png' , Activeicon: '/src/assets/Yellow/economic-investment 1.png', href: '/AddData' },
  { name: 'All Data', icon: '/src/assets/Gray/loan 1.png' , Activeicon: '/src/assets/Yellow/loan 1.png', href: '/AllData' },
  { name: 'Services', icon: '/src/assets/Gray/service 1.png' , Activeicon: '/src/assets/Yellow/service 1.png', href: '/Services' },
  { name: 'Setting', icon: '/src/assets/Gray/settings solid 1.png' , Activeicon: '/src/assets/Yellow/settings solid 1.png', href: '/Settings' },
];

  return (
    <div class="w-64 h-full bg-white shadow-lg p-6">
      <div class="flex gap-2">
        <img class="h-7.5" src="/src/assets/Logo-removebg-preview(1).png" alt="" />
        <h2 class="text-xl font-extrabold font-montserrat text-yellow-500 mb-8">Hutang-q</h2>
      </div>
      <ul class="space-y-11">
        {menus.map((menu) => {
          const isActive = location.pathname === menu.href;

          return (
            <li>
              <A
                href={menu.href}
                class={`flex items-center gap-3 cursor-pointer ${isActive ? 'text-yellow-500 font-bold' : 'text-gray-500 hover:text-yellow-400'}`}
              >
                <img
                  src={isActive ? menu.Activeicon : menu.icon}
                  alt={menu.name}
                  class="w-6 h-6"
                />
                <span class="text-md font-inter font-medium">{menu.name}</span>
              </A>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
