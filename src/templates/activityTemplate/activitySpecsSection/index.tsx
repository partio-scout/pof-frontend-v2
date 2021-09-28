import React from 'react';
import PlusIcon from '../../../images/plus-round.inline.svg';
import ExclamationIcon from '../../../images/exclamation-round.inline.svg';
import ClockIcon from '../../../images/time.inline.svg';
import StarIcon from '../../../images/star.inline.svg';
import home from '../../../images/Home.svg';
import camping from '../../../images/Camping.svg';
import forest from '../../../images/Forest.svg';
import sun from '../../../images/Sun.svg';
import parent from '../../../images/Parent.svg';
import ParentIcon from '../../../images/parent.inline.svg';
import { StrapiActivity } from '../../../../graphql-types';
import RichText from '../../../components/RichText';
import { prependApiUrl } from '../../../utils/helpers';
import { hexToRgba } from '../../../utils/color';
import SquareIcon from '../squareIcon';

interface ActivitySpecsProps {
  data: StrapiActivity;
}

interface locationIconsTypes {
  [key: string]: string;
}

const locationIcons: locationIconsTypes = {
  kämpällä: camping,
  kololla: home,
  metsässä: forest,
  ulkona: sun,
};
const itemClasses = 'bg-gray-light flex p-4 rounded-xl';

const ActivitySpecs = ({ data }: ActivitySpecsProps) => {
  const iconBackground = hexToRgba(data.age_group?.color || '#eee', 0.2);

  return (
    <div className="mt-8">
      <div className="flex space-x-4">
        <div className="space-y-4 w-1/3">
          <div className={itemClasses}>
            {data.mandatory ? (
              <>
                <SquareIcon icon={ExclamationIcon} alt="Pakollinen aktiviteetti" backgroundColor={iconBackground} />
                <h4 className="ml-4 text-blue text-xl uppercase">PAKOLLINEN AKTIVITEETTI</h4>
              </>
            ) : (
              <>
                <SquareIcon icon={PlusIcon} alt="Valinnainen aktiviteetti" backgroundColor={iconBackground} />
                <h4 className="ml-4 text-blue text-xl uppercase">VALINNAINEN AKTIVITEETTI</h4>
              </>
            )}
          </div>
          <div className={itemClasses}>
            <SquareIcon icon={ClockIcon} alt="Arvioitu kesto" backgroundColor={iconBackground} />
            <div>
              <h4 className="ml-4 text-blue text-xl">ARVIOITU KESTO</h4>
              <span className="block ml-4 text-blue">{data.duration?.name}</span>
            </div>
          </div>
          <div className={itemClasses}>
            <SquareIcon icon={StarIcon} alt="Taitoalueet" backgroundColor={iconBackground} />
            <div>
              <h4 className="ml-4 text-blue text-xl">TAITOALUEET</h4>
              <span className="block ml-4 text-blue">
                {data.skill_areas?.map((skill_obj) => skill_obj?.name).join(', ')}
              </span>
            </div>
          </div>
        </div>
        <div className="ml-4 space-y-4 w-1/3">
          <div className={itemClasses}>
            <div>
              <h4 className="text-blue block w-full text-xl">PAIKKA</h4>
              {data.locations?.map((location, index: number) => (
                <div className="flex mt-2 items-center" key={location?.id}>
                  <img
                    src={prependApiUrl(location?.icon?.url || '')}
                    alt={location?.slug!}
                    title={location?.slug!}
                    className="rounded-xl w-14 h-14 flex items-center justify-center bg-opacity-20 p-2"
                    style={{ backgroundColor: iconBackground }}
                  ></img>
                  <div>
                    <span className="ml-4 text-blue font-bold text-xl tracking-wider">{location?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-4 space-y-4 w-1/3">
          <div className={itemClasses}>
            <SquareIcon icon={ParentIcon} alt="Kasvatustavoitteet" backgroundColor={iconBackground} />
            <div>
              <h4 className="ml-4 text-blue text-xl">KASVATUSTAVOITTEET</h4>
              <span className="block ml-4 text-blue">
                {data.educational_objectives?.map((ed_obj) => ed_obj?.name).join(', ')}
              </span>
            </div>
          </div>
          <div className={itemClasses}>
            <div>
              <h4 className="text-blue text-xl">JOHTAJAN TEHTÄVÄ</h4>
              <RichText className="text-blue" html={data.leader_tasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySpecs;
