import React from 'react';
import clsx from 'clsx';
import PillRefinementList from './pillRefinementList';
import AccordionPillRefinementList from './accordionPillRefinementList';

const AdditionalFilters = ({ visible }: { visible: boolean }) => (
  <div className={clsx('container mx-auto border-t border-lightBlue', { hidden: !visible })}>
    <div className="uppercase text-xl font-tondu mt-4">Aktiviteetit & toteutusvinkit</div>
    <div className="flex mt-4">
      <div className="flex flex-1">
        <PillRefinementList title="Aktiviteetin pakollisuus" attribute="mandatory" />
      </div>
      <div className="flex flex-1">
        <PillRefinementList title="Aktiviteetin kesto" attribute="duration.slug" />
      </div>
      <div className="flex flex-1">
        <PillRefinementList title="Paikka" attribute="locations.name" />
      </div>
    </div>
    <div className="flex my-4 space-x-4">
      <div className="flex-1">
        <AccordionPillRefinementList title="Taitoalueet" attribute="skill_areas.slug" />
      </div>
      <div className="flex-1">
        <AccordionPillRefinementList title="Kasvatustavoitteet" attribute="educational_objectives.slug" />
      </div>
    </div>
  </div>
);

export default AdditionalFilters;
