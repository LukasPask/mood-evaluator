import React, { SetStateAction, useState } from 'react';
import './MoodButton.scss';

type MoodButtonType = {
  moodValue: number;
  setFormData: React.Dispatch<
    SetStateAction<{ moodValue: number; comment: string }>
  >;
};

const MoodButton: React.FC<MoodButtonType> = ({ moodValue, setFormData }) => {
  const [activeButton, setActiveButton] = useState(0);
  const activateButton = () => {
    const activeButtonElement = document.getElementById(
      `mood-button-${activeButton}`
    );
    const allButtonElements = document.getElementsByClassName('mood-button');
    Array.from(allButtonElements).map((item: any) =>
      item.classList.remove('active-button')
    );
    if (activeButton === moodValue) {
      return activeButtonElement?.classList.add('active-button');
    }
  };
  return (
    <div
      id={`mood-button-${moodValue}`}
      onClick={() => {
        activateButton();
        setActiveButton(moodValue);
        setFormData((prevState) => ({ ...prevState, moodValue: activeButton }));
      }}
      className='mood-button'
      key={moodValue}
    >
      <div className='mood-button-evaluation'>{moodValue}</div>
    </div>
  );
};

export default MoodButton;
