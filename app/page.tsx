import Image from 'next/image';

export default function Home() {
  return (
    <div className='homeWrapper'>
      <Image src='/favicon.ico' alt='favicon' width={100} height={100} className='logo' />
      <h1>Welcome to Way2AR !</h1>
    </div>
  );
}
