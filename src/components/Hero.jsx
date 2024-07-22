import logo from "../assets/logo.png";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center pt-3">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="object-contain" width={40} />
          <span className="font-semibold text-xl">SUMZ</span>
        </div>
        <Button
          onClick={() =>
            window.open("https://github.com/NatnaelDemelash/article_summerizer")
          }
        >
          GitHub
        </Button>
      </nav>

      <h1 className="head_text">
        Summarize Article using
        <br className="max-md:hidden" />{" "}
        <span className="text_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with <strong>SUMZ</strong> an Open-Source article
        summarizer that transform lengthy articles into clear and concise
        summaries{" "}
      </h2>
    </header>
  );
};

export default Hero;
