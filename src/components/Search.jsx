import React from 'react';

export default function Search() {
  return (
    <div className='mx-auto mt-[15rem]'>
      <div className='flex items-center space-x-4'>
        <form
          action='/'
          method='get'
          className='relative flex items-center py-2 bg-white rounded-full border w-full'
        >
          <div className='relative flex items-center w-full'>
            <input
              type='text'
              id='header-search'
              placeholder='제목 & 키워드를 검색해 주세요'
              name='s'
              className='focus:outline-none text-black w-full py-3 px-10 rounded-full pr-16 border-gray-300'
            />
            <div className='absolute right-4'>
              <div>
                <i className='fa fa-search  bg-white text-gray-700 px-4 text-xl  cursor-pointer'></i>
              </div>
            </div>
          </div>
        </form>
        <div className='flex gap-2 items-center flex-shrink-0 bg-white  px-8 py-4 rounded-full border border-gray-300'>
          <button type='submit' className='text-gray-700'>
            최신순
          </button>
          <i className='fa-solid fa-angle-down text-gray-700 cursor-pointer'></i>
        </div>
      </div>
      <div className='flex justify-between mb-[4rem]'>
        <div className='flex items-center gap-2 mt-2'>
          <div className='border border-light-border rounded-full py-1 px-4 text-light-gray text-small-size'>
            #AI
          </div>

          <div className='border border-light-border rounded-full py-1 px-4 text-light-gray text-small-size'>
            #BACKEND
          </div>
          <div className='border border-light-border rounded-full py-1 px-4 text-light-gray text-small-size'>
            #AWS
          </div>
          <div className='border border-light-border rounded-full py-1 px-4 text-light-gray text-small-size'>
            #CULTURE
          </div>
          <div className='border border-light-border rounded-full py-1 px-4 text-light-gray text-small-size'>
            #DATA
          </div>
        </div>

        <p className='mt-2 text-veryLight-gray text-lg mr-8 -mt-1  '>인기순</p>
      </div>
    </div>
  );
}
