import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        {/* 👇 Ye line add ki hai Navbar ke niche */}
        <div className="border-b border-gray-300"></div>

        <main className="p-6">
          <h1 className="text-2xl font-bold">Trending Products</h1>
          <Products/>
        </main>
      </div>
    </div>
  );
}

export default App;
