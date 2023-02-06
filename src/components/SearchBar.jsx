import { useSearchParams } from 'react-router-dom';
import { Box } from './Box';

export const SearchBar = ({ onSubmit }) => {
  // const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onChange = e => {
    setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});
    // setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // onSubmit(query);

    // setQuery('');

    onSubmit(query);
  };

  return (
    <Box as="form" width="600px" onSubmit={handleSubmit}>
      <Box
        as="input"
        padding="16px"
        borderRadius="normal"
        width="100%"
        mt="4"
        onChange={onChange}
        value={query}
        type="text"
        placeholder="Search a movie"
      />
    </Box>
  );
};
