import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";

const Demo = (e) => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async () => {
    alert("Submitted");
  };

  return (
    <section className="max-w-xl w-full mt-16">
      <div className="flex flex-col gap-2">
        <form
          className="relative flex justify-center items-center gap-3"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Enter the URL here"
            className="url_input "
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            value={article.url}
            type="url"
          />
          <Button
            type="submit"
            className="w-[20%] bg-pink-900 text-xs uppercase"
          >
            ⚙️ Summarize
          </Button>
        </form>
        {/* Browse URL */}
      </div>
      {/* Display Results */}
    </section>
  );
};

export default Demo;
