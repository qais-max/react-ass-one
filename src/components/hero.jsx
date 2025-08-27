import Card from "./cards.jsx";

export default function Hero() {
  return (
    <section className="hero-cnt flex gap-20 m-2">
      <Card bgColor="bg-green-200 " />
      <Card bgColor="bg-blue-200" />
    </section>
  );
}

// export default function Hero() {
//   // const [currentValue, setCurrentValue] = useState(0);
//   const [currentValue, setCurrentValue] = useState(false);

//   const clickHandler = () => {
//     // setCurrentValue((prevState) => prevState + 1);
//     setCurrentValue((prevState) => !prevState);
//   };

//   return (
//     <div>
//       <section>{currentValue ? "On" : "Off"}</section>
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   );
// }
