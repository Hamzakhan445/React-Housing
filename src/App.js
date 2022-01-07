import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Khyber from "./pages/Khyber";
import Karachi from "./pages/Karachi";
import Lahore from "./pages/Lahore";
import Sialkot from "./pages/Sialkot";
import Islamabad from "./pages/Islamabad";
import Peshawar from "./pages/Peshawar";
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Term from './pages/Term';
import Details from './pages/Details';
import Listing from './pages/Listing';
import AddListing from './pages/AddListing';
import Account from './pages/Account';
 
 
function App() {
  return (
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/khyber" element={<Khyber />} />
   <Route path="/karachi" element={<Karachi />} />
   <Route path="/lahore" element={<Lahore />} />
   <Route path="/sialkot" element={<Sialkot />} />
   <Route path="/islamabad" element={<Islamabad />} />
   <Route path="/peshawar" element={<Peshawar />} />

   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/account" element={<Account />} /> 

   <Route path="/signup" element={<Signup />} /> 
   <Route path="/details" element={<Details />} />
   <Route path="/listing" element={<Listing />} />  
   <Route path="/addlisting" element={<AddListing />} />  
   </Routes>
  );
}

export default App;
