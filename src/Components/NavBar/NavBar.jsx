import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { User } from "lucide-react";
import { useAuthContext } from "@asgardeo/auth-react";

const NavBar = () => {
  const { signIn, state, getBasicUserInfo, signOut } = useAuthContext();
  //const token = sessionStorage.getItem("asgardeo-auth");
  //console.log(token);
  const userInfo = getBasicUserInfo();
  console.log(userInfo);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjdiMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1rZXktc3F1YXJlIj48cGF0aCBkPSJNMTIuNCAyLjdhMi41IDIuNSAwIDAgMSAzLjQgMGw1LjUgNS41YTIuNSAyLjUgMCAwIDEgMCAzLjRsLTMuNyAzLjdhMi41IDIuNSAwIDAgMS0zLjQgMEw4LjcgOS44YTIuNSAyLjUgMCAwIDEgMC0zLjR6Ii8+PHBhdGggZD0ibTE0IDcgMyAzIi8+PHBhdGggZD0ibTkuNCAxMC42LTYuODE0IDYuODE0QTIgMiAwIDAgMCAyIDE4LjgyOFYyMWExIDEgMCAwIDAgMSAxaDNhMSAxIDAgMCAwIDEtMXYtMWExIDEgMCAwIDEgMS0xaDFhMSAxIDAgMCAwIDEtMXYtMWExIDEgMCAwIDEgMS0xaC4xNzJhMiAyIDAgMCAwIDEuNDE0LS41ODZsLjgxNC0uODE0Ii8+PC9zdmc+"
            alt="logo"
            className="w-[3rem]"
          />
        </Typography>
        {state.isAuthenticated ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <User size={24} color="black" />
            <Typography variant="body1" sx={{ color: "black" }}>
              {state.username.slice(0, -10) || "User"}
            </Typography>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <>
            <Button
              variant="text"
              sx={{ color: "black" }}
              onClick={() => signIn()}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "black", ml: 2 }}
              onClick={() => signIn()}
            >
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
