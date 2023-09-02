import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App flex h-screen">
      <Sidebar />
      <div className="w-4/5 bg-white p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Dashboard Content</h1>
      </div>
    </div>
  );
}

export default App;
