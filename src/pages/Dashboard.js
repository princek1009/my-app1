import {
  StyledTitle, StyledSubTitle, Avatar,
  StyledFormArea,
  StyledButton, ButtonGroup
} from "../components/Styles";

//Logo
import Logo from "./../assets/R.png"

const Dashboard = () => {
  return (
    <div>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        width: "100%",
        padding: "200px",
        display: "flex",
        justifyContent: "flex-start",

      }}>
        <Avatar image={Logo} />
      </div>
        <StyledTitle size={65}>
          Welcome, User
        </StyledTitle>
        <StyledSubTitle size={27}>
          Feel free to explore our page
        </StyledSubTitle>
        <ButtonGroup>
          <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
      


    </div>
  )
};

export default Dashboard;