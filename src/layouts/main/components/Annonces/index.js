/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import Icon from "@mui/material/Icon";

// Material  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
// Material  2 React example components

function CardAnnonce() {
  return (
    <MDBox
      color="white"
      variant="gradient"
      borderRadius="lg"
      shadow="lg"
      px={4}
      sx={{ mt: "50px", py: "50px" }}
    >
      <MDTypography color="dark" fontWeight="light" sx={{ fontSize: 18, mb: "30px" }}>
        Condidatures
      </MDTypography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid sx={{ mr: "20px" }}>
          <MDButton variant="gradient" color="light" iconOnly style={{ borderRadius: "50px" }}>
            <Icon fontSize="large" sx={{ color: "#62A5FF", fontSize: 30 }}>
              Home
            </Icon>
          </MDButton>
        </Grid>
        <Grid sx={{ mr: "50px" }}>
          <MDTypography color="dark" fontWeight="bold" variant="h4">
            23
          </MDTypography>
          <MDTypography color="dark" fontWeight="light" sx={{ fontSize: 14, mb: "30px" }}>
            En ligne
          </MDTypography>
        </Grid>
        <Grid>
          <MDButton variant="gradient" color="info" iconOnly>
            <Icon>arrow_forward_ios</Icon>
          </MDButton>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid sx={{ mr: "20px" }}>
          <MDButton variant="gradient" color="light" iconOnly style={{ borderRadius: "50px" }}>
            <Icon fontSize="large" sx={{ color: "#62A5FF", fontSize: 30 }}>
              Home
            </Icon>
          </MDButton>
        </Grid>
        <Grid sx={{ mr: "50px" }}>
          <MDTypography color="dark" fontWeight="bold" variant="h4">
            23
          </MDTypography>
          <MDTypography color="dark" fontWeight="light" sx={{ fontSize: 14, mb: "30px" }}>
            En ligne
          </MDTypography>
        </Grid>
        <Grid>
          <MDButton variant="gradient" color="info" iconOnly>
            <Icon>arrow_forward_ios</Icon>
          </MDButton>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default CardAnnonce;
