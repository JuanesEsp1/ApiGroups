import Link from "next/link";
import { BsFillHouseDoorFill } from "react-icons/bs";

const BtnHome = () =>{
    return(
        <Link
            href="/"
            className='flex justify-center items-center gap-2'
        >
            Go to home
            <BsFillHouseDoorFill/>
        </Link>
    );
}

export default BtnHome