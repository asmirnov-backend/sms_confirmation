import {
  BaseTextFieldProps,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import AlertPopup from "../../components/AlertPopup/AlertPopup";
import NumericKeypad from "../../components/NumericKeypad";

function AuthFromSms() {
  const [isCodeCorrect, setIsCodeCorrect] = useState<boolean>();
  const [code, setCode] = useState<string>("");
  const [inputColor, setInputColor] =
    useState<Pick<BaseTextFieldProps, "color">["color"]>("primary");

  const submit = async () => {
    const SERVER_URL = "http://localhost:3005";
    const response = await axios.get<boolean>(
      `${SERVER_URL}/sms-confirm/${code}`
    );
    setIsCodeCorrect(response.data);
    response.data === true ? setInputColor("success") : setInputColor("error");
  };

  return (
    <Container component="main" maxWidth="xs">
      <AlertPopup
        severity="success"
        show={Boolean(isCodeCorrect)}
        text={"Верный код"}
      />
      <AlertPopup
        severity="error"
        show={isCodeCorrect === false ? true : false}
        text={"Не верный код"}
      />

      <Box
        sx={{
          marginTop: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" align="center">
          Введите код из СМС
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          focused
          placeholder="- - - - - -"
          value={code}
          color={inputColor}
        />
        <NumericKeypad setterField={setCode} />
        <Button
          type="button"
          onClick={submit}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Продолжить
        </Button>
      </Box>
    </Container>
  );
}

export default AuthFromSms;
