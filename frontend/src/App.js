import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
import DoctorDetails from "./components/doctordetails/doctordetails";
import Doctor from "./components/Doctor/Doctor";
import Info from "./components/doctorinfo/doctorinfo";
import Navigation from "./components/navigation";
import Admin from "./components/admin/admin";
import DoctorProfile from "./components/doctor_profile/doctor_profile";
import SignUp from "./components/signUp/signUp";
import Accept from "./components/admin/admin"
import Profile from "./components/profile/profile";
import AddStory from "./components/profile/addstory";
import Home from "./components/Home";
import FoodTracker from "./components/profile/foodtracker";
import Test from "./components/profile/test";
import CreateStories from "./components/storie"


const App = () => {
  return (
    <>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/doctor/:id" render={() => <DoctorDetails />} />
          <Route exact path="/admin" render={() => <Admin />} />
          <Route exact path="/doctor" render={() => <Doctor />} />
          <Route exact path="/register" render={() => <SignUp />} />
          <Route exact path="/doctorProfile" render={() => <DoctorProfile />} />
          <Route exact path="/addyourstory" render={() => <AddStory />} />
          <Route exact path="/foodtracker" render={() => <FoodTracker />} />
          <Route exact path="/create/stories" render={() => <CreateStories />} />
          <Route exact path="/accept" render={() => <Accept/>} />
          <Route exact path="/doctorInfo" render={()=> <Info />}/>
        </Switch>
      </div>

    </>
  );
};

export default App;
