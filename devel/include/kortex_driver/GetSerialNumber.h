// Generated by gencpp from file kortex_driver/GetSerialNumber.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_GETSERIALNUMBER_H
#define KORTEX_DRIVER_MESSAGE_GETSERIALNUMBER_H

#include <ros/service_traits.h>


#include <kortex_driver/GetSerialNumberRequest.h>
#include <kortex_driver/GetSerialNumberResponse.h>


namespace kortex_driver
{

struct GetSerialNumber
{

typedef GetSerialNumberRequest Request;
typedef GetSerialNumberResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct GetSerialNumber
} // namespace kortex_driver


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::kortex_driver::GetSerialNumber > {
  static const char* value()
  {
    return "0249587230c33b79820737b46150559e";
  }

  static const char* value(const ::kortex_driver::GetSerialNumber&) { return value(); }
};

template<>
struct DataType< ::kortex_driver::GetSerialNumber > {
  static const char* value()
  {
    return "kortex_driver/GetSerialNumber";
  }

  static const char* value(const ::kortex_driver::GetSerialNumber&) { return value(); }
};


// service_traits::MD5Sum< ::kortex_driver::GetSerialNumberRequest> should match
// service_traits::MD5Sum< ::kortex_driver::GetSerialNumber >
template<>
struct MD5Sum< ::kortex_driver::GetSerialNumberRequest>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::GetSerialNumber >::value();
  }
  static const char* value(const ::kortex_driver::GetSerialNumberRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::GetSerialNumberRequest> should match
// service_traits::DataType< ::kortex_driver::GetSerialNumber >
template<>
struct DataType< ::kortex_driver::GetSerialNumberRequest>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::GetSerialNumber >::value();
  }
  static const char* value(const ::kortex_driver::GetSerialNumberRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::kortex_driver::GetSerialNumberResponse> should match
// service_traits::MD5Sum< ::kortex_driver::GetSerialNumber >
template<>
struct MD5Sum< ::kortex_driver::GetSerialNumberResponse>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::GetSerialNumber >::value();
  }
  static const char* value(const ::kortex_driver::GetSerialNumberResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::GetSerialNumberResponse> should match
// service_traits::DataType< ::kortex_driver::GetSerialNumber >
template<>
struct DataType< ::kortex_driver::GetSerialNumberResponse>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::GetSerialNumber >::value();
  }
  static const char* value(const ::kortex_driver::GetSerialNumberResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_GETSERIALNUMBER_H