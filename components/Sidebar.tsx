import useFeedbackStore from "@/store/useFeedbackStore";
import useFeedbackItems from "../hooks/useFeedbackItems";

interface SidebarProps {
  companyList: string[];
}

const Sidebar = ({ companyList }: SidebarProps) => {
  const selectCompany = useFeedbackStore((state) => state.selectCompany);
  const clearCompany = useFeedbackStore((state) => state.clearCompany);

  return (
    <>
      <div className="card card-border bg-[#212121] w-50 h-216">
        <div className="card-body">
          <ul className="menu gap-4">
            <li>
              <button
                className="btn btn-soft rounded-xl w-auto"
                onClick={clearCompany}
              >
                #ALL
              </button>
            </li>
            {companyList.map((company) => (
              <li key={company}>
                <button
                  onClick={() => selectCompany(company)}
                  className="btn btn-soft rounded-xl w-auto"
                >
                  #{company}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
