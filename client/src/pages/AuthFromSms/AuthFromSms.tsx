import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AlertPopup from "../../components/AlertPopup/AlertPopup";
import { AuthFromSmsParam } from "./auth-from-sms-params.interface";

function AuthFromSms() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<AuthFromSmsParam>();
  const [isCodeCorrect, setIsCodeCorrect] = useState<boolean>();

  const onSubmit = async (params: AuthFromSmsParam) => {
    const SERVER_URL = "http://localhost:3005";
    const response = await axios.get<boolean>(
      `${SERVER_URL}/sms-confirm/${params.code}`
    );
    setIsCodeCorrect(response.data);
  };

  const validationCodeLength = {
    value: 6,
    message: "Код должен состоять из 6 цифр",
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
        <Typography variant="h4" align="center">
          Введите код из СМС
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Code"
            type="number"
            focused
            placeholder="- - - - - - "
            {...register("code", {
              required: "Code is required",
              maxLength: validationCodeLength,
              minLength: validationCodeLength,
            })}
            error={formErrors.code ? true : false}
            helperText={formErrors.code?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Продолжить
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AuthFromSms;
