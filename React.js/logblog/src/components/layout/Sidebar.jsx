const Sidebar = () => {

  return (
      <aside className="hidden md:block w-64 bg-black text-white px-4 py-6">
        <nav className="space-y-4">
          <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Dashboard
          </a>
          <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Categories
          </a>
          <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Tags
          </a>
          <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Archives
          </a>
        </nav>
      </aside>
  );
};

export default Sidebar;
