import { For, createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Cards from '../components/Cards';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  const cardInfo = {
    utang: 'Rp.500.000',
    cardHolder: 'Albert Maulana',
    pinjaman: 'Rp.10.000'
  };

  const transactions = [
    { name: 'Bayar Utang Alfa', date: '28 January 2021', amount: '-850', color: 'text-red-500' },
    { name: 'Deposit Paypal', date: '26 January 2021', amount: '+2,500', color: 'text-green-500' },
    { name: 'Menabung Uang', date: '21 January 2021', amount: '+5,600', color: 'text-green-500' }
  ];

  const weeklyActivity = [
    { day: 'Sat', utang: 180, piutang: 300 },
    { day: 'Sun', utang: 250, piutang: 500 },
    { day: 'Mon', utang: 230, piutang: 450 },
    { day: 'Tue', utang: 300, piutang: 600 },
    { day: 'Wed', utang: 220, piutang: 520 },
    { day: 'Thu', utang: 240, piutang: 480 },
    { day: 'Fri', utang: 260, piutang: 460 }
  ];

  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  const balanceHistory = [200, 400, 650, 500, 700, 450, 800];

  return (
    <div class="relative bg-[#f8fafc] min-h-screen">
      {/* Sidebar absolute mode */}
      {sidebarOpen() && (
        <div class="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div
            class="absolute left-0 top-0 bottom-0 w-2/3 sm:w-1/2 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}

      <div class="md:flex">
        <div class="hidden md:block">
          <Sidebar />
        </div>
        <div class="flex-1">
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen())} title="Dashboard" />
          <div class="p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* My Cards */}
              <Cards
                utang={cardInfo.utang}
                pinjaman={cardInfo.pinjaman}
                cardHolder={cardInfo.cardHolder}
              />

              {/* Recent Transactions */}
              <div class="bg-white p-6 rounded-xl shadow">
                <h2 class="text-lg font-semibold mb-4">Recent Transaction</h2>
                <For each={transactions}>{(trx) => (
                  <div class="flex justify-between items-center py-2 last:border-none">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div>
                        <p class="text-sm font-medium">{trx.name}</p>
                        <p class="text-xs text-gray-400">{trx.date}</p>
                      </div>
                    </div>
                    <p class={`text-sm font-bold ${trx.color}`}>{trx.amount}</p>
                  </div>
                )}</For>
              </div>
            </div>

            {/* Weekly Activity */}
            <div class="mt-8 bg-white p-6 rounded-xl shadow">
              <h2 class="text-lg font-semibold mb-4">Weekly Activity</h2>
              <div class="grid grid-cols-7 gap-4 h-64 items-end">
                <For each={weeklyActivity}>{(day) => (
                  <div class="flex flex-col items-center justify-end h-full">
                    <div class="flex gap-1 items-end h-full">
                      <div
                        class="w-4 bg-yellow-300 rounded-t"
                        style={{ height: `${day.utang * 0.3}px` }}
                      ></div>
                      <div
                        class="w-4 bg-orange-400 rounded-t"
                        style={{ height: `${day.piutang * 0.3}px` }}
                      ></div>
                    </div>
                    <span class="text-sm mt-2">{day.day}</span>
                  </div>
                )}</For>
              </div>
              <div class="flex justify-center gap-4 mt-4 text-sm">
                <div class="flex items-center gap-1">
                  <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <span>Utang</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span>Piutang</span>
                </div>
              </div>
            </div>

            {/* Balance History */}
            <div class="mt-8 bg-white p-6 rounded-xl shadow">
              <h2 class="text-lg font-semibold mb-4">Balance History</h2>
              <svg viewBox="0 0 300 100" class="w-full h-24">
                <polyline
                  fill="none"
                  stroke="#facc15"
                  stroke-width="3"
                  points={balanceHistory.map((val, i) => `${i * 50},${100 - val / 10}`).join(' ')}
                />
              </svg>
              <div class="flex justify-between text-sm text-gray-500 mt-2">
                <For each={months}>{(month) => <span>{month}</span>}</For>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
