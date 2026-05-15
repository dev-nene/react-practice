import Button from "./components/Button";
import Greeting from "./components/Greeting";

function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <h1>Hello World!</h1>
      <Greeting />
      <Button />
      <Button
        text="Click me twice"
        color="red"
        fontSize="24"
        handleClick={() => handleButtonClick("https://www.google.com")}
      />
    </>
  );
}

export default App;
