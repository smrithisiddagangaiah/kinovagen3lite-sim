// Auto-generated. Do not edit!

// (in-package kortex_driver.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class BrakeType {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
    }
    else {
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type BrakeType
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type BrakeType
    let len;
    let data = new BrakeType(null);
    return data;
  }

  static getMessageSize(object) {
    return 0;
  }

  static datatype() {
    // Returns string type for a message object
    return 'kortex_driver/BrakeType';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '856901ae6854740e9adfa01cae483501';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    uint32 BRAKE_TYPE_UNSPECIFIED = 0
    
    uint32 BRAKE_TYPE_NOT_INSTALLED = 1
    
    uint32 BRAKE_TYPE_SPOKE = 2
    
    uint32 BRAKE_TYPE_CLUTCH = 3
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new BrakeType(null);
    return resolved;
    }
};

// Constants for message
BrakeType.Constants = {
  BRAKE_TYPE_UNSPECIFIED: 0,
  BRAKE_TYPE_NOT_INSTALLED: 1,
  BRAKE_TYPE_SPOKE: 2,
  BRAKE_TYPE_CLUTCH: 3,
}

module.exports = BrakeType;
