import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const Par = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const steps = ["Not received", "Receiving", "Received"];

  return (
    <Box m="20px">
      <Box sx={{ width: "100%", height: "30vh" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box m="30px">
          <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                display="flex"
                alignItems="center"
                sx={{ width: "100%", padding: "10px" }}
              >
                <Inventory2OutlinedIcon
                  color={colors.greenAccent[500]}
                  sx={{ fontSize: 40, marginRight: 2 }}
                />
                <Typography variant="h5">BOX 3 </Typography>
                <Typography variant="h5" sx={{ marginLeft: "auto" }}>DATE 01/02/67</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails color={colors.greenAccent[500]}>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                รายละเอียด
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Recipient’s Name : นาย สมชาย ใจดี {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Recipient’s Address : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                City, Postal Code : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Country : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Phone : {" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                display="flex"
                alignItems="center"
                sx={{ width: "100%", padding: "10px" }}
              >
                <Inventory2OutlinedIcon
                  color={colors.greenAccent[500]}
                  sx={{ fontSize: 40, marginRight: 2 }}
                />
                <Typography variant="h5">BOX 2 </Typography>
                <Typography variant="h5" sx={{ marginLeft: "auto" }}>DATE 01/01/67</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails color={colors.greenAccent[500]}>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                รายละเอียด
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Recipient’s Name : นาย สมชาย ใจดี {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Recipient’s Address : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                City, Postal Code : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Country : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Phone : {" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                display="flex"
                alignItems="center"
                sx={{ width: "100%", padding: "10px" }}
              >
                <Inventory2OutlinedIcon
                  color={colors.greenAccent[500]}
                  sx={{ fontSize: 40, marginRight: 2 }}
                />
                <Typography variant="h5">BOX 1 </Typography>
                <Typography variant="h5" sx={{ marginLeft: "auto" }}>DATE 29/12/66</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails color={colors.greenAccent[500]}>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                รายละเอียด
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Recipient’s Name : นาย สมชาย ใจดี {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Recipient’s Address : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                City, Postal Code : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Country : {" "}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: colors.grey[300],
                  color: "white",
                  padding: 2,
                }}
                variant="h5"
              >
                Phone : {" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
         
        </Box>
      </Box>
    </Box>
  );
};

export default Par;
