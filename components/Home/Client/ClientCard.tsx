import React from 'react'
type Props{
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Id magni velit laboriosam facilis ad in voluptas alias animi quae unde dolorem corrupti
        facere dolor repellendus corporis tempora, voluptatem nemo. Quibusdam.
      </p>

      <h1>{name}</h1>
      <p>{role}</p>
    </div>
  );
};

export default ClientCardSection;