import {
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  DialogActions,
  Button,
  Tooltip,
} from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import LaunchIcon from "@material-ui/icons/Launch";
import { emailAddress } from "../descriptions";

const NeuroModal = ({ open, onClose }) => {
  const emailHref = `mailto:${emailAddress}`;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>{emailAddress}</DialogContentText>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText(emailAddress);
            }}
            title="Copy"
          >
            <FileCopyIcon />
          </IconButton>
          <Tooltip label={emailHref}>
            <IconButton href={emailHref} title={emailHref}>
              <LaunchIcon />
            </IconButton>
          </Tooltip>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NeuroModal;
