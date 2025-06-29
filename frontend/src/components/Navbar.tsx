const Navbar = () => (
  <nav className="bg-white bg-opacity-50 border-gray-200 dark:bg-gray-900 dark:bg-opacity-50 sticky top-0 backdrop-blur-md">
    <div className="max-w-screen-xl mx-auto flex items-center justify-center p-4">
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

