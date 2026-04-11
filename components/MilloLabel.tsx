import Image from "next/image";

export default function MilloLabel() {
  return (
    <div className="w-full">
      <Image
        src="/media/brand/Millo-label.jpg"
        alt="Millo — Ancient Grain. Modern Fuel."
        width={1128}
        height={191}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
