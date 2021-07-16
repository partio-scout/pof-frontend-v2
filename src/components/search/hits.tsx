import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';
import { ContentType } from '../../types/content';
import Hit from './hit';

const Hits = connectHits<HitsProvided<unknown> & { type: ContentType }, unknown>(({ type, hits }) => {
  const TypedHit = Hit(type);

  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {hits.map((hit) => (
        <div className="h-80" key={hit.objectID}>
          <TypedHit hit={hit} />
        </div>
      ))}
    </div>
  );
});

export default Hits;
