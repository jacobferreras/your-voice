import useFeedbackItems from "../hooks/useFeedbackItems";

const Sidebar = () => {
  const { companyList } = useFeedbackItems();
  return (
    <>
      <div className="card card-border bg-[#212121] w-50 h-216">
        <div className="card-body">
          <ul className="menu gap-4">
            {companyList.map((company) => (
              <li key={company}>
                <button className="btn btn-soft rounded-xl w-auto">
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
