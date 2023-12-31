// Generated by gencpp from file kortex_driver/NetworkEvent.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_NETWORKEVENT_H
#define KORTEX_DRIVER_MESSAGE_NETWORKEVENT_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace kortex_driver
{
template <class ContainerAllocator>
struct NetworkEvent_
{
  typedef NetworkEvent_<ContainerAllocator> Type;

  NetworkEvent_()
    {
    }
  NetworkEvent_(const ContainerAllocator& _alloc)
    {
  (void)_alloc;
    }





// reducing the odds to have name collisions with Windows.h 
#if defined(_WIN32) && defined(UNSPECIFIED_NETWORK_EVENT)
  #undef UNSPECIFIED_NETWORK_EVENT
#endif
#if defined(_WIN32) && defined(WIFI_CONNECTED)
  #undef WIFI_CONNECTED
#endif
#if defined(_WIN32) && defined(WIFI_DISCONNECTED)
  #undef WIFI_DISCONNECTED
#endif
#if defined(_WIN32) && defined(WIFI_SCAN_STARTED)
  #undef WIFI_SCAN_STARTED
#endif
#if defined(_WIN32) && defined(WIFI_SCAN_RESULTS)
  #undef WIFI_SCAN_RESULTS
#endif
#if defined(_WIN32) && defined(WIFI_SCAN_FAILED)
  #undef WIFI_SCAN_FAILED
#endif
#if defined(_WIN32) && defined(WIFI_NOT_FOUND)
  #undef WIFI_NOT_FOUND
#endif
#if defined(_WIN32) && defined(WIFI_ASSOC_REJECTED)
  #undef WIFI_ASSOC_REJECTED
#endif
#if defined(_WIN32) && defined(WIFI_AUTH_WRONG_KEY)
  #undef WIFI_AUTH_WRONG_KEY
#endif
#if defined(_WIN32) && defined(WIFI_AUTH_CONN_FAILED)
  #undef WIFI_AUTH_CONN_FAILED
#endif
#if defined(_WIN32) && defined(WIFI_AUTH_FAILED)
  #undef WIFI_AUTH_FAILED
#endif
#if defined(_WIN32) && defined(WIFI_ENABLED)
  #undef WIFI_ENABLED
#endif
#if defined(_WIN32) && defined(WIFI_DISABLED)
  #undef WIFI_DISABLED
#endif
#if defined(_WIN32) && defined(BLUETOOTH_ENABLED)
  #undef BLUETOOTH_ENABLED
#endif
#if defined(_WIN32) && defined(BLUETOOTH_DISABLED)
  #undef BLUETOOTH_DISABLED
#endif

  enum {
    UNSPECIFIED_NETWORK_EVENT = 0u,
    WIFI_CONNECTED = 1u,
    WIFI_DISCONNECTED = 2u,
    WIFI_SCAN_STARTED = 3u,
    WIFI_SCAN_RESULTS = 4u,
    WIFI_SCAN_FAILED = 5u,
    WIFI_NOT_FOUND = 6u,
    WIFI_ASSOC_REJECTED = 7u,
    WIFI_AUTH_WRONG_KEY = 8u,
    WIFI_AUTH_CONN_FAILED = 9u,
    WIFI_AUTH_FAILED = 10u,
    WIFI_ENABLED = 11u,
    WIFI_DISABLED = 12u,
    BLUETOOTH_ENABLED = 13u,
    BLUETOOTH_DISABLED = 14u,
  };


  typedef boost::shared_ptr< ::kortex_driver::NetworkEvent_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::NetworkEvent_<ContainerAllocator> const> ConstPtr;

}; // struct NetworkEvent_

typedef ::kortex_driver::NetworkEvent_<std::allocator<void> > NetworkEvent;

typedef boost::shared_ptr< ::kortex_driver::NetworkEvent > NetworkEventPtr;
typedef boost::shared_ptr< ::kortex_driver::NetworkEvent const> NetworkEventConstPtr;

// constants requiring out of line definition

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::NetworkEvent_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::NetworkEvent_<ContainerAllocator> >::stream(s, "", v);
return s;
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::NetworkEvent_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::NetworkEvent_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::NetworkEvent_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
{
  static const char* value()
  {
    return "342adcc6d6071ab5d5d0b6d3b3ff3e84";
  }

  static const char* value(const ::kortex_driver::NetworkEvent_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x342adcc6d6071ab5ULL;
  static const uint64_t static_value2 = 0xd5d0b6d3b3ff3e84ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/NetworkEvent";
  }

  static const char* value(const ::kortex_driver::NetworkEvent_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"uint32 UNSPECIFIED_NETWORK_EVENT = 0\n"
"\n"
"uint32 WIFI_CONNECTED = 1\n"
"\n"
"uint32 WIFI_DISCONNECTED = 2\n"
"\n"
"uint32 WIFI_SCAN_STARTED = 3\n"
"\n"
"uint32 WIFI_SCAN_RESULTS = 4\n"
"\n"
"uint32 WIFI_SCAN_FAILED = 5\n"
"\n"
"uint32 WIFI_NOT_FOUND = 6\n"
"\n"
"uint32 WIFI_ASSOC_REJECTED = 7\n"
"\n"
"uint32 WIFI_AUTH_WRONG_KEY = 8\n"
"\n"
"uint32 WIFI_AUTH_CONN_FAILED = 9\n"
"\n"
"uint32 WIFI_AUTH_FAILED = 10\n"
"\n"
"uint32 WIFI_ENABLED = 11\n"
"\n"
"uint32 WIFI_DISABLED = 12\n"
"\n"
"uint32 BLUETOOTH_ENABLED = 13\n"
"\n"
"uint32 BLUETOOTH_DISABLED = 14\n"
;
  }

  static const char* value(const ::kortex_driver::NetworkEvent_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream&, T)
    {}

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct NetworkEvent_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::NetworkEvent_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream&, const std::string&, const ::kortex_driver::NetworkEvent_<ContainerAllocator>&)
  {}
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_NETWORKEVENT_H
