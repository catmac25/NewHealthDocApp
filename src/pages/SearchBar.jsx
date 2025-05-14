import React from "react";
import {useState, useEffect} from "react"


const SearchBar = ({text})=>{
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const handleChange = (event)=>{
        setSearch(event.target.value);
    }

    useEffect(()=>{
        if (search !== ""){
            fetch (`http://api.tvmaze.com/search/shows?q=${search}`).then(res => res.json()).then
            (data => {setSearchData(data)});
        }else{
            setSearchData([]);
        }
    }, [search])
    return (
        <div>
            <input type = "text" placeholder={text}
            value = {search} onChange={handleChange} 
            className="h-20 md:w-140 rounded-xl shadow-xl pl-10 text-center w-70"/>
            <div className="border border-slate-100 shadow-2xl p-4">
                {searchData.map((data, key)=>{
                    return (
                    <div key = {key} className=" h-10 lg:w-140 w-70 p-7 px-3">
                     <a href={data.show.url} >{data.show.name}</a>
                     </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchBar;