import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
