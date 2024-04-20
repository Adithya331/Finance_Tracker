import {
  CurrencyRupeeIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import {
  CreditCardIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className=" md:grow md:basis-1/6 bg-[#0A0A0A] text-white min-w-[200px] ">
      <ul className="text-xl flex flex-col gap-8 m-5 mt-10">

        <li className="flex p-2 hover:bg-red-600 rounded-lg">
          <button className="flex gap-4">
            <HomeIcon width={24} height={24} className="pt-1" />
            <h3 className="font-semibold">Home</h3>
          </button>
        </li>

        <li className="flex p-2 hover:bg-red-600 rounded-lg">
          <button className="flex gap-4 ">
            <CreditCardIcon width={24} height={24} className="pt-1" />
            <h3 className="font-semibold">Expenses</h3>
          </button>
        </li>

        <li className="flex p-2 hover:bg-red-600 rounded-lg">
          <button className="flex gap-4">
            <CurrencyRupeeIcon width={24} height={24} className="pt-1" />
            <h3 className="font-semibold">Investments</h3>
          </button>
        </li>

        <li className="flex p-2 hover:bg-red-600 rounded-lg">
          <button className="flex gap-4">
            <DocumentChartBarIcon
              width={24}
              height={24}
              className="pt-1"
            />
            <h3 className="font-semibold">Add data</h3>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
