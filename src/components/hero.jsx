import Card from "./cards.jsx";

export default function Hero() {
  return (
    <section className="hero-cnt flex flex-col lg:flex-row  gap-10 m-2">
      <Card bgColor="bg-green-300 " head="The card" title="This is the card" />
      <Card bgColor="bg-blue-300" head="The Card" title="This is the card" />
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
