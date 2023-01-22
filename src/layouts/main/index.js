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

// Main components
import Condidatures from "layouts/main/components/Condidatures";
import Annonces from "layouts/main/components/Annonces";
import Grid from "@mui/material/Grid";

// Material Main 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfilesList from "examples/Lists/ProfilesList";
import Footer from "examples/Footer";

function Main() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Condidatures />
      <Grid container spacing={3}>
        <Annonces />
        <Grid sx={{ mt: "50px", ml: "20px" }}>
          <ProfilesList
            title="Multiposting"
            profiles={[
              {
                image: "https://bit.ly/3CAyP6T",
                name: "Test.com",
                description: "Test.com",
                action: {
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "10 annonces",
                },
              },
              {
                image: "https://bit.ly/34E9tZm",
                name: "Jobpub",
                description: "Jobpub",
                action: {
                  type: "external",
                  route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
                  color: "info",
                  label: "6 annonces",
                },
              },
              {
                image: "https://bit.ly/3I3Sn4P",
                name: "Inedeed",
                description: "Inedeed",
                action: {
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "4 annonces",
                },
              },
            ]}
          />
        </Grid>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Main;
