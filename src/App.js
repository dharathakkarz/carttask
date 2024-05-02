
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';

// import Login from './pages/user/Login';
// import { AuthProvider } from './context/AuthContext';
// import Cart from './pages/cart/Cart';
// import Buy from './pages/Buy';
// import Nav from './components/Nav';

// function App() {
    
//     return (
//         <>
//             <AuthProvider>
//                 <Router>
//                     <Nav   />
//                     <Routes>
                      
//                         <Route path="/product" element={<Home />} />
                 

//                         <Route path="/login" element={<Login />} />
//                         <Route path="/cart" element={<Cart />} />
//                         <Route path="/buy-now" element={<Buy />} />
//                         {/* <Route path="/navbar" element={<Nav />} /> */}

//                     </Routes>
//                 </Router>
//             </AuthProvider>

//         </>
//     );
// }

// export default App; // without img




import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/user/Login';
import { AuthProvider } from './context/AuthContext';
import Cart from './pages/cart/Cart';
import Buy from './pages/Buy';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                 
                    <div className="background-image"></div>

                    <Nav />

              
                    <div className="content">
                        <Routes>
                            <Route path="/product" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/buy-now" element={<Buy />} />
                        </Routes>
                    </div>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
