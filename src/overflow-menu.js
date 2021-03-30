import React, { useState, useMemo } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classnames from "classnames";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inOverflowMenu: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

export default function OverflowMenu({ children, className, visibilityMap }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const shouldShowMenu = useMemo(
    () => Object.values(visibilityMap).some((v) => v === false),
    [visibilityMap]
  );
  if (!shouldShowMenu) {
    return null;
  }
  return (
    <div className={className}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {React.Children.map(children, (child) => {
          if (!visibilityMap[child.props["data-targetid"]]) {
            return (
              <MenuItem key={child} onClick={handleClose}>
                {React.cloneElement(child, {
                  className: classnames(child.className, classes.inOverflowMenu)
                })}
              </MenuItem>
            );
          }
          return null;
        })}
      </Menu>
    </div>
  );
}
