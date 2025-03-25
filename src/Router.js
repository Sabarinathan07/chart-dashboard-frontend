import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup"
import UserLogin from "./pages/UserLogin"
import AdminLogin from "./pages/AdminLogin"
// import AuthContext from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
// import Chart from "./Charts";
const Router = () => {

    // const { loggedIn } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Navbar />
            <Switch>
                <Route path="/"  exact component={UserLogin} />
				<Route path="/login"  component={UserLogin} />
                <Route path="/signup" component={UserSignup} />
                <Route path="/home" component={Home} />
                <Route path="/admin-login" component={AdminLogin} />
				
                {/* {loggedIn === false && (
                    <div>
                        <Route path="/home" component={Home} />
                    </div>
                )}
                {loggedIn === true && (
                    <div>
                        <Route path="/home" component={Home} />
                        
                    </div>
                )} */}

                
				
            </Switch>
            {/* <Chart /> */}
            
			
		</BrowserRouter>
	);
};

export default Router;
