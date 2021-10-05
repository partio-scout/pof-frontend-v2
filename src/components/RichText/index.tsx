import React from 'react';
import clsx from 'clsx';
import parse, { DOMNode, Element, domToReact, HTMLReactParserOptions } from 'html-react-parser';
import './styles.css';
import CombinedLink from '../combinedLink';
import { prependApiUrl } from '../../utils/helpers';
import ReactPlayer from 'react-player';

interface RichTextProps {
  html?: string | null;
  className?: string;
}

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.attribs) return replaceDomNodeWithComponent(domNode as Element);
  },
};

/**
 * Replaces the given node with a React Component if necessary. 
 */
const replaceDomNodeWithComponent = (node: Element) => {
  switch (node.name) {
    case 'a':
      return (
        <CombinedLink to={node.attribs.href || ''} key={node.attribs.href}>
          {domToReact(node.children, options)}
        </CombinedLink>
      );
    case 'img':
      return <img src={prependApiUrl(node.attribs.src)} alt={node.attribs.alt} title={node.attribs.title} />;
    case 'video':
      return <ReactPlayer url={prependApiUrl(node.attribs['data-url'])} controls />
  }
};

const parseHtml = (html: string) => {
  return parse(html, options);
};

/**
 * Component for rendering rich text (html) from Strapi
 */
function RichText({ html, className }: RichTextProps) {
  return html ? <div className={clsx('richtext', className)}>{parseHtml(html)}</div> : null;
}

export default RichText;
