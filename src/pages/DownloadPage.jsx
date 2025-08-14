import ImageCard from "../components/ImageCard";

const DownloadPage = () => {
  return (
    <div class="relative z-10">
      <h2 class="text-4xl font-bold mb-8">
        Downloaded <span class="text-2xl">👋</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Image Card 1  */}
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default DownloadPage;
