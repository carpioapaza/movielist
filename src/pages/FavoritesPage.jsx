import { json } from 'body-parser';
import React from 'react';
import CardMovie from '../components/CardMovie';
import CardMovieSkeleton from '../components/CardMovieSkeleton';
const FavoritesPage = () => {
  const movies = JSON.parse(localStorage.getItem('favorites'));
  console.log(movies);
  return (
    <div className='favorites'>
      <div className='favorites__content ml-padding'>
        <h1 className='favorites__title'>Películas favoritas</h1>
        <CardMovie movies={movies} />
      </div>
    </div>
  );
};

export default FavoritesPage;
// import React, { useState } from 'react';

// const FavoritesPage = () => {
//   const [items, setItems] = useState([
//     { name: 'Item 1', category: 'Category A' },
//     { name: 'Item 2', category: 'Category B' },
//     { name: 'Item 3', category: 'Category A' },
//     { name: 'Item 5', category: 'Category B' },
//     { name: 'Item 6', category: 'Category B' },
//     { name: 'Item 7', category: 'Category B' },
//   ]);

//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [search, setSearch] = useState('');

//   const handleCategoryChange = (event) => {
//     console.log(event.target.value);
//     setSelectedCategory(event.target.value);
//   };

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const handleReset = () => {
//     setSelectedCategory('All');
//     setSearch('');
//   };

//   const filteredItems = items
//     .filter(
//       (item) => selectedCategory === 'All' || item.category === selectedCategory
//     )
//     .filter(
//       (item) =>
//         search === '' || item.name.toLowerCase().includes(search.toLowerCase())
//     );

//   console.log('filteredItems', filteredItems);
//   const hasFilters = selectedCategory !== 'All' || search !== '';

//   return (
//     <main className='favorites'>
//       <div>
//         <label htmlFor='category-select'>Category:</label>
//         <select
//           id='category-select'
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           <option value='All'>All</option>
//           <option value='Category A'>Category A</option>
//           <option value='Category B'>Category B</option>
//         </select>
//         <br />
//         <label htmlFor='search-input'>Search:</label>
//         <input id='search-input' value={search} onChange={handleSearchChange} />
//         {hasFilters && <button onClick={handleReset}>Reset</button>}
//         <ul>
//           {filteredItems.map((item) => (
//             <li
//               key={item.name}
//               style={{ color: item.category === 'Category A' ? 'red' : 'blue' }}
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </main>
//   );
// };

// export default FavoritesPage;
