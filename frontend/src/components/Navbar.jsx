import React from 'react'
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link to="/">
                        <HiMiniBars3CenterLeft className="size-6" />
                    </Link>
                </div>

                <div>
                    nav items
                </div>
            </nav>
        </header>
    )
}

export default Navbar