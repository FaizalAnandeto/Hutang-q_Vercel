import { createSignal } from 'solid-js';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const AllData = () => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  const stats = [
    { label: 'Utang', value: 'Rp.500.000', color: 'text-[#718EBF]'},
    { label: 'Piutang', value: 'Rp.10.000', color: 'text-[#FF82AC]'},
    { label: 'Total Utang', value: 'Rp.155.000', color: 'text-[#16DBCC]' }
  ];

  const loans = [
    { id: 1, name: 'Albertus Christ', type: 'Meminjamkan', method: 'Cash', date: '28 Jan, 12:30 AM', amount: 'Rp.10.000' },
    { id: 2, name: 'Kevin', type: 'Meminjamkan', method: 'Transfer', date: '25 Jan, 10:40 PM', amount: 'Rp.150.000' },
    { id: 3, name: 'Danendra Palas', type: 'Utang', method: 'Transfer', date: '20 Jan, 10:20 AM', amount: 'Rp.150.000' },
    { id: 4, name: 'Fatah Renjiro', type: 'Utang', method: 'Cash', date: '15 Jan, 03:29 PM', amount: 'Rp.5.000' },
    { id: 5, name: 'Bani Rabbani', type: 'Utang', method: 'Cash', date: '14 Jan, 10:40 PM', amount: 'Rp.5.000' },
    { id: 6, name: 'Rizky Kusumawan', type: 'Meminjamkan', method: 'Transfer', date: '09 Jan, 02:25 PM', amount: 'Rp.3.000.000' },
    { id: 7, name: 'Alfazri Maulana', type: 'Utang', method: 'Transfer', date: '6 Jan, 07:13 AM', amount: 'Rp.300.000' }
  ];

  return (
    <div class="relative bg-[#f8fafc] min-h-screen">
      {sidebarOpen() && (
        <div class="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div class="absolute left-0 top-0 bottom-0 w-2/3 sm:w-1/2 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}

      <div class="md:flex">
        <div class="hidden md:block">
          <Sidebar />
        </div>
        <div class="flex-1">
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen())} title="All Data" />
          <div class="p-4 sm:p-8 space-y-6">

            {/* Stats */}
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white">
              {stats.map(stat => (
                <div class='p-4 rounded-xl shadow text-center'>
                  <p class={`${stat.color} font-inter font-medium`}>{stat.label}</p>
                  <p class="text-lg font-inter font-semibold mt-2">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Loans Table */}
            <div class="bg-white rounded-xl p-6 shadow overflow-auto">
              <h2 class="text-lg font-semibold text-yellow-500 mb-4">Active Loans Overview</h2>
              <table class="w-full text-sm">
                <thead class="text-left text-gray-500">
                  <tr>
                    <th class="py-2">ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Method</th>
                    <th class='md:pl-8'>Date</th>
                    <th>Amount</th>
                    <th>Check</th>
                  </tr>
                </thead>
                <tbody>
                  {loans.map((loan) => (
                    <tr class="border-t border-gray-100">
                      <td class="py-5">{loan.id}</td>
                      <td>{loan.name}</td>
                      <td>{loan.type}</td>
                      <td>{loan.method}</td>
                      <td>{loan.date}</td>
                      <td>{loan.amount}</td>
                      <td class='md:pl-4'><input type="checkbox" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
