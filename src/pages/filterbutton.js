const FilterButton = ({name, handleSetTag}) => {
    return ( 
        <div className="blogs">
        <button onClick={ () => handleSetTag(name)}>{name}</button>
        </div>
     );
}
 
export default FilterButton;