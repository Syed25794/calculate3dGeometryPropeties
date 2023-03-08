# 3D Geometry


<img src="https://i.ibb.co/qjvHpr9/image1.png" alt="Cube,Cuboid,Prism" margin="center" height="75%" >

A npm package that helps you to calculate properties of 3D shapes like volume, surface area, and curved surface area.

## Description

The `3D Geometry` package provides a simple and easy to use function that can calculate the properties of various 3D shapes like cube, cuboid, sphere, cylinder, cone, torus, prism, pyramid and more. You just need to provide the shape, property and the parameters required by that shape to get the result.

## Features
- Calculate the properties of various 3D shapes like cube, cuboid, sphere, cylinder, cone, torus, prism, pyramid and more.
- Properties like volume, surface area, and curved surface area can be calculated.
- Easy to use and understand.

## Usage

You can use this packages to calculate different properties of three dimensional shapes
- Till now we have the following shapes only
1.Cube
2.Cuboid
3.Sphere
4.Cone
5.Cylinder
6.Torus
7.Prism
8.Pyramid

- Till now we have the following properties only
1.Volume - for volume property you have to give it as "volume"
2.Curverd Surface Area - for this property use "csa" as the value of property
3.Surface Area - for this property use "sa" as the value of the property

```javascript

const { calculate3dShapesProperty } = require('3dgeometry');

const shape = "cube";
const property = "volume";
const parameters = {side: 2};

console.log(calculate3dShapesProperty(shape, property, parameters));



const { calculate3dShapesProperty } = require('3dgeometry');

// 1. Cube Volume
const shape1 = "cube";
const property1 = "volume";
const parameters1 = {side: 2};
console.log(calculate3dShapesProperty(shape1, property1, parameters1));

// 2. Sphere Volume
const shape2 = "sphere";
const property2 = "volume";
const parameters2 = {radius: 2};
console.log(calculate3dShapesProperty(shape2, property2, parameters2));

// 3. Cylinder Volume
const shape3 = "cylinder";
const property3 = "volume";
const parameters3 = {radius: 2, height: 3};
console.log(calculate3dShapesProperty(shape3, property3, parameters3));

// 4. Cube Surface Area
const shape4 = "cube";
const property4 = "surface_area";
const parameters4 = {side: 2};
console.log(calculate3dShapesProperty(shape4, property4, parameters4));

// 5. Sphere Surface Area
const shape5 = "sphere";
const property5 = "surface_area";
const parameters5 = {radius: 2};
console.log(calculate3dShapesProperty(shape5, property5, parameters5));

// 6. Cylinder Surface Area
const shape6 = "cylinder";
const property6 = "surface_area";
const parameters6 = {radius: 2, height: 3};
console.log(calculate3dShapesProperty(shape6, property6, parameters6));

```



## Note

The package assumes that you pass the correct parameter for the shape you have selected. It's always a good practice to validate the input before passing it to the function.

## Contribution

If you want to contribute to this package or have any suggestions or questions, please feel free to open an issue or pull request.

## License

This package is licensed under the MIT license. Want to read <a href="https://opensource.org/licenses/MIT" target="_blank">Click On Me</a>
