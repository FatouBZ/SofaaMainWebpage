import React from 'react';

const MidButton = ({ buttons, filter, selected }) => {
  return (
    <div className='flex items-center pt-8'>
      {buttons.map((button) => (
        <button
          className={`mr-4 ${selected === button.id ? "pushable" : ""}`} // Apply "pushable" when selected
          key={button.id}
          onClick={() => filter(button.id)}
        >
          <span className={selected === button.id ? "front2" : "front"}>
            {button.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MidButton;
