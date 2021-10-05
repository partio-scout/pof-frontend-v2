import React from 'react';

/**
 * Replaces newlines with html line-breaks (<br>)
 */
export const addLineBreaks = (text?: string | null) =>
  text?.split('\n').map((span, i, arr) => (
    <span key={span}>
      {span}
      {i !== arr.length - 1 && <br />}
    </span>
  )) || null;
