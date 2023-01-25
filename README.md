# 3D Geometry

A npm package that helps you to calculate properties of 3D shapes like volume, surface area, and curved surface area.

## Description

The `3D Geometry` package provides a simple and easy to use function that can calculate the properties of various 3D shapes like cube, cuboid, sphere, cylinder, cone, torus, prism, pyramid and more. You just need to provide the shape, property and the parameters required by that shape to get the result.

## Features
- Calculate the properties of various 3D shapes like cube, cuboid, sphere, cylinder, cone, torus, prism, pyramid and more.
- Properties like volume, surface area, and curved surface area can be calculated.
- Easy to use and understand.

## Usage

```javascript
const { calculate3dShapesProperty } = require('3dgeometry');

const shape = "cube";
const property = "volume";
const parameters = {side: 2};

console.log(calculate3dShapesProperty(shape, property, parameters))



## Note

The package assumes that you pass the correct parameter for the shape you have selected. It's always a good practice to validate the input before passing it to the function.

## Contribution

If you want to contribute to this package or have any suggestions or questions, please feel free to open an issue or pull request.

## License

This package is licensed under the MIT license.