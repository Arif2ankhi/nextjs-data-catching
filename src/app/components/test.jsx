import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links  =
    <>
    <li><Link href ="/">Home</Link></li>
    <li><Link href ="/posts">Posts</Link></li>
    <li><Link href ="/dashboaed">Dashboard</Link></li>
    {/* <li><Link href ="/showcase">Showcase</Link></li> */}
    {/* <li><Link href ="/about">About</Link></li> */}
    {/* <li><Link href ="/about/developers">Developers</Link></li> */}
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
      </ul>
    </div>
    <Link href ="/" className="btn btn-ghost text-xl">
    daisyUi
    </Link>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;


Data-fetching 

import React from 'react';

const PostPage = async () => {

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const posts = await res.json();



    return (
        <div>
            <h2>  Hello POST: {posts.length}</h2>
        </div>
    );
};

export default PostPage;



// Card 

   <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>