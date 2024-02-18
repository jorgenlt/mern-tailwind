import "./App.css";

function App() {
  return (
    <>
      <div className="space-y-10">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img className="h-12 w-12" src="/vite.svg" alt="vite" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">mern-tailwind</div>
            <p className="text-slate-500">mern-tailwind</p>
          </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="/vite.svg"
            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">mern-tailwind</p>
              <p className="text-slate-500 font-medium">mern-tailwind</p>
            </div>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
