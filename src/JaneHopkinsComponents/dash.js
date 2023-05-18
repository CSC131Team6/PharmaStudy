import React, { useEffect } from "react";
import { useState } from "react";
import { useUserContext } from "../config/JHUserContext";
import useJaneHopkins from "../hooks/useJaneHopkins";
import useFDA from "../hooks/useFDA";
import useBavaria from "../hooks/useBavaria";
import JaneHopkins from "./JaneHopkins";
import "./janehopkins.modules.css";
import TopBar from "../topBar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PatientTable from "./JaneHopkins/patientTable";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function DoctorContainer() {
  const { user, logoutUser } = useUserContext();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <jhform form className="jhform">
            <div>
              <title>Current User : {user.email}</title>
              <button onClick={logoutUser}>Log out</button>
            </div>
          </jhform>
          </Box>
      </Container>
    </React.Fragment>
  );
}

function PatientContainer() {
  const { user, logoutUser } = useUserContext();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <jhform form className="jhform">
          <div>
            <Form />
          </div>
        </jhform>
        </Box>
      </Container>
    </React.Fragment>
  );
}

function ListContainer() {
  const { user, logoutUser } = useUserContext();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <TestDataPull />
          <PatientTable />
        </Box>
      </Container>
    </React.Fragment>
  );
}

function Dashboard() {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <TopBar />
      <BasicTabs />
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Doctor Profile" {...a11yProps(0)} />
          <Tab label="Add Patient Data" {...a11yProps(1)} />
          <Tab label="Patient List" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Welcome Doctor! 
        <DoctorContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Add A Patient
        <PatientContainer />
      </TabPanel>
      <TabPanel value={value} index={2}>
        List of all Current Patients
        <ListContainer />
      </TabPanel>
    </Box>
  );
}

function TestDataPull () {
  const { entities } = useJaneHopkins();
  console.log(entities);

  //USING REAL LIST
  const realList = async () => {
    //console.log('testing1');

    const gettingList = await entities.patient.list();
    //console.log('testing2');
    gettingList.map((persons) => <li>{persons}</li>)
    console.log(gettingList);
  }

  realList();
  return (
    <div>
      <p></p>
      <ul>{realList}</ul>
    </div>
  );
}

function MultiListComponent({items, setItems,propertyName}) {
  const [tempTextEntered, setTempTextEntered] = useState("");
  const addItem=(newItemName)=>{
    newItemName = newItemName.trim();
    //Check if medication name already exists
    if(checkIfItemExists(newItemName)){
      alert("Item already exists! Please enter a different name.")
      return;
    }
    if(newItemName.length < 3){
      alert("Name too short. Please enter a longer name.");
      return;
    }
    const newItem= {};
    newItem[propertyName] = newItemName;
    setItems([...items, newItem])
    //Clear input
    setTempTextEntered("");
  }
  const updateItem=(indexToUpdate)=>{
    let newName = prompt("Enter new med name");
    if(!newName){
      return;
    }
    newName = newName.trim();
    if(checkIfItemExists(newName)){
      alert("Medication already exists! Please enter a different name.")
      updateItem(indexToUpdate);
      return;
    }
    const newMeds=items[indexToUpdate]
    newMeds[propertyName]=newName;
    items[indexToUpdate]=newMeds;
    setItems([...items])
  }
  const deleteItem=(indexToDelete) => {
    let updatedMeds=[...items]
    updatedMeds.splice(indexToDelete,1)
    setItems(updatedMeds)
  }
  const checkIfItemExists = (itemName) =>{
    return items.find(m => m[propertyName].toLowerCase() == itemName.toLowerCase());
  }
  const handleKeyDown = (e) => {
    if(e.key == 'Enter'){
      addItem(tempTextEntered);
    }
  }

  return (
    <div>
      <input  
      value={tempTextEntered}
      onKeyDown={handleKeyDown}
      onChange={e => setTempTextEntered(e.target.value)} /> 
      <button onClick={() => addItem(tempTextEntered)}>Add</button>
      <div>
        {items.map( (item,index) =>
        (
          <div className="pill" key={index}>
            <strong>{item[propertyName]} <button title="Remove" onClick={() => deleteItem(index)}>Delete</button>
            <button title="Update" onClick={() => updateItem(index)}>Update</button>
            </strong> 
          </div>
        )
        )}
      </div>
    </div>
  )
};

