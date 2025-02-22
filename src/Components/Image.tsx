interface imageProps {
  img: string;
}

function Image({ img }: imageProps) {
  return (
    <div className="relative">
      <img src={img} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-purple-300/10"></div>
    </div>
  );
}

export default Image;
