import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';
import { ContentType } from '../../types/content';
import Hit from './hit';

const Hits = connectHits<HitsProvided<unknown> & { type: ContentType }, unknown>(({ type, hits }) => {
  const TypedHit = Hit(type);

  return (
    <div className="flex flex-wrap">
      {hits.map((hit) => (
        <TypedHit hit={hit} key={hit.objectID} />
      ))}
    </div>
  );
});

export default Hits;
