import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import ArchiveIcon from "@material-ui/icons/Archive";
import StarIcon from "@material-ui/icons/Star";
import SaveIcon from "@material-ui/icons/Save";
import DownloadIcon from "@material-ui/icons/ArrowDownward";
import IntersectionObserverWrapper from "./intersection-observer-wrapper";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    display: "flex",
    flex: "0 0 auto"
  }
}));

export default function IconLabelButtons() {
  const classes = useStyles();
  return (
    <IntersectionObserverWrapper>
      <Button
        color="primary"
        data-targetid="talk"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>
      <Button
        color="primary"
        data-targetid="save"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        color="primary"
        data-targetid="upload"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <Button
        color="primary"
        data-targetid="download"
        className={classes.button}
        startIcon={<DownloadIcon />}
      >
        Download
      </Button>
      <Button
        color="primary"
        data-targetid="send"
        className={classes.button}
        startIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Button
        color="primary"
        data-targetid="star"
        className={classes.button}
        startIcon={<StarIcon />}
      >
        Star
      </Button>
      <Button
        color="primary"
        data-targetid="mark-as-read"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Mark as Read
      </Button>
      <Button
        color="primary"
        data-targetid="archive"
        className={classes.button}
        startIcon={<ArchiveIcon />}
      >
        Archive
      </Button>
      <Button
        color="primary"
        data-targetid="delete"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </IntersectionObserverWrapper>
  );
}
