const RatioSetting = ({ handleAspectRatio }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-700 mb-1">
        Aspect Ratio Presets
      </label>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleAspectRatio("square")}
          className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
        >
          1:1
        </button>
        <button
          onClick={() => handleAspectRatio("landscape")}
          className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
        >
          16:9
        </button>
        <button
          onClick={() => handleAspectRatio("traditional")}
          className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
        >
          4:3
        </button>
        <button
          onClick={() => handleAspectRatio("classic")}
          className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
        >
          3:2
        </button>
      </div>
    </div>
  );
};

export default RatioSetting;
