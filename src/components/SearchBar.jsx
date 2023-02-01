import { useState } from 'react';
import { Box } from './Box';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <Box
      as="form"
      display="flex"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <Box
        as="input"
        padding="16px"
        borderRadius="normal"
        width="600px"
        mt="4"
        onChange={onChange}
        value={query}
        type="text"
        placeholder="Search a movie"
      />
    </Box>
  );
};
