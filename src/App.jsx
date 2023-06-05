import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterMenuItems = (category) => {
    if(category === 'all'){
      setMenuItems(menu);
      return;
    }
    const filteredItems = menu.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <>
      <main></main>
      <section className="menu">
        <Title />
        <Categories categories={categories} handleOnClick={filterMenuItems} />
        <Menu menuItems={menuItems} />
      </section>
    </>
  );
};
export default App;
