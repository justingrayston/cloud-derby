/**
 * Copyright 2018, Google, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**************************************************************************
 sensorMessage object
 - carId - unique ID of the car that sent this message
 - balls - how many balls this car has collected so far
 - obstacle - is there an obstacle or not (boolean)
 - battery - percentage of the battery left (0-100)
 - laserDistance - front laser measured distance to the nearest obstacle
 - cameraImgPath - GCS path (gs://) to the image file from the front camera
 - timestampMs - timestamp in ms when this message was generated by the car
 Example of a message:
 { "carId": 1,
        "timestampMs": 1519065026429, 
        "carState": { 
          "ballsCollected": 1, 
          "batteryLeft": 80
        }, 
        "sensors": { 
          "frontLaserDistanceMm": 60, 
          "frontCameraImagePath": "https://storage.googleapis.com/my-camera-1/images/image3.jpg" 
          "frontCameraImagePathGCS": "gs://my-camera-1/images/image3.jpg" 
        } 
      }
 **************************************************************************/
module.exports = class SensorMessage {
  constructor(carId, balls, obstacle, battery, laserDistance, cameraImgPath, cameraImgPathGCS, color) {
    // Timestamp is generated at the time of creation of the message, not at the time of sending it
    this.timestampMs = new Date().getTime();
    this.carId = carId;
    this.carState = {};
    this.carState.obstacleFound = obstacle;
    this.carState.ballsCollected = balls;
    this.carState.color = color;
    this.carState.batteryLeft = battery;
    this.sensors = {};
    this.sensors.frontLaserDistanceMm = laserDistance;
    this.sensors.frontCameraImagePath = cameraImgPath;
    this.sensors.frontCameraImagePathGCS = cameraImgPathGCS;
  }
};