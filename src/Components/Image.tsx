interface imageProps {
  img: string;
}

function Image({ img }: imageProps) {
  return (
    <div className="relative">
      <img src={img} className="w-full h-full object-cover" />
      <div className="absolute inset-0 md:bg-gradient-to-r from-black/100 from-2% to-yellow-50/20  bg-yellow-100/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 from-5% to-transparent" />
    </div>
  );
}

export default Image;
