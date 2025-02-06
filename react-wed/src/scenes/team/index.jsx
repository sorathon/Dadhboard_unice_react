import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import LockOpen from "@mui/icons-material/LockOpen";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Header from "../../components/Header";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PaidIcon from '@mui/icons-material/Paid';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassname: "name-column--cell",
    },
    {
      field: "room",
      headerName: "Room Number",
      
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
   
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="70%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.redAccent[500]
                : colors.greenAccent[800]
                
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettings /> }
             {access === "customer" && <PeopleOutlineIcon/>} 
            
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
             {access}
             
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Repair Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "done"
                ?  colors.greenAccent[800]
                :status =="not"? colors.redAccent[500] : colors.grey[500]
                
            }
            borderRadius="4px"
          >
            {status === "done" && <CheckIcon /> }
             {status === "not" && <ClearIcon/>} 
             {status === "working" && <EngineeringIcon/>}
            
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
             {status}
             
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "pay",
      headerName: "Payment Status",
      flex: 1,
      renderCell: ({ row: { pay } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              pay === "paid"
                ?  colors.greenAccent[800] : colors.redAccent[500]
                
                
            }
            borderRadius="4px"
          >
            {pay === "paid" && <PaidIcon /> }
             {pay === "unpaid" && <ClearIcon/>} 
             
            
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
             {pay}
             
            </Typography>
          </Box>
        );
      },
    },
   
  ];

  return (
    <Box m="20px">
      <Header title="Check Status" subtitle="Check your status" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
