import {Routes, Route, BrowserRouter} from "react-router-dom"
import {HomeViewContainer} from "./containers/views/HomeViewContainer"

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeViewContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
};
