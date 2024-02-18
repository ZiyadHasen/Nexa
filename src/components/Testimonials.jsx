import React from 'react';
import { userTestimonial } from '../data';
import Testimonial from './Testimonial';
import Marquee from 'react-fast-marquee';

export default function Testimonials() {
  return (
    <div className='my-[6rem]'>
      <Marquee direction='right' gradient={true} gradientWidth={100} speed={20}>
        {userTestimonial.map((user) => (
          <Testimonial
            key={user.id}
            description={user.description}
            name={user.name}
            location={user.location}
          />
        ))}
      </Marquee>
    </div>
  );
}
