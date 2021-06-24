import React from 'react';
import hightLightCover from '../../images/highLightCover.png';

type CurrentNewsCardProps = {
  title: string;
  ingress: string;
  date: string;
  buttonText: string;
};

const CurrentNewsCard = ({ title, ingress, date, buttonText }: CurrentNewsCardProps) => (
  <div className="flex flex-col rounded-lg md:min-w-1/3 w-96 h-491 max-w-md relative">
    <div>
      <img src={hightLightCover} className="w-full" />
    </div>
    <div className="bg-gray-light pl-2 pt-2 w-full relative flex-grow">
      <h4 className="bold font-tondu tracking-wider text-blue">{title}</h4>
      <p className="text-blue">{ingress}</p>
      <span className="absolute bottom-0 left-0 font-sourceSansPro pl-2 pb-2 color-gray-dark">{date}</span>
      <button className="absolute bottom-0 rounded right-0 mr-0 px-4 py-3.5 w-1/2 bg-lightBlue hover:bg-hardBlue font-tondu tracking-wider">
        {buttonText.toUpperCase()}
      </button>
    </div>
  </div>
);

export default CurrentNewsCard;
