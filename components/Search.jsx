export default function Search({ setItems }) {

    const searchForItem = (searchInput, {items}) => {
        if (!searchInput.trim()) {
          setItems(items);
        } else {
          setItems(() => {
            items.filter(item =>
            item.text.toLowerCase().includes(searchInput.toLowerCase()));
          });
        }
      };

    return (
    <form action="">
        <label htmlFor="searchInput">Search: </label>
        <input type="text" name="searchInput" onChange={(e) => searchForItem(e.target.value)}/>
    </form>
    )
}