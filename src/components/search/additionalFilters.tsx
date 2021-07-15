import React from 'react';
import clsx from 'clsx';
import PillRefinementList from './pillRefinementList';
import AccordionPillRefinementList from './accordionPillRefinementList';

const AdditionalFilters = ({ visible }: { visible: boolean }) => (
  <div className={clsx('container mx-auto border-t border-lightBlue', { hidden: !visible })}>
    <div className="uppercase text-xl font-tondu mt-4">Aktiviteetit & toteutusvinkit</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="">
        <PillRefinementList title="Aktiviteetin pakollisuus" attribute="mandatory" />
      </div>
      <div className="">
        <PillRefinementList title="Aktiviteetin kesto" attribute="duration.slug" />
      </div>
      <div className="">
        <PillRefinementList title="Paikka" attribute="locations.name" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-4">
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
