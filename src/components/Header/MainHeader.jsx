import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
const MainHeader = () => {
    const navigate = useNavigate();
    const [search ,setSearch] = useState("");
    const [type, setType] = useState("작성자");

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    const handleTypeChange = (event) => {
        setType(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(search) {
            navigate(`/?search=${search}&type=${type}`);
        } else{
            navigate('/');
        }
    }
    return(
        // tailwind css 
        // flex display:flex; 
        // justify-between justify-content: space-between;
        // my-7 margin-top: 1.75rem; margin-bottom: 1.75rem; 
        <div className="flex justify-between my-7">
            
            <ul className="flex bg-yellow-500 text-white font-bold rounded-r-xl"> 
                <li className="px-40 py-2">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="px-40 py-2">
                    <Link to="/add">
                        ADD
                    </Link>
                </li>
            </ul>
            <form onSubmit={handleSubmit} >
                <div className="flex gap-6">
                    <label>
                        <select onChange={handleTypeChange} className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow">
                            <option value="작성자">작성자</option>
                            <option value="제목">제목</option>
                        </select>
                    </label>
                    <label>
                        <input placeholder="검색어를 입력해주세요" value={search} onChange={handleSearchChange} className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
                    </label>
                    <label className="mr-6">
                        <button type="submit" className="text-white bg-yellow-500 rounded-md w-16 font-medium h-full">검색</button>
                    </label>
                </div>
            </form>
        </div>
    )
}
export default MainHeader;