// Auto-generated. Do not edit!

// (in-package kortex_driver.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let CartesianWaypoint = require('./CartesianWaypoint.js');

//-----------------------------------------------------------

class FollowCartesianTrajectoryFeedback {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.actual = null;
    }
    else {
      if (initObj.hasOwnProperty('actual')) {
        this.actual = initObj.actual
      }
      else {
        this.actual = new CartesianWaypoint();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type FollowCartesianTrajectoryFeedback
    // Serialize message field [actual]
    bufferOffset = CartesianWaypoint.serialize(obj.actual, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type FollowCartesianTrajectoryFeedback
    let len;
    let data = new FollowCartesianTrajectoryFeedback(null);
    // Deserialize message field [actual]
    data.actual = CartesianWaypoint.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 40;
  }

  static datatype() {
    // Returns string type for a message object
    return 'kortex_driver/FollowCartesianTrajectoryFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '42254cfafb6dcdba4875e87f418b2459';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    #feedback
    CartesianWaypoint actual
    
    ================================================================================
    MSG: kortex_driver/CartesianWaypoint
    
    Pose pose
    uint32 reference_frame
    float32 maximum_linear_velocity
    float32 maximum_angular_velocity
    float32 blending_radius
    ================================================================================
    MSG: kortex_driver/Pose
    
    float32 x
    float32 y
    float32 z
    float32 theta_x
    float32 theta_y
    float32 theta_z
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new FollowCartesianTrajectoryFeedback(null);
    if (msg.actual !== undefined) {
      resolved.actual = CartesianWaypoint.Resolve(msg.actual)
    }
    else {
      resolved.actual = new CartesianWaypoint()
    }

    return resolved;
    }
};

module.exports = FollowCartesianTrajectoryFeedback;