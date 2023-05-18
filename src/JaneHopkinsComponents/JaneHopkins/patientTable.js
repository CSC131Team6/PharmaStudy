import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useJaneHopkins from "../../hooks/useJaneHopkins";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(fname, lname, dob, inum, hei, wei, bloodp, tempur, os, uuID, addr, curMeds, famHis, curEmp, curIns, icdHC, aller, vis) {
  return { fname, lname, dob, inum, hei, wei, bloodp, tempur, os, uuID, addr, curMeds, famHis, curEmp, curIns, icdHC, aller, vis };
}

const rows = [
  createData('Jason', 'Borne', '12/12/1990', '1230481253', '450', '189', '120/80', '98', '97', '123094012', '1313 Borne Way', 'null', 'null', 'Hitman', 'Hitman & Co.', 'null', 'null', '5'),
  createData('Jason', 'cha', '10/23/1985', '123123', '140', '459', '120/80', '98', '97', '123123', '6530 Alone Ave', 'Alegra', 'Cancer', 'Programmer', 'Bluecross.', 'null', 'null', '3'),
  createData('Ian', 'Brutal', '05/06/99', '93821392', '6\'4', '143', '120/80', '98', '90', '93203910', '6969 Blank Street', 'Zertek', 'Sars', 'Entertainer', 'Red Cross.', 'null', 'null', '2'),
  createData('Jordyn', 'Rista', '11/17/2002', '1230981501', '5\'6', '123', '120/80', '96', '99', '12398471293', '1234 Crayon Way', 'Penicillin', 'null', 'TJMaxx', 'Kaiser', 'null', 'null', '6'),
  createData('Testing', 'ThisProgram', '12/12/1990', '1230481253', '450', '189', '120/80', '98', '97', '123094012', '1313 Borne Way', 'null', 'null', 'Hitman', 'Hitman & Co.', 'null', 'null', '5'),
  createData('Danny', 'Devito', '10/23/1985', '123123', '140', '459', '120/80', '98', '97', '123123', '6530 Alone Ave', 'Alegra', 'Cancer', 'Programmer', 'Bluecross.', 'null', 'null', '3'),
  createData('Jerma', 'Muhdude', '05/06/99', '93821392', '6\'4', '143', '120/80', '98', '90', '93203910', '6969 Blank Street', 'Zertek', 'Sars', 'Entertainer', 'Red Cross.', 'null', 'null', '2'),
  createData('Flurb', 'Nurb', '11/17/2002', '1230981501', '5\'6', '123', '120/80', '96', '99', '12398471293', '1234 Crayon Way', 'Penicillin', 'null', 'TJMaxx', 'Kaiser', 'null', 'null', '6'),
  createData('Rosalind', 'Hendericks', '12/12/1990', '1230481253', '450', '189', '120/80', '98', '97', '123094012', '1313 Borne Way', 'null', 'null', 'Hitman', 'Hitman & Co.', 'null', 'null', '5'),
  createData('Jean', 'Fernandez', '10/23/1985', '123123', '140', '459', '120/80', '98', '97', '123123', '6530 Alone Ave', 'Alegra', 'Cancer', 'Programmer', 'Bluecross.', 'null', 'null', '3'),
  createData('Ellie', 'May', '05/06/99', '93821392', '6\'4', '143', '120/80', '98', '90', '93203910', '6969 Blank Street', 'Zertek', 'Sars', 'Entertainer', 'Red Cross.', 'null', 'null', '2'),
  createData('Anya', 'Sharp', '11/17/2002', '1230981501', '5\'6', '123', '120/80', '96', '99', '12398471293', '1234 Crayon Way', 'Penicillin', 'null', 'TJMaxx', 'Kaiser', 'null', 'null', '6'),
  createData('Clementine', 'Brandt', '12/12/1990', '1230481253', '450', '189', '120/80', '98', '97', '123094012', '1313 Borne Way', 'null', 'null', 'Hitman', 'Hitman & Co.', 'null', 'null', '5'),
  createData('Tess', 'Lam', '10/23/1985', '123123', '140', '459', '120/80', '98', '97', '123123', '6530 Alone Ave', 'Alegra', 'Cancer', 'Programmer', 'Bluecross.', 'null', 'null', '3'),
  createData('Joji', 'Miller', '05/06/99', '93821392', '6\'4', '143', '120/80', '98', '90', '93203910', '6969 Blank Street', 'Zertek', 'Sars', 'Entertainer', 'Red Cross.', 'null', 'null', '2'),
  createData('Solaire', 'Astora', '04/26/1993', '1230981501', '5\'6', '123', '120/80', '96', '99', '12398471293', '4502 Sunlight Blvd', 'Penicillin', 'Polio', 'Adventurer', 'Sutter', '4503', 'Naproxin', '6'),
];

function RealDataPull () {
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
      <ul>{realList}</ul>
      <ul>{realList.gettingList}</ul>
    </div>
  );
}

/*const rows = [
  createData('Jason Cha', 1996, 6532483279.0, 400, 90.0),
  createData('Jordyn Rista', 1237, 6238193821.0, 430, 120.3),
  createData('Ian Moose', 2003, 163428865.0, 550, 143.0),
  createData('Danny Devito', 4003, 36547363.7, 460, 230.3),
  createData('He Man', 1010, 166436373.0, 395, 476.9),
];*/

/*export default function PatientTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">Insurance Number</StyledTableCell>
            <StyledTableCell align="right">Height</StyledTableCell>
            <StyledTableCell align="right">Weight</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}*/

export default function PatientTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">Insurance Number</StyledTableCell>
            <StyledTableCell align="right">Height</StyledTableCell>
            <StyledTableCell align="right">Weight</StyledTableCell>
            <StyledTableCell align="right">Blood Pressure</StyledTableCell>
            <StyledTableCell align="right">Temperature</StyledTableCell>
            <StyledTableCell align="right">Oxygen Saturation</StyledTableCell>
            <StyledTableCell align="right">UUID</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Current Medications</StyledTableCell>
            <StyledTableCell align="right">Family History</StyledTableCell>
            <StyledTableCell align="right">Current Employment</StyledTableCell>
            <StyledTableCell align="right">Current Insurance</StyledTableCell>
            <StyledTableCell align="right">ICD Health Codes</StyledTableCell>
            <StyledTableCell align="right">Allergies</StyledTableCell>
            <StyledTableCell align="right">Visits</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.lname} {row.fname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.dob}</StyledTableCell>
              <StyledTableCell align="right">{row.inum}</StyledTableCell>
              <StyledTableCell align="right">{row.hei}</StyledTableCell>
              <StyledTableCell align="right">{row.wei}</StyledTableCell>
              <StyledTableCell align="right">{row.bloodp}</StyledTableCell>
              <StyledTableCell align="right">{row.tempur}</StyledTableCell>
              <StyledTableCell align="right">{row.os}</StyledTableCell>
              <StyledTableCell align="right">{row.uuID}</StyledTableCell>
              <StyledTableCell align="right">{row.addr}</StyledTableCell>
              <StyledTableCell align="right">{row.curMeds}</StyledTableCell>
              <StyledTableCell align="right">{row.famHis}</StyledTableCell>
              <StyledTableCell align="right">{row.curEmp}</StyledTableCell>
              <StyledTableCell align="right">{row.curIns}</StyledTableCell>
              <StyledTableCell align="right">{row.icdHC}</StyledTableCell>
              <StyledTableCell align="right">{row.aller}</StyledTableCell>
              <StyledTableCell align="right">{row.vis}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <RealDataPull />
    </TableContainer>
  );
}
