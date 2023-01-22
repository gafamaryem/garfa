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
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from "react-redux";

// @mui material components

import Icon from "@mui/material/Icon";

// Material  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
// Material  2 React example components

function CardAnnonce() {
  const store = useStore();

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
        Candidatures
      </MDTypography>
      {store.getState().candidate.map((item) => (
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Grid sx={{ mr: "20px" }}>
            <MDButton
              variant="gradient"
              color="info"
              sx={{ background: item.color, borderRadius: "50px" }}
              iconOnly
            >
              <Icon>check_box</Icon>
            </MDButton>
          </Grid>
          <Grid sx={{ mr: "50px" }}>
            <MDTypography color="dark" fontWeight="bold" variant="h4">
              {item.value}
            </MDTypography>
            <MDTypography color="dark" fontWeight="light" sx={{ fontSize: 14, mb: "30px" }}>
              {item.label}
            </MDTypography>
          </Grid>
          <Grid>
            <MDButton variant="gradient" color="info" iconOnly>
              <Icon>arrow_forward_ios</Icon>
            </MDButton>
          </Grid>
        </Grid>
      ))}
    </MDBox>
  );
}

export default CardAnnonce;
