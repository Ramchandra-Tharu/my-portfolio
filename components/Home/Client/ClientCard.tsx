import React from 'react'
import Image from 'next/image';
type Props = {
  image: string
  name: string;
  role:string;
}

const ClientCardSection = ({ image, name, role }: Props) => {
  return (
    <div className='m-2'>
      <Image
        src={image}
        alt="image"
        height={60}
        width={60}
        className="rounded-full"
      />

      <p className='mt-6 text-base text-gray-200 font-medium'>
        Lorem ipsum dolor sit amet consectetur <br />
        Id magni velit laboriosam facilis <br />
        facere dolor repellendus corporis
      </p>

      <h1 className='mt-6 font-bold text-xl text-cyan-200'>{name}</h1>
      <p className='mt-1 text-white'>{role}</p>
    </div>
  );
};

export default ClientCardSection;