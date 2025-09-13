import useFeedbackItems from "../hooks/useFeedbackItems";

interface SidebarProps {
  handleSelectCompany: (company: string) => void;
  companyList: string[];
}

const Sidebar = ({ handleSelectCompany, companyList }: SidebarProps) => {
  return (
    <>
      <div className="card card-border bg-[#212121] w-50 h-216">
        <div className="card-body">
          <ul className="menu gap-4">
            {companyList.map((company) => (
              <li key={company}>
                <button
                  onClick={() => handleSelectCompany(company)}
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
