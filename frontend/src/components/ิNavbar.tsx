const Navbar = () => (
  <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
    <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <ul className="flex space-x-4 text-gray-800 dark:text-slate-50">
        <li>
          <a href="#">Home</a>
        </li>
        <li> 
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
