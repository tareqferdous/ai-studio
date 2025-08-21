import { useEffect, useState } from "react";
import ImageSection from "../components/ImageSection";
import SearchInput from "../components/SearchInput";
import SettingPanel from "../components/SettingPanel";

const HomePage = () => {
  const [models, setModels] = useState([]);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [generateImageError, setGenerateImageError] = useState(null);

  const [form, setForm] = useState({
    prompt: "",
    model: "",
    seed: "",
    height: 1024,
    width: 1024,
  });

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getImageModels = async () => {
    try {
      const response = await fetch(`https://image.pollinations.ai/models`);
      if (!response.ok) {
        const errorMessage = `Fetching models data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      setModels(data);

      if (Array.isArray(data) && data.length > 0) {
        setForm((prev) => ({ ...prev, model: data[0] }));
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getImageModels();
  }, []);

  const handleAspectRatio = (type) => {
    if (type === "square") {
      setForm({ ...form, width: 1080, height: 1080 });
    } else if (type === "landscape") {
      setForm({ ...form, width: 1920, height: 1080 });
    } else if (type === "traditional") {
      setForm({ ...form, width: 1080, height: 768 });
    } else {
      setForm({ ...form, width: 1500, height: 1000 });
    }
  };

  const generateImage = async () => {
    if (!form.prompt) return;
    setLoading(true);
    setError(null);

    const encodedPrompt = encodeURIComponent(form.prompt);
    let url = `https://image.pollinations.ai/prompt/${encodedPrompt}`;

    const params = [];
    if (form.width) params.push(`width=${form.width}`);
    if (form.height) params.push(`height=${form.height}`);
    if (form.model) params.push(`model=${form.model}`);
    params.push(`seed=${Math.floor(Math.random() * 1000000000)}`);

    if (params.length > 0) {
      url += `?${params.join("&")}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const blob = await response.blob(); // Convert response to blob
      const blobUrl = URL.createObjectURL(blob); // Create a local URL for the blob
      setImageUrl(blobUrl);
    } catch (error) {
      setGenerateImageError(error);
    }
  };

  return (
    <main className="relative z-10">
      <h2 className="text-4xl font-bold mb-8">
        Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
      </h2>
      {/* Search Input */}
      <SearchInput
        handleFormChange={handleFormChange}
        form={form}
        generateImage={generateImage}
      />
      {/* Settings Panel  */}
      <SettingPanel
        models={models}
        handleFormChange={handleFormChange}
        form={form}
        handleAspectRatio={handleAspectRatio}
      />
      {/* Image Presets Section */}
      <ImageSection imageUrl={imageUrl} />
    </main>
  );
};

export default HomePage;
