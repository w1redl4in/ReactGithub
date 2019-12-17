import React from "react";
import "./styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LinearIndeterminate() {
  return (
    <div className="loadingbar">
      <CircularProgress />
    </div>
  );
}
