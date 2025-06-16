import { ItemBar } from "../../layouts/MenuBar/ItemBar";

export const Header = () => {
  return (
    // <header className="fixed top-0 left-0 right-0 <-50 w-full py-4">
    <header className="fixed lg:fixed top-0 left-0 right-0 w-full py-4 lg:mb-15 z-50">
      {/* <nav className="flex flex-row gap-2"> */}
      <nav className="pt-2">
        {/* <h1 className="text-[#4B4952] text-2xl font-bold">Jose Ahumada </h1> */}
        <ul className="fixed right-[-1.2rem] top-1/2 -translate-y-1/2 flex flex-col items-end gap-2 lg:translate-y-0 lg:flex-row lg:items-center lg:justify-center px-7 lg:static">
          <ItemBar />
        </ul>
      </nav>
    </header>
  );
};
