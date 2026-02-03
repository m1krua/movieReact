import { Header } from "./components/Header/Header"
// import { Card } from "./components/Card/Card"
import { MovieCard } from "./components/Card/MovieCard"
import { HotNews } from "./components/HotNews/HotNews"
import { Discovery } from "./components/Discovery/Discovery"

function App() {
  return (
    <div>
      <Header />
      {/* <Card /> */}
      <MovieCard />
      <HotNews />
      <Discovery />
    </div>
  )
}

export default App