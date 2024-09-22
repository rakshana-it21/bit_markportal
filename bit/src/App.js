
import Landing from './components/Landing';
import Validation from './components/Validation';
import { Routes,Route} from 'react-router-dom';
import Studentvalid from './components/Studentvalid';
import Department from './components/Department';
import Agri from './components/Agri';
import Agri_sem1 from './components/Agri_sem1';
import Agri_enter from './components/Agri_enter';
import Agri_phy_1 from './components/Agri_phy_1';
import Agri_Chem_ from './components/Agri_Chem_';
import Agri_enter2 from './components/Agri_enter2';
import Agri_comp from './components/Agri_comp';
import Agri_Electricals1 from './components/Agri_Electricals1';
import AgriEnglish1 from './components/AgriEnglish1';
import Agri_Draw from './components/Agri_Draw';
import Agri_tamil from './components/Agri_tamil';
import Display1_ag from './components/Display1_ag';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Validation" element={<Validation/>}/>
        <Route path="/Department" element={<Department/>}/>
        <Route path="/Agri" element={<Agri/>}/>
        <Route path="/Agrisem" element={<Agri_sem1/>}/>
        <Route path='/Agri1' element={<Agri_enter/>}/>
        <Route path='/Agri2' element={<Agri_enter2/>}/>
        <Route path='/Agri_phy' element={<Agri_phy_1/>}/>
        <Route path='/Agri_chem' element={<Agri_Chem_/>}/>
        <Route path='/Agri_comp' element={<Agri_comp/>}/>
        <Route path='/Agri_ele' element={<Agri_Electricals1/>}/>
        <Route path='/Agri_eng' element={<AgriEnglish1/>}/>
        <Route path='/Agri_draw' element={<Agri_Draw/>}/>
        <Route path='/Agri_tamil' element={<Agri_tamil/>}/>
        <Route path='/display1' element={<Display1_ag/>}/>
      </Routes>
    </div>
  );
}

export default App;
