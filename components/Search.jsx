export default function Search({onSearch}) {
    return (
    <form action="">
        <label htmlFor="searchInput">Search/filter list: </label>
        <input type="text" name="searchInput" onChange={(e) => onSearch(e.target.value)}
/>
    </form>
    )
}