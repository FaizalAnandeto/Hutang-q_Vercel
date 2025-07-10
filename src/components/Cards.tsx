type MyCardProps = {
  utang: string;
  pinjaman: string;
  cardHolder: string;
};

const MyCard = (props: MyCardProps) => {
  return (
    <div class="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl shadow text-white flex flex-col min-h-[12rem]">
        <div class="flex-1 px-6 pt-6 pb-6">
            <div class="flex justify-between items-start">
                <div>
                    <p class="text-sm">Utang</p>
                    <h2 class="text-2xl font-bold">{props.utang}</h2>
                    <p class="mt-2 text-sm">Piutang</p>
                    <h2 class="text-2xl font-bold">{props.pinjaman}</h2>
                </div>
                <a class="text-xs hover:underline" href="/AddData">+ Add Transaksi</a>
            </div>
        </div>
        <div class="h-20 w-full px-6 pt-5 rounded-xl bg-white/20 backdrop-blur-md">
            <p class="text-sm text-white">CARD HOLDER</p>
            <p class="text-md font-semibold text-white">{props.cardHolder}</p>
        </div>
    </div>
  );
};

export default MyCard;
