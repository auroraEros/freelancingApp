
import Stat from "../../ui/Stat"
import { HiUsers,HiCurrencyDollar,HiOutlineViewGrid } from 'react-icons/hi';


function Stats({projects,proposals,users}) {
 
  return (
     <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
       <Stat
         color="orange"
         title="کاربران"
         value={users}
         icon={<HiUsers className="w-20 h-20" />}
       />
          <Stat
            color="primary"
            title="درخواست‌ها"
            value={proposals}
            icon={<HiOutlineViewGrid className="w-20 h-20" />}
          />
        <Stat
          color="green"
          title="پروژه‌ها"
          value={projects}
          icon={<HiCurrencyDollar className="w-20 h-20" />}
        />
    </div>
  )
}

export default Stats
