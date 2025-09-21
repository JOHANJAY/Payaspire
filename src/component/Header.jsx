import { BiSolidChurch } from "react-icons/bi";
import { AiOutlineWarning } from "react-icons/ai";
import { useLocation } from "react-router";


const Header = () => {
  const location = useLocation()
  const remittance = location.pathname == "/remittance"
  return (
    <div
      className="flex
    item-center justify-between py-2 px-1 fixed top-0 right-0 left-0 bg-white"
    >
      <div className="flex gap-2">
        <BiSolidChurch className="text-3xl text-base-blue" />
        <div className="text-base-blue">
          <h1 className=" font-bold text-2xl ">
            Archdiocesan Financial Management Platform - FMP
          </h1>
          <div className="text-sm flex gap-52">
            {remittance ? <p>Finance Dashboard</p> : <p>Priest Dashboard</p>}
            <p className={`${remittance ? "hidden" : ""}`}>
              Remittance Summary{" "}
            </p>
          </div>
        </div>
      </div>
      {/* report alert */}
      {remittance ? "" :  <div className="flex items-center gap-3 px-2 border text-red-600 border-red-500 bg-red-100 rounded-md">
        <AiOutlineWarning />
        <div>
          <p className="font-bold text-sm">Unsubmitted Report</p>
          <p className="text-xs">
            You have an unsubmitted report . Kindly fill and submit it
          </p>
        </div>
      </div>}
    </div>
  );
};
export default Header;
