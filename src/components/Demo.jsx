import { Input } from "../components/ui/input";
import { Button } from "./ui/button";

const Demo = () => {
  return (
    <section className="max-w-xl w-full mt-16">
      <div className="flex flex-col gap-2">
        <form className="relative flex justify-center items-center gap-3">
          <Input
            placeholder="Enter the URL here"
            className="url_input "
            onChange={() => {}}
          />
          <Button className="w-[20%] bg-pink-900 text-xs uppercase">
            ⚙️ Summarize
          </Button>
        </form>
        {/* Browse URL History */}
      </div>
    </section>
  );
};

export default Demo;
