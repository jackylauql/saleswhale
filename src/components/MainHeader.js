const MainHeader = ({ user }) => {
  return (
    <>
      <div className="flex bg-white h-[80px] w-full border-b-[1px] border-gray justify-center items-center">
        <div className="text-lighterBlack px-10 py-8 flex border-r-[1px] border-gray opacity-[0.5] font-bold">
          NARWHAL
        </div>
        <div className="flex flex-grow h-full items-center">
          <span className="py-8 pl-[30px]">Teams</span>
          <div className="flex-grow flex items-center justify-end pr-9 text-xs ">
            <div className="pr-5 relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M4 11V1H20V11"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 15V23H1V15H8V18H16V15H23Z"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    d="M9 6H15"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    d="M9 10H15"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </g>
              </svg>
              <div className="absolute top-[-10px] w-[18px] h-[18px] flex items-center justify-center right-3 rounded-3xl text-white bg-lightblue">
                3
              </div>
            </div>
            {user ? (
              <>
                <span className="pr-2 opacity-[0.5]">Hello, {user?.name}</span>
                <img
                  width={36}
                  height={36}
                  className="rounded-3xl"
                  src={user.avatar}
                />
              </>
            ) : (
              ""
            )}
            <div className="pl-2">
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.757324 0H9.24261L4.99996 4.24264L0.757324 0Z"
                  fill="black"
                />
              </svg>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
