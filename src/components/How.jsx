import React, { useState, useEffect } from 'react';
import HowCard from './HowCard';
import simple1 from '../images/How/simple1.png';
import simple2 from '../images/How/simple2.png';
import simple3 from '../images/How/simple3.png';
import detail1 from '../images/How/detail1.jpg';
import detail2 from '../images/How/detail2.png';
import detail3 from '../images/How/detail3.png';
import { BlurhashCanvas } from 'react-blurhash';

export default function How() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);
  const [isDetailMode1, setDetailMode1] = useState(true);
  const [isDetailMode2, setDetailMode2] = useState(false);
  const [isDetailMode3, setDetailMode3] = useState(false);

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = simple3;
  }, [simple3]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDetailMode1 = () => {
    setDetailMode1(true);
    setDetailMode2(false);
    setDetailMode3(false);
  };

  const toggleDetailMode2 = () => {
    setDetailMode2(true);
    setDetailMode1(false);
    setDetailMode3(false);
  };

  const toggleDetailMode3 = () => {
    setDetailMode3(true);
    setDetailMode1(false);
    setDetailMode2(false);
  };

  return (
    <div>
      <h1 className='text-center tracking-tight text-5xl max-medium:text-3xl max-medium:text-2xl max-small:text-xl max-midSmall:text-lg  font-bold text-black my-[6rem] max-medium:my-[2rem] max-small:my-[1.5rem] max-verySmall:my-[1rem]'>
        넥사코드는 어떻게 일할까요?
      </h1>

      <div className={`flex gap-[1rem] ${isSmallScreen ? 'flex-col' : ''}`}>
        {isDetailMode1 || isSmallScreen ? (
          <HowCard
            detailedImage={detail1}
            text='결코, 고객을 탓하지 않습니다
            고객의 성공에 기여하기 위해 성심을 다합니다'
            header='프로젝트를 진단해 방향성과
            성장성을 같이 고민합니다'
            buttonText='프로세스'
          />
        ) : (
          <div className='relative'>
            <div
              style={{
                display: imageLoaded ? 'none' : 'inline',
                borderRadius: '12px',
              }}
            >
              <BlurhashCanvas
                width='430'
                height='550'
                hash='LE5PI8cupJayT0tSkrkXivaJozkW'
                punch={1}
                style={{ borderRadius: '16px' }}
              />
            </div>
            <img
              style={{ display: !imageLoaded ? 'none' : 'inline' }}
              src={simple1}
              className='inline w-[430px] h-[550px] max-largeMedium:h-[]'
              alt='Simple 1'
            />
            <button
              onMouseOver={toggleDetailMode1}
              className='text-6xl bg-D3D3D pt-1 pb-3 px-4 rounded-full font-thin absolute bottom-[2rem] right-8 text-white'
            >
              +
            </button>
          </div>
        )}

        {isDetailMode2 || isSmallScreen ? (
          <HowCard
            detailedImage={detail2}
            text='겪어보지 않으면 모르는 부분들을 경험으로 짚어드립니다
            위험을 예방하고 제품 출시로 달려갑니다'
            header='미끼견적과 가짜 포트폴리오로
            고객을 현혹하지 않아요'
            buttonText='검증된 공식'
          />
        ) : (
          <div className='relative'>
            <div
              style={{
                display: imageLoaded ? 'none' : 'inline',
                borderRadius: '12px',
              }}
            >
              <BlurhashCanvas
                width='430'
                height='550'
                hash='LLNm$mtlxbIo-p_Nn$xu?bIU4.-;'
                punch={1}
                style={{ borderRadius: '16px' }}
              />
            </div>
            <img
              style={{ display: !imageLoaded ? 'none' : 'inline' }}
              src={simple2}
              className='inline w-[430px] h-[550px]'
              alt='Simple 2'
            />
            <button
              onMouseOver={toggleDetailMode2}
              className='text-6xl bg-D3D3D pt-1 pb-3 px-4 rounded-full font-thin absolute bottom-[2rem] right-8 text-white'
            >
              +
            </button>
          </div>
        )}

        {isDetailMode3 || isSmallScreen ? (
          <HowCard
            detailedImage={detail3}
            text='담당 매니저가 체계적인 프로세스로
            기획부터 개발까지 이끌어 드립니다'
            header='고객서비스를 확인, 자사의 기획/
               개발/운영 노하우를 제안하고 적용합니다'
            buttonText='진정성'
          />
        ) : (
          <div className='relative'>
            <div
              style={{
                display: imageLoaded ? 'none' : 'inline',
                borderRadius: '12px',
              }}
            >
              <BlurhashCanvas
                width='430'
                height='550'
                hash='LVP75?~qR%s:_MIBbGs:D%-paxWB'
                punch={1}
                style={{ borderRadius: '16px' }}
              />
            </div>
            <img
              style={{ display: !imageLoaded ? 'none' : 'inline' }}
              src={simple3}
              className='inline w-[430px] h-[550px]'
              alt='Simple 3'
            />

            <button
              onMouseOver={toggleDetailMode3}
              className='text-6xl bg-D3D3D pt-1 pb-3 px-4 rounded-full font-thin absolute bottom-[2rem] right-8 text-white'
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
