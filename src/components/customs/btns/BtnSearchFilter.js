const BtnSearchFilter = ({prueba}) =>{
    return(
        <div>
            <button onClick={()=>prueba} className="w-[300px] h-[40px] border-[3px] rounded">Search</button>
        </div>
    );
}

export default BtnSearchFilter