import useFeedbackStore from "@/store/useFeedbackStore";
import useFeedbackItems from "../hooks/useFeedbackItems";
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
      <div className="card card-border bg-[#212121] w-50 h-216">
        <div className="card-body">
          <ul className="menu gap-4">
            {loading ? (
              Array.from({ length: 9 }).map((_, index) => (
                <SidebarHashtagListSkeleton key={index} />
              ))
            ) : (
              <>
                <li>
                  <button
                    className="btn btn-soft rounded-xl w-auto"
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
