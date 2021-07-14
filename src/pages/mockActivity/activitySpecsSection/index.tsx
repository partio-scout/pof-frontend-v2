import React from 'react';
import plus from '../../../images/Plus.svg';
import clock from '../../../images/Time.svg';
import star from '../../../images/Star.svg';
import home from '../../../images/Home.svg';
import camping from '../../../images/Camping.svg';
import forest from '../../../images/Forest.svg';
import sun from '../../../images/Sun.svg';
import parent from '../../../images/Parent.svg';

const locationIcons = {
  kämpällä: camping,
  kololla: home,
  metsässä: forest,
  ulkona: sun,
};

const ActivitySpecs = ({ data }) => (
  <div className="mt-8">
    {console.log('RR ActivitySpecs', data)}
    <div className="flex space-x-4">
      <div className="space-y-4 w-1/3">
        <div className="bg-gray-light flex p-4 rounded-xl">
          <div className="rounded-xl bg-ageYellow w-14 h-14 flex align-center justify-center bg-opacity-20">
            <img className="w-8" src={plus} />
          </div>
          <h4 className="ml-4 text-blue text-xl">VALINNAINEN AKTIVITEETTI</h4>
        </div>
        <div className="bg-gray-light flex p-4 rounded-xl">
          <div className="rounded-xl bg-ageYellow w-14 h-14 flex align-center justify-center bg-opacity-20">
            <img className="w-8" src={clock} />
          </div>
          <div>
            <h4 className="ml-4 text-blue text-xl">ARVIOITU KESTO</h4>
            <span className="block ml-4 text-blue">{data.duration.name}</span>
          </div>
        </div>
        <div className="bg-gray-light flex p-4 rounded-xl">
          <div className="rounded-xl bg-ageYellow w-14 h-14 flex align-center justify-center bg-opacity-20">
            <img className="w-8" src={star} />
          </div>
          <div>
            <h4 className="ml-4 text-blue text-xl">TAITOALUEET</h4>
            <span className="block ml-4 text-blue">
              {data.skill_areas.map((skill_obj) => skill_obj.name).join(', ')}
            </span>
          </div>
        </div>
      </div>
      <div className="ml-4 space-y-4 w-1/3">
        <div className="bg-gray-light flex p-4 rounded-xl">
          {data.locations.map((location) => (
            <div>
              <h4 className="text-blue block w-full text-xl">PAIKKA</h4>
              <div className="flex mt-2">
                <div className="rounded-xl bg-ageYellow w-14 h-14 flex align-center justify-center bg-opacity-20">
                  <img className="w-8" src={locationIcons[location.slug]} />
                </div>
                <div>
                  <span className="ml-4 text-blue font-bold font-tondu font-xl tracking-wider">{location.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-4 space-y-4 w-1/3">
        <div className="bg-gray-light flex p-4 rounded-xl">
          <div className="rounded-xl bg-ageYellow w-14 h-14 flex align-center justify-center bg-opacity-20">
            <img className="w-8" src={parent} />
          </div>
          <div>
            <h4 className="ml-4 text-blue text-xl">KASVATUSTAVOITTEET</h4>
            <span className="block ml-4 text-blue">
              {data.educational_objectives.map((ed_obj) => ed_obj.name).join(', ')}
            </span>
          </div>
        </div>
        <div className="bg-gray-light flex p-4 rounded-xl">
          <div>
            <h4 className="ml-4 text-blue text-xl">JOHTAJAN TEHTÄVÄ</h4>
            <p className="block ml-4 text-blue">{data.leader_tasks}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ActivitySpecs;
