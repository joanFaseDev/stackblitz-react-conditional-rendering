// Entry.js

import React from 'react';

export default function Entry({ content, status }) {
  return (
    <div className="entry">
      <span className="date-entry">{content.date}</span>
      {status === 'new' ? (
        <ins>{content.text}</ins>
      ) : status === 'del' ? (
        <del>
          <span className="line-through">{content.text}</span>
        </del>
      ) : (
        <p>{content.text}</p>
      )}
    </div>
  );
}
