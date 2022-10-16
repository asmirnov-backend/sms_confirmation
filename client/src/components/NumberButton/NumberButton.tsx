import { Button } from "@mui/material";
import { isUndefined, toString } from "lodash";

function NumberButton(props: {
  number: string;
  setterField: React.Dispatch<React.SetStateAction<string>>;
}) {
  const addNumberToTheEnd = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.setterField((prev: string) =>
      isUndefined(prev) ? props.number : prev + toString(props.number)
    );
  };

  return (
    <Button
      variant="outlined"
      onClick={addNumberToTheEnd}
      size="large"
      fullWidth
    >
      {props.number}
    </Button>
  );
}

export default NumberButton;
