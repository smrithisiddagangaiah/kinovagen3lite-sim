// Auto-generated. Do not edit!

// (in-package kortex_driver.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let Empty = require('../msg/Empty.js');

//-----------------------------------------------------------

let WifiEnableState = require('../msg/WifiEnableState.js');

//-----------------------------------------------------------

class GetWifiEnableStateRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.input = null;
    }
    else {
      if (initObj.hasOwnProperty('input')) {
        this.input = initObj.input
      }
      else {
        this.input = new Empty();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetWifiEnableStateRequest
    // Serialize message field [input]
    bufferOffset = Empty.serialize(obj.input, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetWifiEnableStateRequest
    let len;
    let data = new GetWifiEnableStateRequest(null);
    // Deserialize message field [input]
    data.input = Empty.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 0;
  }

  static datatype() {
    // Returns string type for a service object
    return 'kortex_driver/GetWifiEnableStateRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fa3403cd5897c9698bc0fdcb2a453fbc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Empty input
    
    ================================================================================
    MSG: kortex_driver/Empty
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetWifiEnableStateRequest(null);
    if (msg.input !== undefined) {
      resolved.input = Empty.Resolve(msg.input)
    }
    else {
      resolved.input = new Empty()
    }

    return resolved;
    }
};

class GetWifiEnableStateResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.output = null;
    }
    else {
      if (initObj.hasOwnProperty('output')) {
        this.output = initObj.output
      }
      else {
        this.output = new WifiEnableState();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetWifiEnableStateResponse
    // Serialize message field [output]
    bufferOffset = WifiEnableState.serialize(obj.output, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetWifiEnableStateResponse
    let len;
    let data = new GetWifiEnableStateResponse(null);
    // Deserialize message field [output]
    data.output = WifiEnableState.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 1;
  }

  static datatype() {
    // Returns string type for a service object
    return 'kortex_driver/GetWifiEnableStateResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9bbefebbfb9963ee8c08183f71f2ccc5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    WifiEnableState output
    
    ================================================================================
    MSG: kortex_driver/WifiEnableState
    
    bool enabled
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetWifiEnableStateResponse(null);
    if (msg.output !== undefined) {
      resolved.output = WifiEnableState.Resolve(msg.output)
    }
    else {
      resolved.output = new WifiEnableState()
    }

    return resolved;
    }
};

module.exports = {
  Request: GetWifiEnableStateRequest,
  Response: GetWifiEnableStateResponse,
  md5sum() { return '9747040002a13b23ba7503e4b2f380fb'; },
  datatype() { return 'kortex_driver/GetWifiEnableState'; }
};
