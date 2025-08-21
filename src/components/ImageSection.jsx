import ImageCard from "./ImageCard";

const ImageSection = ({ imageUrl }) => {
  return (
    <div>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1">
        <ImageCard imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default ImageSection;
