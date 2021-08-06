import Image from "next/image";
import { HearIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, price, star, description, total }) {
  console.log(location);
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;