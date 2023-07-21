function Categories({ categories, handleOnClick }) {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='buton'
            key={category}
            className='btn'
            onClick={() => handleOnClick(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default Categories;
