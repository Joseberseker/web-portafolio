import { ItemBar } from "../../layouts/MenuBar/ItemBar";

export const Header = () => {
  return (
    // <header className="fixed top-0 left-0 right-0 <-50 w-full py-4">
    <header className="fixed top-0 left-0 right-0 w-full py-4">
      {/* <nav className="flex flex-row gap-2"> */}
      <nav className="pt-2">
        {/* <h1 className="text-[#4B4952] text-2xl font-bold">Jose Ahumada </h1> */}
        <ul className="flex flex-col gap-2 text-center justify-center lg:flex-row ">
          <ItemBar />
        </ul>
      </nav>
    </header>
  );
};
