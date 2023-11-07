// Generated by gencpp from file kortex_driver/Base_JointSpeeds.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_BASE_JOINTSPEEDS_H
#define KORTEX_DRIVER_MESSAGE_BASE_JOINTSPEEDS_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/JointSpeed.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct Base_JointSpeeds_
{
  typedef Base_JointSpeeds_<ContainerAllocator> Type;

  Base_JointSpeeds_()
    : joint_speeds()
    , duration(0)  {
    }
  Base_JointSpeeds_(const ContainerAllocator& _alloc)
    : joint_speeds(_alloc)
    , duration(0)  {
  (void)_alloc;
    }



   typedef std::vector< ::kortex_driver::JointSpeed_<ContainerAllocator> , typename std::allocator_traits<ContainerAllocator>::template rebind_alloc< ::kortex_driver::JointSpeed_<ContainerAllocator> >> _joint_speeds_type;
  _joint_speeds_type joint_speeds;

   typedef uint32_t _duration_type;
  _duration_type duration;





  typedef boost::shared_ptr< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> const> ConstPtr;

}; // struct Base_JointSpeeds_

typedef ::kortex_driver::Base_JointSpeeds_<std::allocator<void> > Base_JointSpeeds;

typedef boost::shared_ptr< ::kortex_driver::Base_JointSpeeds > Base_JointSpeedsPtr;
typedef boost::shared_ptr< ::kortex_driver::Base_JointSpeeds const> Base_JointSpeedsConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator1> & lhs, const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator2> & rhs)
{
  return lhs.joint_speeds == rhs.joint_speeds &&
    lhs.duration == rhs.duration;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator1> & lhs, const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
{
  static const char* value()
  {
    return "f323c64d027d947f420c021696580eb4";
  }

  static const char* value(const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xf323c64d027d947fULL;
  static const uint64_t static_value2 = 0x420c021696580eb4ULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/Base_JointSpeeds";
  }

  static const char* value(const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"JointSpeed[] joint_speeds\n"
"uint32 duration\n"
"================================================================================\n"
"MSG: kortex_driver/JointSpeed\n"
"\n"
"uint32 joint_identifier\n"
"float32 value\n"
"uint32 duration\n"
;
  }

  static const char* value(const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.joint_speeds);
      stream.next(m.duration);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct Base_JointSpeeds_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::Base_JointSpeeds_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::Base_JointSpeeds_<ContainerAllocator>& v)
  {
    s << indent << "joint_speeds[]" << std::endl;
    for (size_t i = 0; i < v.joint_speeds.size(); ++i)
    {
      s << indent << "  joint_speeds[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::kortex_driver::JointSpeed_<ContainerAllocator> >::stream(s, indent + "    ", v.joint_speeds[i]);
    }
    s << indent << "duration: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.duration);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_BASE_JOINTSPEEDS_H
