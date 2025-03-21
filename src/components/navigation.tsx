const Navigation = () => {
  return (
    <div className="absolute w-screen h-screen">
      <div className="p-1 h-full w-full flex flex-col">
        <div className="h-8 flex">
          <div className="bg-blue-200 w-8">A</div>
          <div className="bg-blue-400 flex-grow">B</div>
          <div className="bg-blue-600 w-8">C</div>
        </div>
        <div className="w-full flex justify-between flex-grow">
          <div className="top-8 w-8 bg-gray-200">D</div>
          <div className="top-8 w-8 right-8 bg-purple-200">E</div>
        </div>
        <div className="h-8 flex">
          <div className="bg-red-200 w-8">F</div>
          <div className="bg-red-400 flex-grow">G</div>
          <div className="bg-red-600 w-8">H</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
