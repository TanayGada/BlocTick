import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "../../assets/logo1.svg";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Nav from "./Nav";
import Overview from "./Overview";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Guests from "./Guests";
import Registration from "./Registration";
import {Routes,Route} from 'react-router-dom'
import Layout3 from "../../Layout/Layout3";
const ManageEvent = () => {
  const theme = useTheme();
  

  return (
    <Layout3 name={'eventName'}>
    <Stack>
      <div>
       
        {/* mini tabs clickable */}
        
        
      </div>
      <div className="flex m-2">
        {/* popups */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={1.72}
        >
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0)", // Transparent white
                color: "black",
                width: 270,
                height: 60,
                fontWeight: "bold",
              }}
            >
              <LocalPostOfficeRoundedIcon sx={{ color: "white" }} /> Invite
              guests
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0)", // Transparent white
                color: "black",
                width: 270,
                height: 60,
                fontWeight: "bold",
              }}
            >
              <PostAddIcon sx={{ color: "white" }} /> Send a post
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0)", // Transparent white
                color: "black",
                width: 270,
                height: 60,
                fontWeight: "bold",
              }}
            >
              <SendIcon sx={{ color: "white" }} /> Share Event
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* event details card*/}
      <Overview />
    </Stack>
    </Layout3>
  );
};

export default ManageEvent;
