const CardPost: React.FC = () => {
  return (
    <article className="mb-4 border-b border-gray-300 p-4">
      <header className="mb-2 flex items-center">
        <img
          src="avatar.jpg"
          className="h-12 w-12 rounded-full"
          alt="User avatar"
        />
        <div className="ml-2">
          <h1 className="text-lg font-bold text-gray-800">User Name</h1>
          <small className="text-gray-600">Today at 2:34pm</small>
        </div>
      </header>
      <div className="text-gray-700">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <footer className="mt-2 flex items-center">
        <div>
          <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
            Like
          </button>
          <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
            Comment
          </button>
          <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
            Share
          </button>
        </div>
        <small className="ml-auto text-gray-600">23 likes</small>
      </footer>
    </article>
  );
};
export { CardPost };
