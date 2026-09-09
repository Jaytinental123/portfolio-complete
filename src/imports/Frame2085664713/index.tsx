import imgImage32 from "./f691b52057029c7001161d3c523e1b0663c943d5.png";
import imgImage34 from "./b900ddc216536adc024f9a72c3b38903c082fb78.png";
import imgImage33 from "./73b8479717ee72b4d45bb2de21a8447c0328de99.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[651.121px]">
      <div className="aspect-[744/395] relative shrink-0 w-full" data-name="image 34">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.93%] left-0 max-w-none top-0 w-[99.98%]" src={imgImage34} />
        </div>
      </div>
      <div className="aspect-[744/374] relative shrink-0 w-full" data-name="image 33">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.87%] left-0 max-w-none top-[-11.76%] w-[99.98%]" src={imgImage33} />
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <div className="h-[672px] relative shrink-0 w-[1098px]" data-name="image 32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.45%] left-[-17.39%] max-w-none top-[-11.61%] w-[128.88%]" src={imgImage32} />
        </div>
      </div>
      <Frame />
    </div>
  );
}