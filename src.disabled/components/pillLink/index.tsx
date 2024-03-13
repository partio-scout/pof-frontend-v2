import React from 'react';
import AttachmentIcon from '../../images/attachment.inline.svg';
import CombinedLink from '../combinedLink';
import { hexToRgba } from '../../utils/color';

interface PillLinkProps {
  to: string;
  color?: string | null;
  children: React.ReactNode;
  attachmentIcon?: boolean;
  icon?: string;
}

function PillLink({ to, children, color, attachmentIcon, icon }: PillLinkProps) {
  return (
    <CombinedLink
      to={to}
      className="flex flex-row bg-gray-light rounded-2xl p-3 md:p-3 font-tondu text-2xl uppercase tracking-wider align-center justify-start"
    >
      {attachmentIcon && (
        <div
          className="w-auto h-12 rounded-md p-2 mr-4 self-center"
          style={{ backgroundColor: hexToRgba(color || '', 0.6) }}
        >
          <AttachmentIcon className="h-4 w-auto self-center" />
        </div>
      )}
      {icon && (
        <div
          className="w-12 h-12 rounded-md p-2 mr-4 self-center"
          style={{ backgroundColor: hexToRgba(color || '', 0.6) }}
        >
          <img src={icon} className="h-4 w-auto self-center" />
        </div>
      )}
      <div className="self-center">{children}</div>
    </CombinedLink>
  );
}

export default PillLink;