function Form() {
  const { entities } = useJaneHopkins();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodPressure, setBP] = useState("");
  const [temperature, setTemperature] = useState("");
  const [oxygenSaturation, setOS] = useState("");
  const [uuid, setUUID] = useState("");
  const [address, setAddress] = useState("");
  const [currentMedications, setCurrentMedications] = useState([])
  const [familyHistory, setFH] = useState("");
  const [currentlyEmployed, setCE] = useState("");
  const [currentlyInsured, setCI] = useState("");
  const [icdHealthCodes, setIcdHealthCodes] = useState([]);
  const [allergies, setAllergies] = useState([]);
  //FIX (Jason: This requires it's own component. It has multiple properties instead of just one. Not fixed, still needs to be fixed.)
  const [visits, setVisits] = useState([]);

  const addPatient = async () => {
    const addPatientResponse = await entities.patient.add({
      firstName,
      lastName,
      //patientPicture,
      dob,
      insuranceNumber,
      height,
      weight,
      bloodPressure,
      temperature,
      oxygenSaturation,
      uuid,
      address,
      currentMedications,
      familyHistory,
      currentlyEmployed,
      currentlyInsured,
      icdHealthCodes,
      allergies,
      //visits
    });
    console.log(addPatientResponse);
  };

return(
  <>
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="filled-basic"
          label="Filled"
          variants="filled"
          defaultValue=""
          color='secondary'
          placeholder='First Name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Last Name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <TextField
          required
          placeholder='MM/DD/YYYY'
          value={dob}
          onChange={e => setDOB(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Insurance Number'
          value={insuranceNumber}
          onChange={e => setInsuranceNumber(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Height'
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Weight'
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      
      </div>
      <div>
      <TextField
          required
          //id="outlined-required"
          placeholder='Blood Pressure'
          value={bloodPressure}
          onChange={e => setBP(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Temperature'
          value={temperature}
          onChange={e => setTemperature(e.target.value)}
        />
        <TextField
          required
          placeholder='Oxygen Saturation'
          value={oxygenSaturation}
          onChange={e => setOS(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='UUID'
          value={uuid}
          onChange={e => setUUID(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Address'
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Family History'
          value={familyHistory}
          onChange={e => setFH(e.target.value)} 
        />
        
      </div>
      <div>
      <TextField
          required
          //id="outlined-required"
          placeholder='Current Employment'
          value={currentlyEmployed}
          onChange={e => setCE(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          placeholder='Current Insurance'
          value={currentlyInsured}
          onChange={e => setCI(e.target.value)}
        />
        <h4>List of Current Medications</h4>
        <MultiListComponent
          items={currentMedications} 
          setItems={setCurrentMedications} 
          propertyName="medication" 
          placeholder='Current Medications'
        ></MultiListComponent>
        <label>
        ICD Health Codes
        <MultiListComponent 
          items={icdHealthCodes} 
          setItems={setIcdHealthCodes} 
          propertyName="code"
        ></MultiListComponent>
        </label><p></p><label>
          Allergies:
          <MultiListComponent 
            items={allergies} 
            setItems={setAllergies} 
            propertyName="allergy"
            ></MultiListComponent>
        </label><p></p><label>
        Visits: 
        <input
          //NEED TO FIX
          //placeholder='Visits'
          //value={visits}
          //onChange={e => setVisits(e.target.value)} 
          />
        <p></p>
      </label>
      </div>
        <button onClick={() => addPatient()}>Add Patient</button>
      <p></p>
      </ Box>
      </>
  );
}

export default Dashboard;
