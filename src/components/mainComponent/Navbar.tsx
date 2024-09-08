import Image from 'next/image'
import zee5Icon from "../../../public/svg/ZEE5_logo.svg";
import nineSquare from "../../../public/svg/nine-square-white.svg";
import search from "../../../public/svg/search.svg";

export default function Navbar() {
  return (
    <div>
      <div>
        <Image className='h-10 w-10' src={zee5Icon} alt='zee5 icon'/>
          <ul className='flex'>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Premium</li>
              <li>News</li>
          </ul>
          <Image className='h-10 w-10' src={nineSquare} alt='nine square' />
      </div>

      <div>
        <Image src={search} alt="search icon" />
        <input type='text' placeholder='Search for Movies, Shows, Channels stc.' />
      </div>
    </div>
  )
}
