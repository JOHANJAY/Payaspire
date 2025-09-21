import { BsArrowLeftShort } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";

const Nav = () => {
  return (
    <div className="flex justify-between mr-3">
      <div className="flex gap-3">
        <div className="">
          <p className="flex items-center text-sm">
            <BsArrowLeftShort />
            Back
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">
            Holy Trinity Parish{" "}
            <span className="text-sm font-normal">(Phase 4, Kubwa Abuja)</span>
          </h2>
          <p className="text-xs">Rev Fr Michael Brown</p>
        </div>
      </div>
      <div>
        <SlOptionsVertical />
      </div>
    </div>
  );
};
export default Nav;
