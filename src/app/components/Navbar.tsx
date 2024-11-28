import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='container grid grid-cols-3'>
        <div className='flex'>
            <span className='text-sm cursor-pointer'>EN</span>
            <div className='flex'>
            <input type="text" className='border'/>
            <SearchIcon />
            </div>
        </div>
        <div>center</div>
        <div>right</div>
    </div>
  )
}

export default Navbar