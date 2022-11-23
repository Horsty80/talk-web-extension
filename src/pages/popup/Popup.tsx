import logo from "@assets/img/logo.svg";

export default function Popup(): JSX.Element {
  console.log(import.meta.env);
  return (
    <div className="absolute text-black top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-yellow-200">
      <header className="flex flex-col items-center justify-center ">
        <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/pages/popup/Popup.jsx</code> then save and reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React!
        </a>
        <p>Popup styled with TailwindCSS!</p>
      </header>
    </div>
  );
}
