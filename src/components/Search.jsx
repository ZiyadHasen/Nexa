import React from 'react';

export default function Search() {
  return (
    <div className='mx-auto my-12'>
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
              className='focus:outline-none text-veryLight-gray w-full py-3 px-10 rounded-full pr-16 border-gray-300'
            />
            <div className='absolute right-4'>
              {/* Replace with your SVG icon */}
              <div>search icon</div>
            </div>
          </div>
        </form>

        <button
          type='submit'
          className='flex-shrink-0 bg-white text-gray-700 px-8 py-4 rounded-full border border-gray-300'
        >
          최신순
        </button>
      </div>
      <div className='flex justify-between my-1'>
        <div className='flex items-center gap-2'>
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

        <p className='mt-2 text-veryLight-gray text-lg mr-8  '>인기순</p>
      </div>
    </div>
  );
}
