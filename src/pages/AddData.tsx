import { createSignal, For, Show } from 'solid-js';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const AddData = () => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);
  const [activeTab, setActiveTab] = createSignal<'utang' | 'piutang' | 'balance'>('utang');

  const tabs = [
    { label: 'Add Utang', key: 'utang' },
    { label: 'Add Piutang', key: 'piutang' },
    { label: 'Add Balance', key: 'balance' }
  ];

  const renderUtangPiutangForm = () => (
    <form class="grid grid-cols-1 md:grid-cols-2 gap-11">
      <div>
        <label class="text-sm font-inter text-gray-500">Name</label>
        <input type="text" placeholder="Enter name here" class="w-full p-2 border border-blue-100 rounded-md bg-white" />
      </div>
      <div>
        <label class="text-sm font-inter text-gray-500">Date</label>
        <input type="date" placeholder='mm/dd/yyyy' class="w-full p-2 border border-blue-100 rounded-md bg-white" />
      </div>
      <div>
        <label class="text-sm font-inter text-gray-500">Method</label>
        <select class="w-full p-2 border border-blue-100 rounded-md bg-white">
          <option>Choose here</option>
          <option>Cash</option>
          <option>Transfer</option>
        </select>
      </div>
      <div>
        <label class="text-sm font-inter text-gray-500">Amount</label>
        <input type="number" placeholder="Enter an amount here" class="w-full p-2 border border-blue-100 rounded-md bg-white" />
      </div>
      <div class="md:col-span-2 py-5 flex justify-end">
        <button type="submit" class="bg-primer2 font-inter font-semibold text-white px-9 py-2 rounded-md mt-2">Save</button>
      </div>
    </form>
  );

  const renderBalanceForm = () => (
    <form class="grid grid-cols-1 md:grid-cols-2 gap-11">
      <div>
        <label class="text-sm font-inter text-gray-500">Bank</label>
        <input type="number" placeholder="Enter an amount here" class="w-full p-2 border border-blue-100 rounded-md bg-white" />
      </div>
      <div>
        <label class="text-sm font-inter text-gray-500">E-Wallet</label>
        <input type="number" placeholder="Enter an amount here" class="w-full p-2 border border-blue-100 rounded-md bg-white" />
      </div>
      <div>
        <label class="text-sm font-inter text-gray-500">Cash</label>
        <input type="number" placeholder="Enter an amount here" class="w-full p-2 border border-blue-100 rounded-md bg-white" />
      </div>
      <div class="md:col-span-2 py-5 flex justify-end">
        <button type="submit" class="bg-primer2 font-inter font-semibold text-white px-9 py-2 rounded-md mt-2">Save</button>
      </div>
    </form>
  );

  return (
    <div class="relative bg-[#f8fafc] min-h-screen">
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
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen())} title="Add Data" />
          <div class="p-4 sm:p-8 space-y-6">
            <div class="bg-white rounded-xl p-6 shadow">
              {/* Tabs */}
              <div class="flex space-x-6 mb-4">
                <For each={tabs}>{(tab) => (
                  <button
                    class={`pb-2 font-medium font-inter ${
                      activeTab() === tab.key
                        ? 'text-secondary border-b-2 border-primer2'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab(tab.key as 'utang' | 'piutang' | 'balance')}
                  >
                    {tab.label}
                  </button>
                )}</For>
              </div>

              {/* Tab Content */}
              <Show when={activeTab() === 'utang'}>{renderUtangPiutangForm()}</Show>
              <Show when={activeTab() === 'piutang'}>{renderUtangPiutangForm()}</Show>
              <Show when={activeTab() === 'balance'}>{renderBalanceForm()}</Show>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
