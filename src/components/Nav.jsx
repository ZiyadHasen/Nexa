import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className='p-4 flex justify-between'>
        {/* Left section */}
        <div className='flex space-x-6'>
          <a href='/' className='text-white font-semibold cursor-pointer'>
            SPARTA
          </a>
        </div>

        {/* Center section */}
        <div className='flex space-x-6'>
          <a href='/' className='text-white font-medium cursor-pointer'>
            블로그
          </a>
          <a href='/' className='text-white font-medium cursor-pointer'>
            서비스 특징
          </a>
          <a href='/' className='text-white font-medium cursor-pointer'>
            강점
          </a>
          <a href='/' className='text-white font-medium cursor-pointer'>
            투자사
          </a>
          <a href='/' className='text-white font-medium cursor-pointer'>
            포트폴리오
          </a>
          <a href='/' className='text-white font-medium cursor-pointer'>
            진행과정
          </a>
        </div>

        {/* Right section */}
        <div className='flex space-x-6'>
          <a href='/' className='text-white underline cursor-pointer'>
            KR
          </a>
          <a href='/' className='text-white  cursor-pointer'>
            EN
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
