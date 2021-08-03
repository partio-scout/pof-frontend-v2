import React from 'react';
import clsx from 'clsx';
import PillRefinementList from './pillRefinementList';
import AccordionPillRefinementList from './accordionPillRefinementList';
import TimeIcon from '../../images/time.inline.svg';
import PlusIcon from '../../images/plus-round.inline.svg';
import ExclamationIcon from '../../images/exclamation-round.inline.svg';

const AdditionalFilters = ({ visible }: { visible: boolean }) => (
  <div className={clsx('container mx-auto border-t border-lightBlue px-4 md:px-0', { hidden: !visible })}>
    <div className="uppercase text-xl font-tondu mt-4">Aktiviteetit & toteutusvinkit</div>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-4 mt-4">
      <div className="">
        <PillRefinementList
          title="Aktiviteetin pakollisuus"
          attribute="mandatory"
          getItemTitle={(item) => (item.label === 'true' ? 'Pakollinen' : 'Valinnainen')}
          getItemIcon={(item) =>
            item.label === 'true' ? <ExclamationIcon className="fill-current" /> : <PlusIcon className="fill-current" />
          }
          selectOne
        />
      </div>
      <div className="">
        <PillRefinementList
          title="Aktiviteetin kesto"
          attribute="duration.slug"
          getItemIcon={(_) => <TimeIcon className="fill-current" />}
        />
      </div>
      <div className="">
        <PillRefinementList title="Paikka" attribute="locations.name" />
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  my-4">
      <div className="">
        <AccordionPillRefinementList title="Taitoalueet" attribute="skill_areas.slug" />
      </div>
      <div className="">
        <AccordionPillRefinementList title="Kasvatustavoitteet" attribute="educational_objectives.slug" />
      </div>
    </div>
  </div>
);

export default AdditionalFilters;
