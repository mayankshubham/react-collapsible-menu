import React, { useRef, useEffect, useState } from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import OverflowMenu from "./overflow-menu";

const useIntersectionStyles = makeStyles(() => ({
  visible: {
    order: 0,
    opacity: 1
  },
  inVisible: {
    order: 100,
    opacity: 0
  },
  toolbarWrapper: {
    display: "flex",
    overflow: "hidden",
    padding: "0 20px"
  },
  overflowStyle: {
    order: 99,
    position: "sticky",
    right: "0",
    backgroundColor: "white"
  }
}));

export default function IntersectionObserverWrap({ children }) {
  const classes = useIntersectionStyles();
  const navRef = useRef(null);
  const [visibleItemIds, setVisibleItemIds] = useState({});
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedEntries = {};
        entries.forEach((entry) => {
          const observerid = entry.target.dataset.observerid;
          if (entry.isIntersecting) {
            updatedEntries[observerid] = true;
          } else {
            updatedEntries[observerid] = false;
          }
        });
        setVisibleItemIds((prev) => ({
          ...prev,
          ...updatedEntries
        }));
      },
      {
        root: navRef.current,
        threshold: 1
      }
    );

    Array.from(navRef.current.children).forEach((item) => {
      if (item.dataset.observerid) {
        observer.observe(item);
      }
    });
  }, []);
  return (
    <div className={classes.toolbarWrapper} ref={navRef}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: classnames(child.props.className, {
            [classes.visible]: !!visibleItemIds[child.props["data-observerid"]],
            [classes.inVisible]: !visibleItemIds[child.props["data-observerid"]]
          })
        });
      })}
      <OverflowMenu
        visibleItemIds={visibleItemIds}
        className={classes.overflowStyle}
      >
        {children}
      </OverflowMenu>
    </div>
  );
}
