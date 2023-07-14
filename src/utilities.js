// utilities.js

import React from 'react';

export function sortNewEntries(entries) {
  const newArr = [...entries];
  const newEntries = newArr.filter((entry) => entry.props.status === 'new');
  const delEntries = newArr.filter((entry) => entry.props.status === 'del');
  return {
    new: newEntries,
    del: delEntries,
  };
}
