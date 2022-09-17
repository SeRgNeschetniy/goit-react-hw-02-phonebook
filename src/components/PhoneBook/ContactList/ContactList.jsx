import React from 'react';

export default function PhoneBookList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button type="submit" onClick={() => removeContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
