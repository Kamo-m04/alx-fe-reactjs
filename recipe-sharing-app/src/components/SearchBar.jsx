// src/components/SearchBar.jsx
import { useRecipeStore } from '../stores/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '8px',
        marginBottom: '20px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;
