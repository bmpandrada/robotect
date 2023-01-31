
import './search-box.style.css'

const SearchBox = ({className,placeHolder,inputSearch}) =>{
        return(
                <input 
                className={`search-box ${className}`}
                type='search' 
                placeholder={placeHolder}
                onChange={inputSearch}/>
        )
}

export default SearchBox;