import React, { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";

function React_Webcam() {
  const [devices, setDevices] = useState([]);
  const AllCameras = () => {
    const handleDevices = useCallback(
      (mediaDevices) => {
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput"));
      },
      [setDevices]
    );
    console.log(handleDevices);
    useEffect(() => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    }, [handleDevices]);
  };
  AllCameras();
  return (
    <>
      {devices.map((device, key) => (
        <div key={key}>
          <Webcam
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
          />
          {device.label || `Device ${key + 1}`}
        </div>
      ))}
      <h1>hello world</h1>
    </>
  );
}

export default React_Webcam;
