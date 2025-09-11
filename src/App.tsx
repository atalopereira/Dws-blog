import './app.scss'
import { Dropdown } from './components/Dropdown'
import { Header } from './components/Header'
import { SortButton } from './components/SortButton';

function App() {
const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5", "Opção 6"];

  return (
    <>
      <Header />
      <Dropdown title='Category' options={options} />
      <SortButton />
    </>
  )
}

export default App
