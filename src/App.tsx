import Card from "./components/Card";

const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-100 bg-[url(/images/background-pattern-mobile.svg)] bg-no-repeat bg-contain md:bg-[url(/images/background-pattern-desktop.svg)]">
      <Card />
    </main>
  );
};
export default App;
