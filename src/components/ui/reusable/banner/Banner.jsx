"use client";

const Banner = ({ imageUrl, title, subtitle, className }) => {
  return (
    <section
      className={`${className} relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden -mt-[1px] text-white`}
    >
      {/* Parallax Fixed Background Image - Only for Banner */}
      <div className='fixed top-0 left-0 w-full h-full -z-10 pointer-events-none pt-4 md:pt-0'>
        <img
          src={imageUrl}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>
      {/* <div
        className="fixed top-0 left-0 w-full h-full !bg-cover !bg-center -z-10 pointer-events-none"
        style={backgroundStyles}
      /> */}

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-[#000]/40 z-0' />

      {/* Banner Content */}
      <div className='relative z-10 text-center px-4'>
        <h1 className='text-3xl md:text-5xl font-medium'>{title}</h1>
        {subtitle && (
          <p className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-4'>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Banner;
