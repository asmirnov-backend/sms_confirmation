import BackspaceIcon from "@mui/icons-material/Backspace";
import { Button, Grid } from "@mui/material";
import NumberButton from "../NumberButton";

function NumericKeypad(props: {
  setterField: React.Dispatch<React.SetStateAction<string>>;
}) {
  const removeLastDigit = () => {
    props.setterField((prev: string) => prev.slice(0, -1));
  };

  return (
    <Grid container spacing={1} marginTop={3}>
      <Grid container item spacing={1}>
        <Grid item xs={4}>
          <NumberButton number={"1"} setterField={props.setterField} />
        </Grid>
        <Grid item xs={4}>
          <NumberButton number={"2"} setterField={props.setterField} />
        </Grid>
        <Grid item xs={4}>
          <NumberButton number={"3"} setterField={props.setterField} />
        </Grid>
      </Grid>
      <Grid container item spacing={1}>
        <Grid item xs={4}>
          <NumberButton number={"4"} setterField={props.setterField} />
        </Grid>
        <Grid item xs={4}>
          <NumberButton number={"5"} setterField={props.setterField} />
        </Grid>
        <Grid item xs={4}>
          <NumberButton number={"6"} setterField={props.setterField} />
        </Grid>
      </Grid>
      <Grid container item spacing={1}>
        <Grid item xs={4}>
          <NumberButton number={"7"} setterField={props.setterField} />
        </Grid>
        <Grid item xs={4}>
          <NumberButton number={"8"} setterField={props.setterField} />
        </Grid>
        <Grid item xs={4}>
          <NumberButton number={"9"} setterField={props.setterField} />
        </Grid>
      </Grid>
      <Grid container item spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <NumberButton number={"0"} setterField={props.setterField} />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            onClick={removeLastDigit}
            size="large"
            fullWidth
          >
            <BackspaceIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NumericKeypad;
