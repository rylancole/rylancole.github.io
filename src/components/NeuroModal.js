import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import { ND } from "../descriptions";

const NeuroModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Neurodiversity</DialogTitle>
      <DialogContent>
        <DialogContentText>{ND}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default NeuroModal;
