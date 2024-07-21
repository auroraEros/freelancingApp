import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Stats({ proposals = [] }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const earnedIncome = acceptedProposals.reduce(
    (acc, curr) => curr.price + acc,
    0
  );

  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
      <Stat
        color="primary"
        title="درخواست‌ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست‌های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="کیف پول"
        value={toPersianNumbersWithComma(earnedIncome)}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
