import { ItemBar } from "../../layouts/MenuBar/ItemBar";

export const Header = () => {
  return (
    <header>
      <nav className="mt-4">
        <h1 className="text-[#4B4952] text-2xl font-bold absolute ml-5">Jose Ahumada </h1>
        <ul className="flex flex-row justify-center gap-2">
          <ItemBar />
        </ul>
      </nav>
    </header>
  );
};
