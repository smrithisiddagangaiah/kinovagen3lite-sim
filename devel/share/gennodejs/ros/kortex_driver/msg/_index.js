
"use strict";

let KortexError = require('./KortexError.js');
let ApiOptions = require('./ApiOptions.js');
let ErrorCodes = require('./ErrorCodes.js');
let SubErrorCodes = require('./SubErrorCodes.js');
let ActuatorConfig_ControlMode = require('./ActuatorConfig_ControlMode.js');
let TorqueOffset = require('./TorqueOffset.js');
let ActuatorConfig_ServiceVersion = require('./ActuatorConfig_ServiceVersion.js');
let LoopSelection = require('./LoopSelection.js');
let CommandModeInformation = require('./CommandModeInformation.js');
let ControlLoopSelection = require('./ControlLoopSelection.js');
let CoggingFeedforwardMode = require('./CoggingFeedforwardMode.js');
let Servoing = require('./Servoing.js');
let CommandMode = require('./CommandMode.js');
let PositionCommand = require('./PositionCommand.js');
let ActuatorConfig_SafetyLimitType = require('./ActuatorConfig_SafetyLimitType.js');
let AxisPosition = require('./AxisPosition.js');
let CoggingFeedforwardModeInformation = require('./CoggingFeedforwardModeInformation.js');
let FrequencyResponse = require('./FrequencyResponse.js');
let ControlLoopParameters = require('./ControlLoopParameters.js');
let ControlLoop = require('./ControlLoop.js');
let ActuatorConfig_ControlModeInformation = require('./ActuatorConfig_ControlModeInformation.js');
let EncoderDerivativeParameters = require('./EncoderDerivativeParameters.js');
let VectorDriveParameters = require('./VectorDriveParameters.js');
let CustomDataIndex = require('./CustomDataIndex.js');
let AxisOffsets = require('./AxisOffsets.js');
let TorqueCalibration = require('./TorqueCalibration.js');
let CustomDataSelection = require('./CustomDataSelection.js');
let StepResponse = require('./StepResponse.js');
let RampResponse = require('./RampResponse.js');
let SafetyIdentifierBankA = require('./SafetyIdentifierBankA.js');
let ActuatorCyclic_MessageId = require('./ActuatorCyclic_MessageId.js');
let ActuatorCyclic_ServiceVersion = require('./ActuatorCyclic_ServiceVersion.js');
let ActuatorCyclic_CustomData = require('./ActuatorCyclic_CustomData.js');
let StatusFlags = require('./StatusFlags.js');
let ActuatorCyclic_Command = require('./ActuatorCyclic_Command.js');
let ActuatorCyclic_Feedback = require('./ActuatorCyclic_Feedback.js');
let CommandFlags = require('./CommandFlags.js');
let CartesianTrajectoryConstraint_type = require('./CartesianTrajectoryConstraint_type.js');
let GripperCommand = require('./GripperCommand.js');
let UserProfile = require('./UserProfile.js');
let IPv4Configuration = require('./IPv4Configuration.js');
let GripperRequest = require('./GripperRequest.js');
let WifiEncryptionType = require('./WifiEncryptionType.js');
let Faults = require('./Faults.js');
let ControllerEventType = require('./ControllerEventType.js');
let ServoingModeNotification = require('./ServoingModeNotification.js');
let GripperMode = require('./GripperMode.js');
let BridgeStatus = require('./BridgeStatus.js');
let MapEvent = require('./MapEvent.js');
let GpioBehavior = require('./GpioBehavior.js');
let Waypoint_type_of_waypoint = require('./Waypoint_type_of_waypoint.js');
let ControllerType = require('./ControllerType.js');
let FactoryEvent = require('./FactoryEvent.js');
let OperatingModeNotificationList = require('./OperatingModeNotificationList.js');
let ConfigurationChangeNotificationList = require('./ConfigurationChangeNotificationList.js');
let WifiSecurityType = require('./WifiSecurityType.js');
let FullUserProfile = require('./FullUserProfile.js');
let UserList = require('./UserList.js');
let MapGroup = require('./MapGroup.js');
let ControllerNotificationList = require('./ControllerNotificationList.js');
let Map = require('./Map.js');
let ControllerElementState = require('./ControllerElementState.js');
let Base_CapSenseConfig = require('./Base_CapSenseConfig.js');
let RobotEvent = require('./RobotEvent.js');
let LimitationType = require('./LimitationType.js');
let CartesianLimitationList = require('./CartesianLimitationList.js');
let ConstrainedPosition = require('./ConstrainedPosition.js');
let UserProfileList = require('./UserProfileList.js');
let ServoingMode = require('./ServoingMode.js');
let ProtectionZoneNotificationList = require('./ProtectionZoneNotificationList.js');
let FirmwareComponentVersion = require('./FirmwareComponentVersion.js');
let MapElement = require('./MapElement.js');
let Base_Stop = require('./Base_Stop.js');
let PreComputedJointTrajectory = require('./PreComputedJointTrajectory.js');
let Finger = require('./Finger.js');
let BridgeConfig = require('./BridgeConfig.js');
let NetworkType = require('./NetworkType.js');
let Base_CapSenseMode = require('./Base_CapSenseMode.js');
let JointTorques = require('./JointTorques.js');
let ActionExecutionState = require('./ActionExecutionState.js');
let GpioEvent = require('./GpioEvent.js');
let ControllerNotification_state = require('./ControllerNotification_state.js');
let EmergencyStop = require('./EmergencyStop.js');
let AngularWaypoint = require('./AngularWaypoint.js');
let SafetyEvent = require('./SafetyEvent.js');
let ConstrainedJointAngles = require('./ConstrainedJointAngles.js');
let RequestedActionType = require('./RequestedActionType.js');
let MappingInfoNotification = require('./MappingInfoNotification.js');
let NetworkNotificationList = require('./NetworkNotificationList.js');
let Timeout = require('./Timeout.js');
let ControllerConfiguration = require('./ControllerConfiguration.js');
let GpioConfigurationList = require('./GpioConfigurationList.js');
let WifiConfigurationList = require('./WifiConfigurationList.js');
let CartesianLimitation = require('./CartesianLimitation.js');
let RobotEventNotificationList = require('./RobotEventNotificationList.js');
let ControllerHandle = require('./ControllerHandle.js');
let TrajectoryInfoType = require('./TrajectoryInfoType.js');
let SignalQuality = require('./SignalQuality.js');
let BluetoothEnableState = require('./BluetoothEnableState.js');
let OperatingModeInformation = require('./OperatingModeInformation.js');
let CartesianTrajectoryConstraint = require('./CartesianTrajectoryConstraint.js');
let JointAngle = require('./JointAngle.js');
let EventIdSequenceInfoNotification = require('./EventIdSequenceInfoNotification.js');
let AppendActionInformation = require('./AppendActionInformation.js');
let BackupEvent = require('./BackupEvent.js');
let SequenceTasksConfiguration = require('./SequenceTasksConfiguration.js');
let OperatingMode = require('./OperatingMode.js');
let ConstrainedOrientation = require('./ConstrainedOrientation.js');
let ArmStateInformation = require('./ArmStateInformation.js');
let Action_action_parameters = require('./Action_action_parameters.js');
let ActionNotificationList = require('./ActionNotificationList.js');
let TrajectoryErrorReport = require('./TrajectoryErrorReport.js');
let GpioAction = require('./GpioAction.js');
let ControllerConfigurationList = require('./ControllerConfigurationList.js');
let TrajectoryErrorElement = require('./TrajectoryErrorElement.js');
let Admittance = require('./Admittance.js');
let Orientation = require('./Orientation.js');
let SequenceTasksPair = require('./SequenceTasksPair.js');
let TrajectoryErrorType = require('./TrajectoryErrorType.js');
let Mapping = require('./Mapping.js');
let SnapshotType = require('./SnapshotType.js');
let WifiConfiguration = require('./WifiConfiguration.js');
let PreComputedJointTrajectoryElement = require('./PreComputedJointTrajectoryElement.js');
let TrajectoryInfo = require('./TrajectoryInfo.js');
let WifiInformation = require('./WifiInformation.js');
let LedState = require('./LedState.js');
let SafetyNotificationList = require('./SafetyNotificationList.js');
let Base_SafetyIdentifier = require('./Base_SafetyIdentifier.js');
let Snapshot = require('./Snapshot.js');
let JointAngles = require('./JointAngles.js');
let SwitchControlMapping = require('./SwitchControlMapping.js');
let BridgeResult = require('./BridgeResult.js');
let ActionEvent = require('./ActionEvent.js');
let ProtectionZoneHandle = require('./ProtectionZoneHandle.js');
let CartesianWaypoint = require('./CartesianWaypoint.js');
let TwistLimitation = require('./TwistLimitation.js');
let Gen3GpioPinId = require('./Gen3GpioPinId.js');
let ControllerEvent = require('./ControllerEvent.js');
let JointTrajectoryConstraint = require('./JointTrajectoryConstraint.js');
let CartesianSpeed = require('./CartesianSpeed.js');
let SequenceInfoNotification = require('./SequenceInfoNotification.js');
let MappingInfoNotificationList = require('./MappingInfoNotificationList.js');
let MappingList = require('./MappingList.js');
let ActuatorInformation = require('./ActuatorInformation.js');
let Base_RotationMatrix = require('./Base_RotationMatrix.js');
let UserNotification = require('./UserNotification.js');
let SequenceHandle = require('./SequenceHandle.js');
let IKData = require('./IKData.js');
let ProtectionZone = require('./ProtectionZone.js');
let Base_GpioConfiguration = require('./Base_GpioConfiguration.js');
let UserNotificationList = require('./UserNotificationList.js');
let MapEvent_events = require('./MapEvent_events.js');
let ServoingModeInformation = require('./ServoingModeInformation.js');
let JointNavigationDirection = require('./JointNavigationDirection.js');
let Pose = require('./Pose.js');
let SequenceTasksRange = require('./SequenceTasksRange.js');
let ActionType = require('./ActionType.js');
let WifiInformationList = require('./WifiInformationList.js');
let SequenceInfoNotificationList = require('./SequenceInfoNotificationList.js');
let WifiEnableState = require('./WifiEnableState.js');
let SequenceTasks = require('./SequenceTasks.js');
let Point = require('./Point.js');
let JointSpeed = require('./JointSpeed.js');
let WaypointValidationReport = require('./WaypointValidationReport.js');
let ConfigurationChangeNotification_configuration_change = require('./ConfigurationChangeNotification_configuration_change.js');
let ControllerBehavior = require('./ControllerBehavior.js');
let Base_Position = require('./Base_Position.js');
let Base_RotationMatrixRow = require('./Base_RotationMatrixRow.js');
let ControlModeNotificationList = require('./ControlModeNotificationList.js');
let MappingHandle = require('./MappingHandle.js');
let Base_ControlModeInformation = require('./Base_ControlModeInformation.js');
let SystemTime = require('./SystemTime.js');
let TrajectoryContinuityMode = require('./TrajectoryContinuityMode.js');
let ControllerConfigurationMode = require('./ControllerConfigurationMode.js');
let SoundType = require('./SoundType.js');
let ControllerNotification = require('./ControllerNotification.js');
let ChangeTwist = require('./ChangeTwist.js');
let Gripper = require('./Gripper.js');
let AdvancedSequenceHandle = require('./AdvancedSequenceHandle.js');
let ProtectionZoneEvent = require('./ProtectionZoneEvent.js');
let SequenceTaskHandle = require('./SequenceTaskHandle.js');
let Ssid = require('./Ssid.js');
let MapGroupHandle = require('./MapGroupHandle.js');
let RFConfiguration = require('./RFConfiguration.js');
let ControllerElementHandle_identifier = require('./ControllerElementHandle_identifier.js');
let ControllerInputType = require('./ControllerInputType.js');
let GpioPinPropertyFlags = require('./GpioPinPropertyFlags.js');
let ControllerList = require('./ControllerList.js');
let Base_ControlMode = require('./Base_ControlMode.js');
let SequenceList = require('./SequenceList.js');
let IPv4Information = require('./IPv4Information.js');
let TransformationMatrix = require('./TransformationMatrix.js');
let ActivateMapHandle = require('./ActivateMapHandle.js');
let NavigationDirection = require('./NavigationDirection.js');
let SequenceTaskConfiguration = require('./SequenceTaskConfiguration.js');
let ControllerElementEventType = require('./ControllerElementEventType.js');
let Query = require('./Query.js');
let TwistCommand = require('./TwistCommand.js');
let NetworkNotification = require('./NetworkNotification.js');
let Xbox360DigitalInputIdentifier = require('./Xbox360DigitalInputIdentifier.js');
let Waypoint = require('./Waypoint.js');
let SequenceInformation = require('./SequenceInformation.js');
let PasswordChange = require('./PasswordChange.js');
let JointLimitation = require('./JointLimitation.js');
let JointTorque = require('./JointTorque.js');
let WrenchCommand = require('./WrenchCommand.js');
let ServoingModeNotificationList = require('./ServoingModeNotificationList.js');
let ArmStateNotification = require('./ArmStateNotification.js');
let ProtectionZoneInformation = require('./ProtectionZoneInformation.js');
let TransformationRow = require('./TransformationRow.js');
let ChangeWrench = require('./ChangeWrench.js');
let NetworkHandle = require('./NetworkHandle.js');
let TrajectoryErrorIdentifier = require('./TrajectoryErrorIdentifier.js');
let Action = require('./Action.js');
let AdmittanceMode = require('./AdmittanceMode.js');
let KinematicTrajectoryConstraints = require('./KinematicTrajectoryConstraints.js');
let GpioPinConfiguration = require('./GpioPinConfiguration.js');
let MapGroupList = require('./MapGroupList.js');
let ConstrainedJointAngle = require('./ConstrainedJointAngle.js');
let OperatingModeNotification = require('./OperatingModeNotification.js');
let BridgeList = require('./BridgeList.js');
let ConstrainedPose = require('./ConstrainedPose.js');
let WristDigitalInputIdentifier = require('./WristDigitalInputIdentifier.js');
let SequenceTask = require('./SequenceTask.js');
let ConfigurationChangeNotification = require('./ConfigurationChangeNotification.js');
let ActionNotification = require('./ActionNotification.js');
let Xbox360AnalogInputIdentifier = require('./Xbox360AnalogInputIdentifier.js');
let ProtectionZoneList = require('./ProtectionZoneList.js');
let ChangeJointSpeeds = require('./ChangeJointSpeeds.js');
let ControllerState = require('./ControllerState.js');
let Base_ServiceVersion = require('./Base_ServiceVersion.js');
let FactoryNotification = require('./FactoryNotification.js');
let ControllerElementHandle = require('./ControllerElementHandle.js');
let MapHandle = require('./MapHandle.js');
let Wrench = require('./Wrench.js');
let BridgePortConfig = require('./BridgePortConfig.js');
let WaypointList = require('./WaypointList.js');
let WrenchMode = require('./WrenchMode.js');
let Sequence = require('./Sequence.js');
let Delay = require('./Delay.js');
let UserEvent = require('./UserEvent.js');
let JointsLimitationsList = require('./JointsLimitationsList.js');
let BridgeType = require('./BridgeType.js');
let WrenchLimitation = require('./WrenchLimitation.js');
let ProtectionZoneNotification = require('./ProtectionZoneNotification.js');
let BridgeIdentifier = require('./BridgeIdentifier.js');
let ZoneShape = require('./ZoneShape.js');
let GpioCommand = require('./GpioCommand.js');
let ConfigurationNotificationEvent = require('./ConfigurationNotificationEvent.js');
let JointTrajectoryConstraintType = require('./JointTrajectoryConstraintType.js');
let Twist = require('./Twist.js');
let FullIPv4Configuration = require('./FullIPv4Configuration.js');
let ActionHandle = require('./ActionHandle.js');
let ShapeType = require('./ShapeType.js');
let NetworkEvent = require('./NetworkEvent.js');
let CommunicationInterfaceConfiguration = require('./CommunicationInterfaceConfiguration.js');
let MapList = require('./MapList.js');
let FirmwareBundleVersions = require('./FirmwareBundleVersions.js');
let Base_ControlModeNotification = require('./Base_ControlModeNotification.js');
let RobotEventNotification = require('./RobotEventNotification.js');
let Base_JointSpeeds = require('./Base_JointSpeeds.js');
let ActionList = require('./ActionList.js');
let ActuatorCommand = require('./ActuatorCommand.js');
let ActuatorFeedback = require('./ActuatorFeedback.js');
let BaseCyclic_Feedback = require('./BaseCyclic_Feedback.js');
let BaseCyclic_Command = require('./BaseCyclic_Command.js');
let BaseCyclic_CustomData = require('./BaseCyclic_CustomData.js');
let ActuatorCustomData = require('./ActuatorCustomData.js');
let BaseCyclic_ServiceVersion = require('./BaseCyclic_ServiceVersion.js');
let BaseFeedback = require('./BaseFeedback.js');
let UARTParity = require('./UARTParity.js');
let SafetyStatusValue = require('./SafetyStatusValue.js');
let UARTWordLength = require('./UARTWordLength.js');
let UserProfileHandle = require('./UserProfileHandle.js');
let DeviceTypes = require('./DeviceTypes.js');
let Timestamp = require('./Timestamp.js');
let CountryCode = require('./CountryCode.js');
let CartesianReferenceFrame = require('./CartesianReferenceFrame.js');
let Connection = require('./Connection.js');
let NotificationOptions = require('./NotificationOptions.js');
let UARTStopBits = require('./UARTStopBits.js');
let ArmState = require('./ArmState.js');
let Unit = require('./Unit.js');
let NotificationHandle = require('./NotificationHandle.js');
let SafetyHandle = require('./SafetyHandle.js');
let DeviceHandle = require('./DeviceHandle.js');
let Empty = require('./Empty.js');
let NotificationType = require('./NotificationType.js');
let UARTConfiguration = require('./UARTConfiguration.js');
let UARTDeviceIdentification = require('./UARTDeviceIdentification.js');
let SafetyNotification = require('./SafetyNotification.js');
let UARTSpeed = require('./UARTSpeed.js');
let Permission = require('./Permission.js');
let CountryCodeIdentifier = require('./CountryCodeIdentifier.js');
let ControlConfig_ControlModeNotification = require('./ControlConfig_ControlModeNotification.js');
let ControlConfig_ServiceVersion = require('./ControlConfig_ServiceVersion.js');
let KinematicLimits = require('./KinematicLimits.js');
let ControlConfig_ControlModeInformation = require('./ControlConfig_ControlModeInformation.js');
let CartesianTransform = require('./CartesianTransform.js');
let DesiredSpeeds = require('./DesiredSpeeds.js');
let LinearTwist = require('./LinearTwist.js');
let ControlConfigurationEvent = require('./ControlConfigurationEvent.js');
let PayloadInformation = require('./PayloadInformation.js');
let TwistAngularSoftLimit = require('./TwistAngularSoftLimit.js');
let JointAccelerationSoftLimits = require('./JointAccelerationSoftLimits.js');
let ControlConfig_ControlMode = require('./ControlConfig_ControlMode.js');
let ControlConfigurationNotification = require('./ControlConfigurationNotification.js');
let ToolConfiguration = require('./ToolConfiguration.js');
let JointSpeedSoftLimits = require('./JointSpeedSoftLimits.js');
let AngularTwist = require('./AngularTwist.js');
let KinematicLimitsList = require('./KinematicLimitsList.js');
let GravityVector = require('./GravityVector.js');
let CartesianReferenceFrameInfo = require('./CartesianReferenceFrameInfo.js');
let ControlConfig_JointSpeeds = require('./ControlConfig_JointSpeeds.js');
let ControlConfig_Position = require('./ControlConfig_Position.js');
let TwistLinearSoftLimit = require('./TwistLinearSoftLimit.js');
let SafetyConfigurationList = require('./SafetyConfigurationList.js');
let FirmwareVersion = require('./FirmwareVersion.js');
let PowerOnSelfTestResult = require('./PowerOnSelfTestResult.js');
let CalibrationStatus = require('./CalibrationStatus.js');
let PartNumber = require('./PartNumber.js');
let PartNumberRevision = require('./PartNumberRevision.js');
let RunMode = require('./RunMode.js');
let DeviceConfig_CapSenseMode = require('./DeviceConfig_CapSenseMode.js');
let IPv4Settings = require('./IPv4Settings.js');
let SerialNumber = require('./SerialNumber.js');
let RebootRqst = require('./RebootRqst.js');
let SafetyStatus = require('./SafetyStatus.js');
let MACAddress = require('./MACAddress.js');
let CapSenseRegister = require('./CapSenseRegister.js');
let DeviceConfig_SafetyLimitType = require('./DeviceConfig_SafetyLimitType.js');
let CalibrationParameter_value = require('./CalibrationParameter_value.js');
let DeviceConfig_CapSenseConfig = require('./DeviceConfig_CapSenseConfig.js');
let SafetyConfiguration = require('./SafetyConfiguration.js');
let ModelNumber = require('./ModelNumber.js');
let SafetyInformationList = require('./SafetyInformationList.js');
let CalibrationItem = require('./CalibrationItem.js');
let SafetyThreshold = require('./SafetyThreshold.js');
let Calibration = require('./Calibration.js');
let DeviceType = require('./DeviceType.js');
let SafetyInformation = require('./SafetyInformation.js');
let RunModes = require('./RunModes.js');
let CalibrationElement = require('./CalibrationElement.js');
let BootloaderVersion = require('./BootloaderVersion.js');
let SafetyEnable = require('./SafetyEnable.js');
let CalibrationResult = require('./CalibrationResult.js');
let DeviceConfig_ServiceVersion = require('./DeviceConfig_ServiceVersion.js');
let CalibrationParameter = require('./CalibrationParameter.js');
let DeviceHandles = require('./DeviceHandles.js');
let DeviceManager_ServiceVersion = require('./DeviceManager_ServiceVersion.js');
let RobotiqGripperStatusFlags = require('./RobotiqGripperStatusFlags.js');
let GripperConfig_SafetyIdentifier = require('./GripperConfig_SafetyIdentifier.js');
let CustomDataUnit = require('./CustomDataUnit.js');
let MotorCommand = require('./MotorCommand.js');
let GripperCyclic_CustomData = require('./GripperCyclic_CustomData.js');
let GripperCyclic_Command = require('./GripperCyclic_Command.js');
let GripperCyclic_MessageId = require('./GripperCyclic_MessageId.js');
let GripperCyclic_ServiceVersion = require('./GripperCyclic_ServiceVersion.js');
let GripperCyclic_Feedback = require('./GripperCyclic_Feedback.js');
let MotorFeedback = require('./MotorFeedback.js');
let I2CMode = require('./I2CMode.js');
let I2CWriteParameter = require('./I2CWriteParameter.js');
let I2CDevice = require('./I2CDevice.js');
let GPIOPull = require('./GPIOPull.js');
let GPIOIdentification = require('./GPIOIdentification.js');
let GPIOValue = require('./GPIOValue.js');
let EthernetDuplex = require('./EthernetDuplex.js');
let EthernetDeviceIdentification = require('./EthernetDeviceIdentification.js');
let UARTPortId = require('./UARTPortId.js');
let GPIOMode = require('./GPIOMode.js');
let EthernetDevice = require('./EthernetDevice.js');
let I2CReadRegisterParameter = require('./I2CReadRegisterParameter.js');
let I2CDeviceIdentification = require('./I2CDeviceIdentification.js');
let I2CDeviceAddressing = require('./I2CDeviceAddressing.js');
let InterconnectConfig_SafetyIdentifier = require('./InterconnectConfig_SafetyIdentifier.js');
let I2CReadParameter = require('./I2CReadParameter.js');
let I2CRegisterAddressSize = require('./I2CRegisterAddressSize.js');
let I2CData = require('./I2CData.js');
let InterconnectConfig_ServiceVersion = require('./InterconnectConfig_ServiceVersion.js');
let EthernetSpeed = require('./EthernetSpeed.js');
let I2CWriteRegisterParameter = require('./I2CWriteRegisterParameter.js');
let GPIOIdentifier = require('./GPIOIdentifier.js');
let GPIOState = require('./GPIOState.js');
let EthernetConfiguration = require('./EthernetConfiguration.js');
let InterconnectConfig_GPIOConfiguration = require('./InterconnectConfig_GPIOConfiguration.js');
let I2CConfiguration = require('./I2CConfiguration.js');
let InterconnectCyclic_MessageId = require('./InterconnectCyclic_MessageId.js');
let InterconnectCyclic_CustomData = require('./InterconnectCyclic_CustomData.js');
let InterconnectCyclic_Feedback = require('./InterconnectCyclic_Feedback.js');
let InterconnectCyclic_Feedback_tool_feedback = require('./InterconnectCyclic_Feedback_tool_feedback.js');
let InterconnectCyclic_Command = require('./InterconnectCyclic_Command.js');
let InterconnectCyclic_Command_tool_command = require('./InterconnectCyclic_Command_tool_command.js');
let InterconnectCyclic_CustomData_tool_customData = require('./InterconnectCyclic_CustomData_tool_customData.js');
let InterconnectCyclic_ServiceVersion = require('./InterconnectCyclic_ServiceVersion.js');
let EndEffectorType = require('./EndEffectorType.js');
let ArmLaterality = require('./ArmLaterality.js');
let WristType = require('./WristType.js');
let BaseType = require('./BaseType.js');
let BrakeType = require('./BrakeType.js');
let ProductConfigurationEndEffectorType = require('./ProductConfigurationEndEffectorType.js');
let InterfaceModuleType = require('./InterfaceModuleType.js');
let VisionModuleType = require('./VisionModuleType.js');
let CompleteProductConfiguration = require('./CompleteProductConfiguration.js');
let ModelId = require('./ModelId.js');
let SensorFocusAction_action_parameters = require('./SensorFocusAction_action_parameters.js');
let SensorIdentifier = require('./SensorIdentifier.js');
let OptionIdentifier = require('./OptionIdentifier.js');
let OptionInformation = require('./OptionInformation.js');
let ManualFocus = require('./ManualFocus.js');
let Resolution = require('./Resolution.js');
let Sensor = require('./Sensor.js');
let VisionConfig_RotationMatrixRow = require('./VisionConfig_RotationMatrixRow.js');
let VisionConfig_RotationMatrix = require('./VisionConfig_RotationMatrix.js');
let VisionNotification = require('./VisionNotification.js');
let VisionConfig_ServiceVersion = require('./VisionConfig_ServiceVersion.js');
let IntrinsicParameters = require('./IntrinsicParameters.js');
let Option = require('./Option.js');
let TranslationVector = require('./TranslationVector.js');
let OptionValue = require('./OptionValue.js');
let FocusAction = require('./FocusAction.js');
let FocusPoint = require('./FocusPoint.js');
let VisionEvent = require('./VisionEvent.js');
let BitRate = require('./BitRate.js');
let FrameRate = require('./FrameRate.js');
let IntrinsicProfileIdentifier = require('./IntrinsicProfileIdentifier.js');
let SensorSettings = require('./SensorSettings.js');
let SensorFocusAction = require('./SensorFocusAction.js');
let ExtrinsicParameters = require('./ExtrinsicParameters.js');
let DistortionCoefficients = require('./DistortionCoefficients.js');
let FollowCartesianTrajectoryGoal = require('./FollowCartesianTrajectoryGoal.js');
let FollowCartesianTrajectoryAction = require('./FollowCartesianTrajectoryAction.js');
let FollowCartesianTrajectoryActionResult = require('./FollowCartesianTrajectoryActionResult.js');
let FollowCartesianTrajectoryActionFeedback = require('./FollowCartesianTrajectoryActionFeedback.js');
let FollowCartesianTrajectoryFeedback = require('./FollowCartesianTrajectoryFeedback.js');
let FollowCartesianTrajectoryResult = require('./FollowCartesianTrajectoryResult.js');
let FollowCartesianTrajectoryActionGoal = require('./FollowCartesianTrajectoryActionGoal.js');

