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
        // inputRef.current.style.backgroundColor = 'skyblue'
        // inputRef.current.style.height = '40px'
        // inputRef.current.style.textAlign = 'center'
        // inputRef.current.style.width = '40%'
        // inputRef.current.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
        // inputRef.current.style.borderRadius = "10px"
        // inputRef.current.style.fontSize = "20px"
        
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