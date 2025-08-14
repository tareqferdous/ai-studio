const RatioSetting = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-700 mb-1">
        Aspect Ratio Presets
      </label>
      <div className="flex flex-wrap gap-2">
        <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
          1:1
        </button>
        <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
          16:9
        </button>
        <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
          4:3
        </button>
        <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
          3:2
        </button>
      </div>
    </div>
  );
};

export default RatioSetting;
