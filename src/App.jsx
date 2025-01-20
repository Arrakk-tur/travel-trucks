import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CamperDetails from "./pages/CamperDetails";
import Header from "./components/Header";
import styles from "./styles/App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CamperDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
