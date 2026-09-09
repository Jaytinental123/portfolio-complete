import imgImage29 from "./017be7e812c7a69bb426d18a1472236febd5f251.png";
import imgImage35 from "./b91e6a2081f5642d0b08813fe0ee1ee65bd51e38.png";
import imgDsc67091 from "./488a195b22b072bfc16a4e9657cf657a48a4cb2a.png";
import imgDsc6809Copy1 from "./1e9f8d8a6db1b74ea4064955ff877d971fd1b5d2.png";
import imgDsc67031 from "./c72d71e2d242a2fa74dc469ae57161b495ca43b8.png";

function Group() {
  return (
    <div className="absolute contents left-[318px] top-[1160px]">
      <div className="absolute h-[339.442px] left-[318px] top-[1160px] w-[1486px]" data-name="image 35">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[948.15%] left-0 max-w-none top-[-304.44%] w-full" src={imgImage35} />
        </div>
      </div>
      <div className="absolute bg-white h-[50.288px] left-[1235.75px] top-[1439.1px] w-[118.176px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full">
      <div className="absolute h-[1142px] left-[91px] top-[125px] w-[1713px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
      <Group />
      <div className="absolute h-[581.949px] left-[2047px] top-[857px] w-[871.859px]" data-name="DSC_6709 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDsc67091} />
      </div>
      <div className="absolute h-[744.241px] left-[1804px] top-[124.54px] w-[1115px]" data-name="DSC_6809 copy 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDsc6809Copy1} />
      </div>
      <div className="absolute h-[582px] left-[1458px] top-[869px] w-[752px]" data-name="DSC_6703 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.02%] left-[-15.96%] max-w-none top-0 w-[115.98%]" src={imgDsc67031} />
        </div>
      </div>
    </div>
  );
}