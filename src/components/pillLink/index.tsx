import React from 'react';
import AttachmentIcon from '../../images/attachment.inline.svg'
import CombinedLink from '../combinedLink';
import { hexToRgba } from '../../utils/color';

interface PillLinkProps {
  to: string;
  color?: string | null;
  children: React.ReactNode;
  attachmentIcon?: boolean;
}

function PillLink({ to, children, color, attachmentIcon }: PillLinkProps) {
  // TODO: display block vs flex
  return (
    <CombinedLink
      to={to}
      className="block flex flex-row bg-gray-light rounded-2xl p-3 md:p-3 font-tondu text-2xl uppercase tracking-wider align-center justify-start"
    > 
    {attachmentIcon &&
      <div className="flex w-12 h-12 rounded-md p-2 mr-4" style={{ backgroundColor: hexToRgba(color || '', 0.6) }}>
        <AttachmentIcon className="h-4 w-4 self-center"/>
      </div>
    }
    <div className="self-center">
      {children}
    </div>
  </CombinedLink> 
  );
}

export default PillLink;
