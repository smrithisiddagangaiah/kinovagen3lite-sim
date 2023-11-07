## *********************************************************
##
## File autogenerated for the image_proc package
## by the dynamic_reconfigure package.
## Please do not edit.
##
## ********************************************************/

from dynamic_reconfigure.encoding import extract_params

inf = float('inf')

config_description = {'name': 'Default', 'type': '', 'state': True, 'cstate': 'true', 'id': 0, 'parent': 0, 'parameters': [{'name': 'decimation_x', 'type': 'int', 'default': 1, 'level': 0, 'description': 'Number of pixels to decimate to one horizontally', 'min': 1, 'max': 16, 'srcline': 291, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'edit_method': '', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'decimation_y', 'type': 'int', 'default': 1, 'level': 0, 'description': 'Number of pixels to decimate to one vertically', 'min': 1, 'max': 16, 'srcline': 291, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'edit_method': '', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'x_offset', 'type': 'int', 'default': 0, 'level': 0, 'description': 'X offset of the region of interest', 'min': 0, 'max': 2447, 'srcline': 291, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'edit_method': '', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'y_offset', 'type': 'int', 'default': 0, 'level': 0, 'description': 'Y offset of the region of interest', 'min': 0, 'max': 2049, 'srcline': 291, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'edit_method': '', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'width', 'type': 'int', 'default': 0, 'level': 0, 'description': 'Width of the region of interest', 'min': 0, 'max': 2448, 'srcline': 291, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'edit_method': '', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'height', 'type': 'int', 'default': 0, 'level': 0, 'description': 'Height of the region of interest', 'min': 0, 'max': 2050, 'srcline': 291, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'edit_method': '', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'interpolation', 'type': 'int', 'default': 0, 'level': 0, 'description': 'Sampling algorithm', 'min': 0, 'max': 4, 'srcline': 291, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'edit_method': "{'enum': [{'name': 'NN', 'type': 'int', 'value': 0, 'srcline': 21, 'srcfile': '/home/smrithi/catkin_workspace/src/image_pipeline/image_proc/cfg/CropDecimate.cfg', 'description': 'Nearest-neighbor sampling', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'Linear', 'type': 'int', 'value': 1, 'srcline': 22, 'srcfile': '/home/smrithi/catkin_workspace/src/image_pipeline/image_proc/cfg/CropDecimate.cfg', 'description': 'Bilinear interpolation', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'Cubic', 'type': 'int', 'value': 2, 'srcline': 23, 'srcfile': '/home/smrithi/catkin_workspace/src/image_pipeline/image_proc/cfg/CropDecimate.cfg', 'description': 'Bicubic interpolation over 4x4 neighborhood', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'Area', 'type': 'int', 'value': 3, 'srcline': 24, 'srcfile': '/home/smrithi/catkin_workspace/src/image_pipeline/image_proc/cfg/CropDecimate.cfg', 'description': 'Resampling using pixel area relation', 'ctype': 'int', 'cconsttype': 'const int'}, {'name': 'Lanczos4', 'type': 'int', 'value': 4, 'srcline': 25, 'srcfile': '/home/smrithi/catkin_workspace/src/image_pipeline/image_proc/cfg/CropDecimate.cfg', 'description': 'Lanczos interpolation over 8x8 neighborhood', 'ctype': 'int', 'cconsttype': 'const int'}], 'enum_description': 'interpolation type'}", 'ctype': 'int', 'cconsttype': 'const int'}], 'groups': [], 'srcline': 246, 'srcfile': '/opt/ros/noetic/lib/python3/dist-packages/dynamic_reconfigure/parameter_generator_catkin.py', 'class': 'DEFAULT', 'parentclass': '', 'parentname': 'Default', 'field': 'default', 'upper': 'DEFAULT', 'lower': 'groups'}

min = {}
max = {}
defaults = {}
level = {}
type = {}
all_level = 0

#def extract_params(config):
#    params = []
#    params.extend(config['parameters'])
#    for group in config['groups']:
#        params.extend(extract_params(group))
#    return params

for param in extract_params(config_description):
    min[param['name']] = param['min']
    max[param['name']] = param['max']
    defaults[param['name']] = param['default']
    level[param['name']] = param['level']
    type[param['name']] = param['type']
    all_level = all_level | param['level']

CropDecimate_NN = 0
CropDecimate_Linear = 1
CropDecimate_Cubic = 2
CropDecimate_Area = 3
CropDecimate_Lanczos4 = 4
