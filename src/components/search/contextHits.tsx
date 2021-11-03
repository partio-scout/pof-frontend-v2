import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { Hit } from 'react-instantsearch-core';
import { HitsProvided } from 'react-instantsearch-core';
import { ContentType } from '../../types/content';
import useNavigation from '../../hooks/navigation';
import HitComponent from './hit';
import { useHitContext } from './hitContext';
import { currentLocale } from '../../utils/helpers';

const ContextHits = () => {
  const { state } = useHitContext();
  const navigation = useNavigation(currentLocale());

  const hits = state.flatMap((hitData) =>
    hitData.hits.map((hit) => ({
      type: hitData.type,
      hit,
    })),
  );

  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {hits.map((hitData) => (
        <div className="" key={hitData.hit.objectID}>
          <HitComponent hit={hitData.hit} type={hitData.type} navigation={navigation} />
        </div>
      ))}
    </div>
  );
};

export default ContextHits;
