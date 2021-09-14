import React from 'react';
import clsx from 'clsx';
import './styles.css';

interface RichTextProps {
  html?: string | null;
  className?: string;
}

/**
 * Component for rendering rich text (html) from Strapi
 */
function RichText({ html, className }: RichTextProps) {
  return html ? <div className={clsx('richtext', className)} dangerouslySetInnerHTML={{ __html: html }}></div> : null;
}

export default RichText;
