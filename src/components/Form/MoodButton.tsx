import React, { SetStateAction } from 'react';
import './MoodButton.scss';

type MoodButtonType = {
  moodValue: number;
  setFormData: React.Dispatch<
    SetStateAction<{ moodValue: number; comment: string }>
  >;
};

const MoodButton: React.FC<MoodButtonType> = ({ moodValue, setFormData }) => {
  const activateButton = (id: string) => {
    const targetButtonElement = document.getElementById(`mood-button-${id}`);

    const allButtonElements = document.getElementsByClassName('mood-button');
    // Remove active button style from all buttons
    Array.from(allButtonElements).map((item: any) =>
      item.classList.remove('active-button')
    );

    if (+id === moodValue) {
      return targetButtonElement?.classList.add('active-button');
    }
  };
  return (
    <div
      id={`mood-button-${moodValue}`}
      className='mood-button'
      key={moodValue}
    >
      <div
        onClick={(e) => {
          activateButton((e.target as HTMLElement).id);
          setFormData((prevState) => ({
            ...prevState,
            moodValue: +(e.target as HTMLElement).id,
          }));
        }}
        id={`${moodValue}`}
        className='mood-button-evaluation'
      >
        {moodValue}
      </div>
    </div>
  );
};

export default MoodButton;
