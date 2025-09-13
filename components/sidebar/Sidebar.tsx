import useFeedbackStore from "@/store/useFeedbackStore";
import useFeedbackItems from "../../hooks/useFeedbackItems";
import SidebarHashtagList from "./SidebarHashtagList";
import SidebarHashtagListSkeleton from "./SidebarHashtagListSkeleton";

interface SidebarProps {
  companyList: string[];
}

const Sidebar = ({ companyList }: SidebarProps) => {
  const loading = useFeedbackStore((state) => state.loading);
  const clearCompany = useFeedbackStore((state) => state.clearCompany);

  return (
    <>
      <div className="card card-border bg-[#212121] w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 md:px-8 h-[105vh]">
        <div className="card-body">
          <ul className="menu grid grid-cols-2 gap-4">
            {loading ? (
              Array.from({ length: 9 }).map((_, index) => (
                <SidebarHashtagListSkeleton key={index} />
              ))
            ) : (
              <>
                <li>
                  <button
                    className="btn btn-soft rounded-xl w-full sm:w-auto"
                    onClick={clearCompany}
                  >
                    #ALL
                  </button>
                </li>
                {companyList.map((company) => (
                  <SidebarHashtagList key={company} company={company} />
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
