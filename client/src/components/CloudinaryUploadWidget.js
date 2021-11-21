import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "ctp-easel",
        uploadPreset: "easelImages",
        cropping: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info); //save result.info.secrure_url to db
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        <IconButton>
            <CameraAltOutlinedIcon fontSize="large" style={{ fill: "white" }} /> 
          </IconButton>
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
