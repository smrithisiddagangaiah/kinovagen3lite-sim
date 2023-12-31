# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/RFConfiguration.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class RFConfiguration(genpy.Message):
  _md5sum = "b8bfe540c76a207913f7638bb2dbbae6"
  _type = "kortex_driver/RFConfiguration"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """
WifiEnableState wifi_enable_state
BluetoothEnableState bluetooth_enable_state
================================================================================
MSG: kortex_driver/WifiEnableState

bool enabled
================================================================================
MSG: kortex_driver/BluetoothEnableState

bool enabled"""
  __slots__ = ['wifi_enable_state','bluetooth_enable_state']
  _slot_types = ['kortex_driver/WifiEnableState','kortex_driver/BluetoothEnableState']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       wifi_enable_state,bluetooth_enable_state

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(RFConfiguration, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.wifi_enable_state is None:
        self.wifi_enable_state = kortex_driver.msg.WifiEnableState()
      if self.bluetooth_enable_state is None:
        self.bluetooth_enable_state = kortex_driver.msg.BluetoothEnableState()
    else:
      self.wifi_enable_state = kortex_driver.msg.WifiEnableState()
      self.bluetooth_enable_state = kortex_driver.msg.BluetoothEnableState()

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_get_struct_2B().pack(_x.wifi_enable_state.enabled, _x.bluetooth_enable_state.enabled))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.wifi_enable_state is None:
        self.wifi_enable_state = kortex_driver.msg.WifiEnableState()
      if self.bluetooth_enable_state is None:
        self.bluetooth_enable_state = kortex_driver.msg.BluetoothEnableState()
      end = 0
      _x = self
      start = end
      end += 2
      (_x.wifi_enable_state.enabled, _x.bluetooth_enable_state.enabled,) = _get_struct_2B().unpack(str[start:end])
      self.wifi_enable_state.enabled = bool(self.wifi_enable_state.enabled)
      self.bluetooth_enable_state.enabled = bool(self.bluetooth_enable_state.enabled)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_get_struct_2B().pack(_x.wifi_enable_state.enabled, _x.bluetooth_enable_state.enabled))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.wifi_enable_state is None:
        self.wifi_enable_state = kortex_driver.msg.WifiEnableState()
      if self.bluetooth_enable_state is None:
        self.bluetooth_enable_state = kortex_driver.msg.BluetoothEnableState()
      end = 0
      _x = self
      start = end
      end += 2
      (_x.wifi_enable_state.enabled, _x.bluetooth_enable_state.enabled,) = _get_struct_2B().unpack(str[start:end])
      self.wifi_enable_state.enabled = bool(self.wifi_enable_state.enabled)
      self.bluetooth_enable_state.enabled = bool(self.bluetooth_enable_state.enabled)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_2B = None
def _get_struct_2B():
    global _struct_2B
    if _struct_2B is None:
        _struct_2B = struct.Struct("<2B")
    return _struct_2B
