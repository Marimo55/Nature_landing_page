type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className='container px-16 w-full max-w-[1440px] bg-white mx-auto'>
      {children}
    </div>
  );
}
