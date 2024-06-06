import React from "react";

function ExperienceAndProjectTemplate({ contents }) {
    const [selectedItemIndex, setSelectedItemIndex]=React.useState(0);
  return (
    <div className="flex py-10 gap-20 sm:flex-col">
      <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full">
        {contents.map((content, index) => (
          <div
            onClick={() => {
              setSelectedItemIndex(index);
            }}
            className="cursor-pointer"
          >
            <h1
              className={`text-xl px-5 py-3 ${
                selectedItemIndex === index
                  ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]"
                  : "text-white"
              }`}
            >
              {content.period}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-secondary text-xl">
          {contents[selectedItemIndex].title}
        </h1>
        <h1 className="text-tertiary text-xl">
          {contents[selectedItemIndex].company}
        </h1>
        <p className="text-white">
          {contents[selectedItemIndex].description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceAndProjectTemplate;
