function MenuItem({ title, price, img, desc, category }) {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img"></img>
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">{price}</div>
          <p className="item-text">{desc}</p>
        </header>
      </div>
    </article>
  );
}
export default MenuItem;
