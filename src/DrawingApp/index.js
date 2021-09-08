import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Footer from "./Components/footer";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "1.5rem",
    textAlign: "center",
  },

  mainHeading: {
    fontSize: "30px",
    fontWeight: "bold",
  },

  canvasArea: {
    border: "2px solid black",
    margin: "0.5rem 0",
  },
});

export default function DrawingApp() {
  const classes = useStyles();
  const [isDrawing, setIsDrawing] = useState(false);
  const [isCircle, setIsCircle] = useState(false);
  const [isLine, setIsLine] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [size, setSize] = useState(2);
  const [color, setColor] = useState("black");
  let x1, y1;

  useEffect(() => {
    prepareCanvas();
  }, [size, color]);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;

    canvas.width = (window.innerWidth * 19) / 20;
    canvas.height = (window.innerHeight * 2) / 2.4;

    const context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = size;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    x1 = offsetX;
    y1 = offsetY;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();

    if (isCircle) {
      const { offsetX, offsetY } = nativeEvent;
      drawCircle(offsetX, offsetY);
      setIsLine(false);
    }
    if (isLine) {
      const { offsetX, offsetY } = nativeEvent;
      drawLine(x1, y1, offsetX, offsetY);
      setIsCircle(false);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const drawCircle = (x, y) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
  };

  const drawLine = (x1, y1, x, y) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x, y);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
  };

  const handleIncrease = () => {
    let currentsize = size;
    currentsize = currentsize + 2;
    if (currentsize > 50) {
      currentsize = 50;
    }
    setSize(currentsize);
    setIsCircle(false);
  };

  const handleDecrease = () => {
    let currentsize = size;
    currentsize = currentsize - 2;
    if (currentsize < 2) {
      currentsize = 2;
    }
    setSize(currentsize);
    setIsCircle(false);
  };

  const handleColor = () => {
    let currentcolor = color;
    if (currentcolor === "black") {
      currentcolor = "red";
    } else {
      currentcolor = "black";
    }
    setColor(currentcolor);
  };

  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.mainHeading}>{"Draw Here"}</h2>

      <canvas
        className={classes.canvasArea}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />

      <Footer
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        size={size}
        setIsCircle={setIsCircle}
        setIsLine={setIsLine}
        handleColor={handleColor}
        color={color}
        clearCanvas={clearCanvas}
      />
    </div>
  );
}
