import useFeedbackStore from "@/store/useFeedbackStore";

interface SidebarHastagListProps {
  company: string;
}

const SidebarHastagList = ({ company }: SidebarHastagListProps) => {
  const selectCompany = useFeedbackStore((state) => state.selectCompany);

  return (
    <li>
      <button
        onClick={() => selectCompany(company)}
        className="btn btn-soft rounded-xl w-auto"
      >
        #{company}
      </button>
    </li>
  );
};

export default SidebarHastagList;
