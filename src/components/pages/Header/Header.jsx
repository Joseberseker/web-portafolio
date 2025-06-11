import { ItemBar } from "../../layouts/MenuBar/ItemBar";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 <-50 w-full py-4">
      <nav className="flex justify-center items-center">
        {/* <h1 className="text-[#4B4952] text-2xl font-bold">Jose Ahumada </h1> */}
        <ul className="flex flex-row gap-2">
          <ItemBar />
        </ul>
      </nav>
    </header>
  );
};
