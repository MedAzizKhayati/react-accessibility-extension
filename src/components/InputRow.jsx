import React from 'react';
import Toggle from './Toggle';

export default function InputRow({
  title,
  Icon,
  comingSoon = false,
  last = false,
  enabled,
  setEnabled
}) {
  return (
    <div
      className={
        'flex p-2 items-center' + (last ? '' : ' border-b border-gray-200')
      }
    >
      <Icon className="text-xl" />
      <h1 className="text-lg ml-2 flex-1">{title}</h1>
      {comingSoon ? (
        <p className="text-xs ml-2 text-gray-500">Coming Soon</p>
      ) : (
        <Toggle enabled={enabled} onChange={() => setEnabled(!enabled)} />
      )}
    </div>
  );
}
