# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/SetSafetyConfigurationRequest.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class SetSafetyConfigurationRequest(genpy.Message):
  _md5sum = "52bf64f2821ac8b203cdfa2e63cd3563"
  _type = "kortex_driver/SetSafetyConfigurationRequest"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """SafetyConfiguration input

================================================================================
MSG: kortex_driver/SafetyConfiguration

SafetyHandle handle
float32 error_threshold
float32 warning_threshold
SafetyEnable enable
================================================================================
MSG: kortex_driver/SafetyHandle

uint32 identifier
================================================================================
MSG: kortex_driver/SafetyEnable

SafetyHandle handle
bool enable"""
  __slots__ = ['input']
  _slot_types = ['kortex_driver/SafetyConfiguration']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       input

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(SetSafetyConfigurationRequest, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.input is None:
        self.input = kortex_driver.msg.SafetyConfiguration()
    else:
      self.input = kortex_driver.msg.SafetyConfiguration()

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
      buff.write(_get_struct_I2fIB().pack(_x.input.handle.identifier, _x.input.error_threshold, _x.input.warning_threshold, _x.input.enable.handle.identifier, _x.input.enable.enable))
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
      if self.input is None:
        self.input = kortex_driver.msg.SafetyConfiguration()
      end = 0
      _x = self
      start = end
      end += 17
      (_x.input.handle.identifier, _x.input.error_threshold, _x.input.warning_threshold, _x.input.enable.handle.identifier, _x.input.enable.enable,) = _get_struct_I2fIB().unpack(str[start:end])
      self.input.enable.enable = bool(self.input.enable.enable)
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
      buff.write(_get_struct_I2fIB().pack(_x.input.handle.identifier, _x.input.error_threshold, _x.input.warning_threshold, _x.input.enable.handle.identifier, _x.input.enable.enable))
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
      if self.input is None:
        self.input = kortex_driver.msg.SafetyConfiguration()
      end = 0
      _x = self
      start = end
      end += 17
      (_x.input.handle.identifier, _x.input.error_threshold, _x.input.warning_threshold, _x.input.enable.handle.identifier, _x.input.enable.enable,) = _get_struct_I2fIB().unpack(str[start:end])
      self.input.enable.enable = bool(self.input.enable.enable)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_I2fIB = None
def _get_struct_I2fIB():
    global _struct_I2fIB
    if _struct_I2fIB is None:
        _struct_I2fIB = struct.Struct("<I2fIB")
    return _struct_I2fIB
# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/SetSafetyConfigurationResponse.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class SetSafetyConfigurationResponse(genpy.Message):
  _md5sum = "c6c43d221c810050f75091660f63b0cd"
  _type = "kortex_driver/SetSafetyConfigurationResponse"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """Empty output

================================================================================
MSG: kortex_driver/Empty
"""
  __slots__ = ['output']
  _slot_types = ['kortex_driver/Empty']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       output

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(SetSafetyConfigurationResponse, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.output is None:
        self.output = kortex_driver.msg.Empty()
    else:
      self.output = kortex_driver.msg.Empty()

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
      pass
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
      if self.output is None:
        self.output = kortex_driver.msg.Empty()
      end = 0
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
      pass
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
      if self.output is None:
        self.output = kortex_driver.msg.Empty()
      end = 0
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
class SetSafetyConfiguration(object):
  _type          = 'kortex_driver/SetSafetyConfiguration'
  _md5sum = 'b1a9f41cb42ab39cba6bfb32d20fea4f'
  _request_class  = SetSafetyConfigurationRequest
  _response_class = SetSafetyConfigurationResponse