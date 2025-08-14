import ImageSection from "../components/ImageSection";
import SearchInput from "../components/SearchInput";
import SettingPanel from "../components/SettingPanel";
import useModels from "../hooks/useModels";

const HomePage = () => {
  const models = useModels();

  return (
    <main className="relative z-10">
      <h2 className="text-4xl font-bold mb-8">
        Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
      </h2>
      {/* Search Input */}
      <SearchInput />
      {/* Settings Panel  */}
      <SettingPanel models={models.modelTypes} />
      {/* Image Presets Section */}
      <ImageSection />
    </main>
  );
};

export default HomePage;
