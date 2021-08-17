import React from 'react';
import { parseDate } from '../../../utils/helpers';
import { StrapiActivity } from '../../../../graphql-types';
import AttachmentIcon from '../../../images/attachment.inline.svg';
import LinkIcon from '../../../images/link.inline.svg';

interface SuggestionsProps {
  data: StrapiActivity;
}

const Suggestions = ({ data }: SuggestionsProps) => (
  <>
    {data.suggestions!.map((suggestion) => (
      <div key={suggestion?.id}>
        <div className="bg-gray-light rounded-t-xl p-4 mt-3">
          <img></img>
          <h4 className="text-blue">{suggestion!.title}</h4>
          <span>{parseDate(suggestion!.published_at)}</span>
          <span className="text-blue font-semibold ml-2 inline-block">
            {suggestion?.title !== '' ? suggestion!.author : 'Anonyymi'}
          </span>
          <p>{suggestion!.content}</p>
        </div>
        <div className="bg-gray p-1 overflow-auto rounded-br-xl">
          <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
            <LinkIcon className="fill-current inline-block mr-1" />
            <span className="font-semibold">Linkki</span>
          </div>
          <div className="ml-2 inline-block bg-gray-light rounded-xl p-1 font-sourceSansPro">
            <AttachmentIcon className="fill-current inline-block mr-1" />
            <span className="font-semibold">Liite</span>
          </div>
          <div className="float-right">
            <span className="bg-gray-light rounded-xl p-1 font-sourceSansPro">{suggestion!.like_count} huutoa</span>
            <button className="bg-hardBlue rounded-xl text-white p-1 font-tondu ml-2 tracking-wide">Vastaa</button>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Suggestions;
