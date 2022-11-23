import "@pages/panel/Panel.css";
import logo from "@assets/img/logo.svg";

import "@assets/styles/tailwind.css";

export default function Panel(): JSX.Element {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-red-300">
      <header className="flex flex-col items-center justify-center ">
        <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/pages/panel/Panel.tsx</code> then save. You need to close and reopen your
          devtools.
        </p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <p>Panel styled with TailwindCSS!</p>
      </header>
    </div>
  );
}
