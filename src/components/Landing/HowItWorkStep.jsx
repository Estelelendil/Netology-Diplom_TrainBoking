import classNames from "classnames";

export default function HowItWorkStep({ step, text, c }) {
  //     const [item, setItem] = useState('');

  //   useEffect(() => {
  //     if (step === 'step-1') {
  //       setItem('/assets/images/how-it-work/step-1.svg');
  //     }
  //     if (step === 'step-2') {
  //       setItem('/assets/images/how-it-work/step-2.svg');
  //     }
  //     if (step === 'step-3') {
  //       setItem('/assets/images/how-it-work/step-3.svg');
  //     }
  //     if (step === 'step-4') {
  //       setItem('/assets/images/how-it-work/step-4.svg');
  //     }
  //   }, [step]);

  // console.log(item);
  // console.log(classs);

  // console.log(text);

  // console.log(classs);

  // console.log(text);
  const image = classNames(
    {
      "bg-[url('img/step1.png')]": step === "step-1",
      "bg-[url('img/step2.png')]": step === "step-2",
      "bg-[url('img/step3.png')]": step === "step-3",
      "bg-cover w-[162px] h-[162px]": true,
    },
    [c ?? ""]
  );
  return (
    <div className="flex flex-col items-center gap-[34px]">
      <div className={image}></div>
      {/* <SvgStep url={item}/> */}
      <h4 className="text-white w-[250px] text-center text-24">{text}</h4>
    </div>
  );
}
