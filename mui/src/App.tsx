import BoxComponent from "./components/LayoutComponents/BoxComponent";
import GridComponent from "./components/LayoutComponents/GridComponent";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiButton from "./components/MuiButton";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";
import MuiAccordian from "./components/MuiAccordian";
import MuiImageList from "./components/MuiImageList";
import "./App.css";
import MuiNavbar from "./components/MuiNavbar";
import MuiLink from "./components/MuiLink";
import MuiBreadcrumb from "./components/MuiBreadcrumb";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete />
      <BoxComponent />
      <GridComponent />
      <MuiCard />
      <MuiAccordian />
      <MuiImageList />
      <MuiNavbar />
      <MuiLink />
      <MuiBreadcrumb />
    </div>
  );
}
export default App;
