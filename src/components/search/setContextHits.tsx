import React, { useEffect } from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';
import { ContentType } from '../../types/content';
import Hit from './hit';
import useNavigation from '../../hooks/navigation';
import { useHitContext } from './hitContext';

// TODO dynamic locale
const currentLocale = 'fi';

const SetContextHits = connectHits<HitsProvided<unknown> & { type: ContentType }, unknown>(({ type, hits }) => {
  const { dispatch } = useHitContext();

  useEffect(() => {
    dispatch({ type: 'set-hit-type', payload: { type, hits } });
  });

  return null;
});

export default SetContextHits;