module.exports = {
  KortexError: KortexError,
  ApiOptions: ApiOptions,
  ErrorCodes: ErrorCodes,
  SubErrorCodes: SubErrorCodes,
  ActuatorConfig_ControlMode: ActuatorConfig_ControlMode,
  TorqueOffset: TorqueOffset,
  ActuatorConfig_ServiceVersion: ActuatorConfig_ServiceVersion,
  LoopSelection: LoopSelection,
  CommandModeInformation: CommandModeInformation,
  ControlLoopSelection: ControlLoopSelection,
  CoggingFeedforwardMode: CoggingFeedforwardMode,
  Servoing: Servoing,
  CommandMode: CommandMode,
  PositionCommand: PositionCommand,
  ActuatorConfig_SafetyLimitType: ActuatorConfig_SafetyLimitType,
  AxisPosition: AxisPosition,
  CoggingFeedforwardModeInformation: CoggingFeedforwardModeInformation,
  FrequencyResponse: FrequencyResponse,
  ControlLoopParameters: ControlLoopParameters,
  ControlLoop: ControlLoop,
  ActuatorConfig_ControlModeInformation: ActuatorConfig_ControlModeInformation,
  EncoderDerivativeParameters: EncoderDerivativeParameters,
  VectorDriveParameters: VectorDriveParameters,
  CustomDataIndex: CustomDataIndex,
  AxisOffsets: AxisOffsets,
  TorqueCalibration: TorqueCalibration,
  CustomDataSelection: CustomDataSelection,
  StepResponse: StepResponse,
  RampResponse: RampResponse,
  SafetyIdentifierBankA: SafetyIdentifierBankA,
  ActuatorCyclic_MessageId: ActuatorCyclic_MessageId,
  ActuatorCyclic_ServiceVersion: ActuatorCyclic_ServiceVersion,
  ActuatorCyclic_CustomData: ActuatorCyclic_CustomData,
  StatusFlags: StatusFlags,
  ActuatorCyclic_Command: ActuatorCyclic_Command,
  ActuatorCyclic_Feedback: ActuatorCyclic_Feedback,
  CommandFlags: CommandFlags,
  CartesianTrajectoryConstraint_type: CartesianTrajectoryConstraint_type,
  GripperCommand: GripperCommand,
  UserProfile: UserProfile,
  IPv4Configuration: IPv4Configuration,
  GripperRequest: GripperRequest,
  WifiEncryptionType: WifiEncryptionType,
  Faults: Faults,
  ControllerEventType: ControllerEventType,
  ServoingModeNotification: ServoingModeNotification,
  GripperMode: GripperMode,
  BridgeStatus: BridgeStatus,
  MapEvent: MapEvent,
  GpioBehavior: GpioBehavior,
  Waypoint_type_of_waypoint: Waypoint_type_of_waypoint,
  ControllerType: ControllerType,
  FactoryEvent: FactoryEvent,
  OperatingModeNotificationList: OperatingModeNotificationList,
  ConfigurationChangeNotificationList: ConfigurationChangeNotificationList,
  WifiSecurityType: WifiSecurityType,
  FullUserProfile: FullUserProfile,
  UserList: UserList,
  MapGroup: MapGroup,
  ControllerNotificationList: ControllerNotificationList,
  Map: Map,
  ControllerElementState: ControllerElementState,
  Base_CapSenseConfig: Base_CapSenseConfig,
  RobotEvent: RobotEvent,
  LimitationType: LimitationType,
  CartesianLimitationList: CartesianLimitationList,
  ConstrainedPosition: ConstrainedPosition,
  UserProfileList: UserProfileList,
  ServoingMode: ServoingMode,
  ProtectionZoneNotificationList: ProtectionZoneNotificationList,
  FirmwareComponentVersion: FirmwareComponentVersion,
  MapElement: MapElement,
  Base_Stop: Base_Stop,
  PreComputedJointTrajectory: PreComputedJointTrajectory,
  Finger: Finger,
  BridgeConfig: BridgeConfig,
  NetworkType: NetworkType,
  Base_CapSenseMode: Base_CapSenseMode,
  JointTorques: JointTorques,
  ActionExecutionState: ActionExecutionState,
  GpioEvent: GpioEvent,
  ControllerNotification_state: ControllerNotification_state,
  EmergencyStop: EmergencyStop,
  AngularWaypoint: AngularWaypoint,
  SafetyEvent: SafetyEvent,
  ConstrainedJointAngles: ConstrainedJointAngles,
  RequestedActionType: RequestedActionType,
  MappingInfoNotification: MappingInfoNotification,
  NetworkNotificationList: NetworkNotificationList,
  Timeout: Timeout,
  ControllerConfiguration: ControllerConfiguration,
  GpioConfigurationList: GpioConfigurationList,
  WifiConfigurationList: WifiConfigurationList,
  CartesianLimitation: CartesianLimitation,
  RobotEventNotificationList: RobotEventNotificationList,
  ControllerHandle: ControllerHandle,
  TrajectoryInfoType: TrajectoryInfoType,
  SignalQuality: SignalQuality,
  BluetoothEnableState: BluetoothEnableState,
  OperatingModeInformation: OperatingModeInformation,
  CartesianTrajectoryConstraint: CartesianTrajectoryConstraint,
  JointAngle: JointAngle,
  EventIdSequenceInfoNotification: EventIdSequenceInfoNotification,
  AppendActionInformation: AppendActionInformation,
  BackupEvent: BackupEvent,
  SequenceTasksConfiguration: SequenceTasksConfiguration,
  OperatingMode: OperatingMode,
  ConstrainedOrientation: ConstrainedOrientation,
  ArmStateInformation: ArmStateInformation,
  Action_action_parameters: Action_action_parameters,
  ActionNotificationList: ActionNotificationList,
  TrajectoryErrorReport: TrajectoryErrorReport,
  GpioAction: GpioAction,
  ControllerConfigurationList: ControllerConfigurationList,
  TrajectoryErrorElement: TrajectoryErrorElement,
  Admittance: Admittance,
  Orientation: Orientation,
  SequenceTasksPair: SequenceTasksPair,
  TrajectoryErrorType: TrajectoryErrorType,
  Mapping: Mapping,
  SnapshotType: SnapshotType,
  WifiConfiguration: WifiConfiguration,
  PreComputedJointTrajectoryElement: PreComputedJointTrajectoryElement,
  TrajectoryInfo: TrajectoryInfo,
  WifiInformation: WifiInformation,
  LedState: LedState,
  SafetyNotificationList: SafetyNotificationList,
  Base_SafetyIdentifier: Base_SafetyIdentifier,
  Snapshot: Snapshot,
  JointAngles: JointAngles,
  SwitchControlMapping: SwitchControlMapping,
  BridgeResult: BridgeResult,
  ActionEvent: ActionEvent,
  ProtectionZoneHandle: ProtectionZoneHandle,
  CartesianWaypoint: CartesianWaypoint,
  TwistLimitation: TwistLimitation,
  Gen3GpioPinId: Gen3GpioPinId,
  ControllerEvent: ControllerEvent,
  JointTrajectoryConstraint: JointTrajectoryConstraint,
  CartesianSpeed: CartesianSpeed,
  SequenceInfoNotification: SequenceInfoNotification,
  MappingInfoNotificationList: MappingInfoNotificationList,
  MappingList: MappingList,
  ActuatorInformation: ActuatorInformation,
  Base_RotationMatrix: Base_RotationMatrix,
  UserNotification: UserNotification,
  SequenceHandle: SequenceHandle,
  IKData: IKData,
  ProtectionZone: ProtectionZone,
  Base_GpioConfiguration: Base_GpioConfiguration,
  UserNotificationList: UserNotificationList,
  MapEvent_events: MapEvent_events,
  ServoingModeInformation: ServoingModeInformation,
  JointNavigationDirection: JointNavigationDirection,
  Pose: Pose,
  SequenceTasksRange: SequenceTasksRange,
  ActionType: ActionType,
  WifiInformationList: WifiInformationList,
  SequenceInfoNotificationList: SequenceInfoNotificationList,
  WifiEnableState: WifiEnableState,
  SequenceTasks: SequenceTasks,
  Point: Point,
  JointSpeed: JointSpeed,
  WaypointValidationReport: WaypointValidationReport,
  ConfigurationChangeNotification_configuration_change: ConfigurationChangeNotification_configuration_change,
  ControllerBehavior: ControllerBehavior,
  Base_Position: Base_Position,
  Base_RotationMatrixRow: Base_RotationMatrixRow,
  ControlModeNotificationList: ControlModeNotificationList,
  MappingHandle: MappingHandle,
  Base_ControlModeInformation: Base_ControlModeInformation,
  SystemTime: SystemTime,
  TrajectoryContinuityMode: TrajectoryContinuityMode,
  ControllerConfigurationMode: ControllerConfigurationMode,
  SoundType: SoundType,
  ControllerNotification: ControllerNotification,
  ChangeTwist: ChangeTwist,
  Gripper: Gripper,
  AdvancedSequenceHandle: AdvancedSequenceHandle,
  ProtectionZoneEvent: ProtectionZoneEvent,
  SequenceTaskHandle: SequenceTaskHandle,
  Ssid: Ssid,
  MapGroupHandle: MapGroupHandle,
  RFConfiguration: RFConfiguration,
  ControllerElementHandle_identifier: ControllerElementHandle_identifier,
  ControllerInputType: ControllerInputType,
  GpioPinPropertyFlags: GpioPinPropertyFlags,
  ControllerList: ControllerList,
  Base_ControlMode: Base_ControlMode,
  SequenceList: SequenceList,
  IPv4Information: IPv4Information,
  TransformationMatrix: TransformationMatrix,
  ActivateMapHandle: ActivateMapHandle,
  NavigationDirection: NavigationDirection,
  SequenceTaskConfiguration: SequenceTaskConfiguration,
  ControllerElementEventType: ControllerElementEventType,
  Query: Query,
  TwistCommand: TwistCommand,
  NetworkNotification: NetworkNotification,
  Xbox360DigitalInputIdentifier: Xbox360DigitalInputIdentifier,
  Waypoint: Waypoint,
  SequenceInformation: SequenceInformation,
  PasswordChange: PasswordChange,
  JointLimitation: JointLimitation,
  JointTorque: JointTorque,
  WrenchCommand: WrenchCommand,
  ServoingModeNotificationList: ServoingModeNotificationList,
  ArmStateNotification: ArmStateNotification,
  ProtectionZoneInformation: ProtectionZoneInformation,
  TransformationRow: TransformationRow,
  ChangeWrench: ChangeWrench,
  NetworkHandle: NetworkHandle,
  TrajectoryErrorIdentifier: TrajectoryErrorIdentifier,
  Action: Action,
  AdmittanceMode: AdmittanceMode,
  KinematicTrajectoryConstraints: KinematicTrajectoryConstraints,
  GpioPinConfiguration: GpioPinConfiguration,
  MapGroupList: MapGroupList,
  ConstrainedJointAngle: ConstrainedJointAngle,
  OperatingModeNotification: OperatingModeNotification,
  BridgeList: BridgeList,
  ConstrainedPose: ConstrainedPose,
  WristDigitalInputIdentifier: WristDigitalInputIdentifier,
  SequenceTask: SequenceTask,
  ConfigurationChangeNotification: ConfigurationChangeNotification,
  ActionNotification: ActionNotification,
  Xbox360AnalogInputIdentifier: Xbox360AnalogInputIdentifier,
  ProtectionZoneList: ProtectionZoneList,
  ChangeJointSpeeds: ChangeJointSpeeds,
  ControllerState: ControllerState,
  Base_ServiceVersion: Base_ServiceVersion,
  FactoryNotification: FactoryNotification,
  ControllerElementHandle: ControllerElementHandle,
  MapHandle: MapHandle,
  Wrench: Wrench,
  BridgePortConfig: BridgePortConfig,
  WaypointList: WaypointList,
  WrenchMode: WrenchMode,
  Sequence: Sequence,
  Delay: Delay,
  UserEvent: UserEvent,
  JointsLimitationsList: JointsLimitationsList,
  BridgeType: BridgeType,
  WrenchLimitation: WrenchLimitation,
  ProtectionZoneNotification: ProtectionZoneNotification,
  BridgeIdentifier: BridgeIdentifier,
  ZoneShape: ZoneShape,
  GpioCommand: GpioCommand,
  ConfigurationNotificationEvent: ConfigurationNotificationEvent,
  JointTrajectoryConstraintType: JointTrajectoryConstraintType,
  Twist: Twist,
  FullIPv4Configuration: FullIPv4Configuration,
  ActionHandle: ActionHandle,
  ShapeType: ShapeType,
  NetworkEvent: NetworkEvent,
  CommunicationInterfaceConfiguration: CommunicationInterfaceConfiguration,
  MapList: MapList,
  FirmwareBundleVersions: FirmwareBundleVersions,
  Base_ControlModeNotification: Base_ControlModeNotification,
  RobotEventNotification: RobotEventNotification,
  Base_JointSpeeds: Base_JointSpeeds,
  ActionList: ActionList,
  ActuatorCommand: ActuatorCommand,
  ActuatorFeedback: ActuatorFeedback,
  BaseCyclic_Feedback: BaseCyclic_Feedback,
  BaseCyclic_Command: BaseCyclic_Command,
  BaseCyclic_CustomData: BaseCyclic_CustomData,
  ActuatorCustomData: ActuatorCustomData,
  BaseCyclic_ServiceVersion: BaseCyclic_ServiceVersion,
  BaseFeedback: BaseFeedback,
  UARTParity: UARTParity,
  SafetyStatusValue: SafetyStatusValue,
  UARTWordLength: UARTWordLength,
  UserProfileHandle: UserProfileHandle,
  DeviceTypes: DeviceTypes,
  Timestamp: Timestamp,
  CountryCode: CountryCode,
  CartesianReferenceFrame: CartesianReferenceFrame,
  Connection: Connection,
  NotificationOptions: NotificationOptions,
  UARTStopBits: UARTStopBits,
  ArmState: ArmState,
  Unit: Unit,
  NotificationHandle: NotificationHandle,
  SafetyHandle: SafetyHandle,
  DeviceHandle: DeviceHandle,
  Empty: Empty,
  NotificationType: NotificationType,
  UARTConfiguration: UARTConfiguration,
  UARTDeviceIdentification: UARTDeviceIdentification,
  SafetyNotification: SafetyNotification,
  UARTSpeed: UARTSpeed,
  Permission: Permission,
  CountryCodeIdentifier: CountryCodeIdentifier,
  ControlConfig_ControlModeNotification: ControlConfig_ControlModeNotification,
  ControlConfig_ServiceVersion: ControlConfig_ServiceVersion,
  KinematicLimits: KinematicLimits,
  ControlConfig_ControlModeInformation: ControlConfig_ControlModeInformation,
  CartesianTransform: CartesianTransform,
  DesiredSpeeds: DesiredSpeeds,
  LinearTwist: LinearTwist,
  ControlConfigurationEvent: ControlConfigurationEvent,
  PayloadInformation: PayloadInformation,
  TwistAngularSoftLimit: TwistAngularSoftLimit,
  JointAccelerationSoftLimits: JointAccelerationSoftLimits,
  ControlConfig_ControlMode: ControlConfig_ControlMode,
  ControlConfigurationNotification: ControlConfigurationNotification,
  ToolConfiguration: ToolConfiguration,
  JointSpeedSoftLimits: JointSpeedSoftLimits,
  AngularTwist: AngularTwist,
  KinematicLimitsList: KinematicLimitsList,
  GravityVector: GravityVector,
  CartesianReferenceFrameInfo: CartesianReferenceFrameInfo,
  ControlConfig_JointSpeeds: ControlConfig_JointSpeeds,
  ControlConfig_Position: ControlConfig_Position,
  TwistLinearSoftLimit: TwistLinearSoftLimit,
  SafetyConfigurationList: SafetyConfigurationList,
  FirmwareVersion: FirmwareVersion,
  PowerOnSelfTestResult: PowerOnSelfTestResult,
  CalibrationStatus: CalibrationStatus,
  PartNumber: PartNumber,
  PartNumberRevision: PartNumberRevision,
  RunMode: RunMode,
  DeviceConfig_CapSenseMode: DeviceConfig_CapSenseMode,
  IPv4Settings: IPv4Settings,
  SerialNumber: SerialNumber,
  RebootRqst: RebootRqst,
  SafetyStatus: SafetyStatus,
  MACAddress: MACAddress,
  CapSenseRegister: CapSenseRegister,
  DeviceConfig_SafetyLimitType: DeviceConfig_SafetyLimitType,
  CalibrationParameter_value: CalibrationParameter_value,
  DeviceConfig_CapSenseConfig: DeviceConfig_CapSenseConfig,
  SafetyConfiguration: SafetyConfiguration,
  ModelNumber: ModelNumber,
  SafetyInformationList: SafetyInformationList,
  CalibrationItem: CalibrationItem,
  SafetyThreshold: SafetyThreshold,
  Calibration: Calibration,
  DeviceType: DeviceType,
  SafetyInformation: SafetyInformation,
  RunModes: RunModes,
  CalibrationElement: CalibrationElement,
  BootloaderVersion: BootloaderVersion,
  SafetyEnable: SafetyEnable,
  CalibrationResult: CalibrationResult,
  DeviceConfig_ServiceVersion: DeviceConfig_ServiceVersion,
  CalibrationParameter: CalibrationParameter,
  DeviceHandles: DeviceHandles,
  DeviceManager_ServiceVersion: DeviceManager_ServiceVersion,
  RobotiqGripperStatusFlags: RobotiqGripperStatusFlags,
  GripperConfig_SafetyIdentifier: GripperConfig_SafetyIdentifier,
  CustomDataUnit: CustomDataUnit,
  MotorCommand: MotorCommand,
  GripperCyclic_CustomData: GripperCyclic_CustomData,
  GripperCyclic_Command: GripperCyclic_Command,
  GripperCyclic_MessageId: GripperCyclic_MessageId,
  GripperCyclic_ServiceVersion: GripperCyclic_ServiceVersion,
  GripperCyclic_Feedback: GripperCyclic_Feedback,
  MotorFeedback: MotorFeedback,
  I2CMode: I2CMode,
  I2CWriteParameter: I2CWriteParameter,
  I2CDevice: I2CDevice,
  GPIOPull: GPIOPull,
  GPIOIdentification: GPIOIdentification,
  GPIOValue: GPIOValue,
  EthernetDuplex: EthernetDuplex,
  EthernetDeviceIdentification: EthernetDeviceIdentification,
  UARTPortId: UARTPortId,
  GPIOMode: GPIOMode,
  EthernetDevice: EthernetDevice,
  I2CReadRegisterParameter: I2CReadRegisterParameter,
  I2CDeviceIdentification: I2CDeviceIdentification,
  I2CDeviceAddressing: I2CDeviceAddressing,
  InterconnectConfig_SafetyIdentifier: InterconnectConfig_SafetyIdentifier,
  I2CReadParameter: I2CReadParameter,
  I2CRegisterAddressSize: I2CRegisterAddressSize,
  I2CData: I2CData,
  InterconnectConfig_ServiceVersion: InterconnectConfig_ServiceVersion,
  EthernetSpeed: EthernetSpeed,
  I2CWriteRegisterParameter: I2CWriteRegisterParameter,
  GPIOIdentifier: GPIOIdentifier,
  GPIOState: GPIOState,
  EthernetConfiguration: EthernetConfiguration,
  InterconnectConfig_GPIOConfiguration: InterconnectConfig_GPIOConfiguration,
  I2CConfiguration: I2CConfiguration,
  InterconnectCyclic_MessageId: InterconnectCyclic_MessageId,
  InterconnectCyclic_CustomData: InterconnectCyclic_CustomData,
  InterconnectCyclic_Feedback: InterconnectCyclic_Feedback,
  InterconnectCyclic_Feedback_tool_feedback: InterconnectCyclic_Feedback_tool_feedback,
  InterconnectCyclic_Command: InterconnectCyclic_Command,
  InterconnectCyclic_Command_tool_command: InterconnectCyclic_Command_tool_command,
  InterconnectCyclic_CustomData_tool_customData: InterconnectCyclic_CustomData_tool_customData,
  InterconnectCyclic_ServiceVersion: InterconnectCyclic_ServiceVersion,
  EndEffectorType: EndEffectorType,
  ArmLaterality: ArmLaterality,
  WristType: WristType,
  BaseType: BaseType,
  BrakeType: BrakeType,
  ProductConfigurationEndEffectorType: ProductConfigurationEndEffectorType,
  InterfaceModuleType: InterfaceModuleType,
  VisionModuleType: VisionModuleType,
  CompleteProductConfiguration: CompleteProductConfiguration,
  ModelId: ModelId,
  SensorFocusAction_action_parameters: SensorFocusAction_action_parameters,
  SensorIdentifier: SensorIdentifier,
  OptionIdentifier: OptionIdentifier,
  OptionInformation: OptionInformation,
  ManualFocus: ManualFocus,
  Resolution: Resolution,
  Sensor: Sensor,
  VisionConfig_RotationMatrixRow: VisionConfig_RotationMatrixRow,
  VisionConfig_RotationMatrix: VisionConfig_RotationMatrix,
  VisionNotification: VisionNotification,
  VisionConfig_ServiceVersion: VisionConfig_ServiceVersion,
  IntrinsicParameters: IntrinsicParameters,
  Option: Option,
  TranslationVector: TranslationVector,
  OptionValue: OptionValue,
  FocusAction: FocusAction,
  FocusPoint: FocusPoint,
  VisionEvent: VisionEvent,
  BitRate: BitRate,
  FrameRate: FrameRate,
  IntrinsicProfileIdentifier: IntrinsicProfileIdentifier,
  SensorSettings: SensorSettings,
  SensorFocusAction: SensorFocusAction,
  ExtrinsicParameters: ExtrinsicParameters,
  DistortionCoefficients: DistortionCoefficients,
  FollowCartesianTrajectoryGoal: FollowCartesianTrajectoryGoal,
  FollowCartesianTrajectoryAction: FollowCartesianTrajectoryAction,
  FollowCartesianTrajectoryActionResult: FollowCartesianTrajectoryActionResult,
  FollowCartesianTrajectoryActionFeedback: FollowCartesianTrajectoryActionFeedback,
  FollowCartesianTrajectoryFeedback: FollowCartesianTrajectoryFeedback,
  FollowCartesianTrajectoryResult: FollowCartesianTrajectoryResult,
  FollowCartesianTrajectoryActionGoal: FollowCartesianTrajectoryActionGoal,
};
