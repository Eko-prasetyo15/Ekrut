import './App.css';
import PageBox from './View/Page';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="py-3">
      <PageBox/>
      <ToastContainer />
    </div>
  );
}

export default App;
