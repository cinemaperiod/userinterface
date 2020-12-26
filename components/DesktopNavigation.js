import Link from 'next/link';

const DesktopNavigation = () => {
  return (
      <ul className='dropdown-list'>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/about'><a>Reviews</a></Link></li>
        <li><Link href='/courses'><a>Trending</a></Link></li>
        <li><Link href='/blog'><a>OTT Special</a></Link></li>
        <li><Link href='/contact'><a>Theatres</a></Link></li>
        <style jsx>{`
          .dropdown-list {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
          }
          .dropdown-list li {
            padding: 5px 10px;
          }
          .dropdown-list li a:after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #000;
            transition: width .3s;
          }
          .dropdown-list li a {
            font-size: 2rem;
          }
          // .dropdown-list li a:hover {
          //   border-bottom: 1px solid #444;
          // }
          .dropdown-list li a:hover::after {
            width: 100%;
            //transition: width .3s;
        }
        `}
        </style>
      </ul>
  );
}

export default DesktopNavigation;