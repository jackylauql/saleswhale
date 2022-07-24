const NavIcons = ({ children, active, classes }) => {
  return (
    <>
      <div
        className={`bg-darkblue w-[80px] flex flex-wrap justify-center ${
          classes ? classes : ""
        }`}
      >
        <div
          className={`w-full h-[80px] ${
            active ? "bg-lightblue" : "bg-darkblue"
          } flex justify-center items-center`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default NavIcons;
