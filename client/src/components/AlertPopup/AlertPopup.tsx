import { Alert, AlertColor, Snackbar } from "@mui/material";

function AlertPopup(props: {
  text: string;
  severity: AlertColor;
  show: boolean;
}) {
  return (
    <Snackbar
      open={props.show}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={props.severity}>{props.text}</Alert>
    </Snackbar>
  );
}

export default AlertPopup;
