// Generated by gencpp from file kortex_driver/GetIPv4ConfigurationResponse.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_GETIPV4CONFIGURATIONRESPONSE_H
#define KORTEX_DRIVER_MESSAGE_GETIPV4CONFIGURATIONRESPONSE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/IPv4Configuration.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct GetIPv4ConfigurationResponse_
{
  typedef GetIPv4ConfigurationResponse_<ContainerAllocator> Type;

  GetIPv4ConfigurationResponse_()
    : output()  {
    }
  GetIPv4ConfigurationResponse_(const ContainerAllocator& _alloc)
    : output(_alloc)  {
  (void)_alloc;
    }



   typedef  ::kortex_driver::IPv4Configuration_<ContainerAllocator>  _output_type;
  _output_type output;





  typedef boost::shared_ptr< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> const> ConstPtr;

}; // struct GetIPv4ConfigurationResponse_

typedef ::kortex_driver::GetIPv4ConfigurationResponse_<std::allocator<void> > GetIPv4ConfigurationResponse;

typedef boost::shared_ptr< ::kortex_driver::GetIPv4ConfigurationResponse > GetIPv4ConfigurationResponsePtr;
typedef boost::shared_ptr< ::kortex_driver::GetIPv4ConfigurationResponse const> GetIPv4ConfigurationResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator2> & rhs)
{
  return lhs.output == rhs.output;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "9963fc67e6217a40e85f90b0fd2cca73";
  }

  static const char* value(const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x9963fc67e6217a40ULL;
  static const uint64_t static_value2 = 0xe85f90b0fd2cca73ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/GetIPv4ConfigurationResponse";
  }

  static const char* value(const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "IPv4Configuration output\n"
"\n"
"================================================================================\n"
"MSG: kortex_driver/IPv4Configuration\n"
"\n"
"uint32 ip_address\n"
"uint32 subnet_mask\n"
"uint32 default_gateway\n"
"bool dhcp_enabled\n"
;
  }

  static const char* value(const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.output);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct GetIPv4ConfigurationResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::GetIPv4ConfigurationResponse_<ContainerAllocator>& v)
  {
    s << indent << "output: ";
    s << std::endl;
    Printer< ::kortex_driver::IPv4Configuration_<ContainerAllocator> >::stream(s, indent + "  ", v.output);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_GETIPV4CONFIGURATIONRESPONSE_H
