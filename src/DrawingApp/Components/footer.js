import { makeStyles, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles({
  footerContainer: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    padding: "0 2rem",
  },

  btnContainer: {
    width: "17%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  Btn: {
    border: "1px solid black",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "5px",
    backgroundColor: "#E8E8E8",

    "&:hover": {
      backgroundColor: "#D0D0D0",
    },
  },
});
export default function Footer(props) {
  const classes = useStyles();
  const {
    handleIncrease,
    handleDecrease,
    size,
    setIsCircle,
    setIsLine,
    handleColor,
    color,
    clearCanvas,
  } = props;

  let textColor = "";

  if (color === "black") {
    textColor = "Red";
  } else {
    textColor = "Black";
  }

  return (
    <div className={classes.footerContainer}>
      <div className={classes.btnContainer}>
        <Button onClick={handleIncrease} className={classes.Btn}>
          {<AddIcon />}
        </Button>
        <span>{size}</span>
        <Button onClick={handleDecrease} className={classes.Btn}>
          {<RemoveIcon />}
        </Button>
      </div>

      <div className={classes.btnContainer}>
        <Button onClick={() => setIsCircle(true)} className={classes.Btn}>
          {"CIRCLE"}
        </Button>
        <Button onClick={() => setIsLine(true)} className={classes.Btn}>
          {"LINE"}
        </Button>
      </div>

      <Button
        onClick={handleColor}
        className={classes.Btn}
        style={{ backgroundColor: `${textColor}`, color: "#fff" }}
      >
        {`Change Color to ${textColor} `}
      </Button>
      <Button onClick={clearCanvas} className={classes.Btn}>
        {" CLEAR"}
      </Button>
    </div>
  );
}
