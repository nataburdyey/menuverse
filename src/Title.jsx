function Title({ text }) {
  return (
    <header>
      <h2 className='title'>{text || 'MenuVerse'}</h2>
      <div className='title-underline'></div>
    </header>
  );
}
export default Title;
