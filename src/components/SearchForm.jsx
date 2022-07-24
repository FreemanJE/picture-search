import { useEffect, useContext} from 'react';
import MyContext from '../context/MyContext';


const SearchForm = () => {

    const {setSearch, searchInput, setSearchInput, inputRef } = useContext(MyContext);
    
    const submitHandler = (e) => {
        e.preventDefault();
        setSearch(searchInput);
        setSearchInput("");
    
    };
    
    useEffect(() => {
        inputRef.current.focus()
        
        
      }, [])      

    return (
        <form>
            <input
            ref={inputRef}
            type="text" value={searchInput} placeholder="search"
            onChange={(e) => setSearchInput(e.target.value)} />
            <button className='btn1' onClick={(e) => submitHandler(e)}>Submit</button>

        </form>
    )
}
export default SearchForm