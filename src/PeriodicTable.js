import React, { useState } from "react";
import data from "./data/PeriodicTableJSON.json";
import "./PeriodicTable.css";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};
const PeriodicTable = () => {
  const [show, setShow] = useState(false);
  const [summaryData, setSummaryData] = useState("");
  const handleShow = (summary) => {
    setShow(!show);
    setSummaryData(summary);
  };

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <div className="periodic-table">      
      {data.elements.map(
        ({ number, xpos, ypos, name, symbol, category, summary }) => {
          return (
            <div
              className="element"
              style={{
                gridColumn: xpos,
                gridRow: ypos,
                borderColor: colorMap[category],
              }}
              key={name}
              onClick={() => handleShow(summary)}
              //   onKeyDown={() => setShow(!show)}
            >
              <strong>{symbol}</strong>
              <small className="number">{number}</small>
              <small className="name">{name}</small>
            </div>
          );
        }
      )}
      <div>
        <Modal isOpen={show}>
          <ModalBody>{summaryData}</ModalBody>
          <ModalFooter>
            <button
              style={{
                borderRadius: "4px",
                backgroundColor: "#EC674E",
                color: "whitesmoke",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={() => {
                handleClose();
              }}
            >
              close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
export default PeriodicTable;
