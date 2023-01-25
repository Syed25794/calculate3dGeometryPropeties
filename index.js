function calculate3dShapesProperty(shape, property, parameters) {
  // code to calculate the property of the shape

  if( parameters.length === 0 ){
    return "Parameters can't be empty!";
  }
  if( shape === undefined ){
    return "Shape can't be undefined! Please provide specific shape.";
  }
  if( property === undefined ){
    return "Property can't be undefined! Please provide specific property.";
  }

  let result;
  switch (shape) {
    case "cube":
      switch (property) {
        case "volume":
          result = Math.pow(parameters.side, 3);
          break;
        case "sa":
          result = 6 * Math.pow(parameters.side, 2);
          break;
        case "csa":
          result = "Cube doesn't have curved surface area";
          break;
        default:
            result="Invalid Property!";
      }
      break;
    case "cuboid":
      switch (property) {
        case "volume":
          result = parameters.length * parameters.width * parameters.height;
          break;
        case "sa":
          result =
            2 *
            (parameters.length * parameters.width +
              parameters.width * parameters.height +
              parameters.height * parameters.length);
          break;
        case "csa":
          result = "Cuboid doesn't have curved surface area";
          break;
        default:
            result="Invalid Property!";
      }
      break;
    case "sphere":
      switch (property) {
        case "volume":
          result = (4 / 3) * Math.PI * Math.pow(parameters.radius, 3);
          break;
        case "sa":
          result = 4 * Math.PI * Math.pow(parameters.radius, 2);
          break;
        case "csa":
          result = 4 * Math.PI * Math.pow(parameters.radius, 2);
          break;
        default:
            result="Invalid Property!";
      }
      break;
    case "cylinder":
      switch (property) {
        case "volume":
          result = Math.PI * Math.pow(parameters.radius, 2) * parameters.height;
          break;
        case "sa":
          result =
            2 *
            Math.PI *
            parameters.radius *
            (parameters.radius + parameters.height);
          break;
        case "csa":
          result = 2 * Math.PI * parameters.radius * parameters.height;
          break;
        default:
            result="Invalid Property!";
      }
      break;
    case "cone":
      switch (property) {
        case "volume":
          result =
            (1 / 3) *
            Math.PI *
            Math.pow(parameters.radius, 2) *
            parameters.height;
          break;
        case "sa":
          result =
            Math.PI *
            parameters.radius *
            (parameters.radius +
              Math.sqrt(
                Math.pow(parameters.radius, 2) + Math.pow(parameters.height, 2)
              ));
          break;
        case "csa":
          result =
            Math.PI *
            parameters.radius *
            Math.sqrt(
              Math.pow(parameters.radius, 2) + Math.pow(parameters.height, 2)
            );
          break;
        default:
            result="Invalid Property!";
      }
      break;
    case "torus":
      switch (property) {
        case "volume":
          result =
            2 *
            Math.PI *
            Math.pow(parameters.radius, 2) *
            Math.PI *
            parameters.tubeRadius;
          break;
        case "sa":
          result =
            4 * Math.PI * Math.pow(parameters.radius, 2) +
            4 * Math.PI * Math.pow(parameters.tubeRadius, 2);
          break;
        case "csa":
          result = 4 * Math.PI * parameters.radius * parameters.tubeRadius;
          break;
        default:
            result="Invalid Property!";
      }
      break;
    case "prism":
      switch (property) {
        case "volume":
          result = parameters.areaOfBase * parameters.height;
          break;
        case "sa":
          result =
            2 * parameters.areaOfBase +
            parameters.perimeterOfBase * parameters.height;
          break;
        case "csa":
          result = "Prism doesn't have curved surface area property!";
          break;
        default:
            result="Invalid Property!";
      }
      break;
    case "pyramid":
      switch (property) {
        case "volume":
          result = (1 / 3) * parameters.areaOfBase * parameters.height;
          break;
        case "sa":
          result =
            parameters.areaOfBase +
            parameters.perimeterOfBase *
              Math.sqrt(
                parameters.height * parameters.height +
                  parameters.slantHeight * parameters.slantHeight
              );
          break;
        case "csa":
          result = "Pyramid doesn't have curved surface area property!";
          break;
        default:
            result="Invalid Property!";
      }
      break;
    default :
      result="Invalid Shape";
  }
  return result;
}
let volume=calculate3dShapesProperty("cube","sa",{side:6});
console.log(volume);

module.exports=calculate3dShapesProperty;
