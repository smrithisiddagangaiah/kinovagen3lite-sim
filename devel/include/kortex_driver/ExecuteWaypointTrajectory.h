// Generated by gencpp from file kortex_driver/ExecuteWaypointTrajectory.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_EXECUTEWAYPOINTTRAJECTORY_H
#define KORTEX_DRIVER_MESSAGE_EXECUTEWAYPOINTTRAJECTORY_H

#include <ros/service_traits.h>


#include <kortex_driver/ExecuteWaypointTrajectoryRequest.h>
#include <kortex_driver/ExecuteWaypointTrajectoryResponse.h>


namespace kortex_driver
{

struct ExecuteWaypointTrajectory
{

typedef ExecuteWaypointTrajectoryRequest Request;
typedef ExecuteWaypointTrajectoryResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct ExecuteWaypointTrajectory
} // namespace kortex_driver


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::kortex_driver::ExecuteWaypointTrajectory > {
  static const char* value()
  {
    return "6b19855f6dc5db92347832c0f2e37c96";
  }

  static const char* value(const ::kortex_driver::ExecuteWaypointTrajectory&) { return value(); }
};

template<>
struct DataType< ::kortex_driver::ExecuteWaypointTrajectory > {
  static const char* value()
  {
    return "kortex_driver/ExecuteWaypointTrajectory";
  }

  static const char* value(const ::kortex_driver::ExecuteWaypointTrajectory&) { return value(); }
};


// service_traits::MD5Sum< ::kortex_driver::ExecuteWaypointTrajectoryRequest> should match
// service_traits::MD5Sum< ::kortex_driver::ExecuteWaypointTrajectory >
template<>
struct MD5Sum< ::kortex_driver::ExecuteWaypointTrajectoryRequest>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::ExecuteWaypointTrajectory >::value();
  }
  static const char* value(const ::kortex_driver::ExecuteWaypointTrajectoryRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::ExecuteWaypointTrajectoryRequest> should match
// service_traits::DataType< ::kortex_driver::ExecuteWaypointTrajectory >
template<>
struct DataType< ::kortex_driver::ExecuteWaypointTrajectoryRequest>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::ExecuteWaypointTrajectory >::value();
  }
  static const char* value(const ::kortex_driver::ExecuteWaypointTrajectoryRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::kortex_driver::ExecuteWaypointTrajectoryResponse> should match
// service_traits::MD5Sum< ::kortex_driver::ExecuteWaypointTrajectory >
template<>
struct MD5Sum< ::kortex_driver::ExecuteWaypointTrajectoryResponse>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::ExecuteWaypointTrajectory >::value();
  }
  static const char* value(const ::kortex_driver::ExecuteWaypointTrajectoryResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::ExecuteWaypointTrajectoryResponse> should match
// service_traits::DataType< ::kortex_driver::ExecuteWaypointTrajectory >
template<>
struct DataType< ::kortex_driver::ExecuteWaypointTrajectoryResponse>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::ExecuteWaypointTrajectory >::value();
  }
  static const char* value(const ::kortex_driver::ExecuteWaypointTrajectoryResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_EXECUTEWAYPOINTTRAJECTORY_H
