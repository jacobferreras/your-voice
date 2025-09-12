import ListItem from "./ListItem";

const ListContainer = () => {
  return (
    <>
      <div className="card bg-[#212121] text-neutral-content w-auto overflow-y-scroll h-[56vh] ">
        <div className="card-body items-center text-center">
          <ol className="menu gap-2 grid grid-cols-1">
            <ListItem />
          </ol>
        </div>
      </div>
    </>
  );
};

export default ListContainer;
