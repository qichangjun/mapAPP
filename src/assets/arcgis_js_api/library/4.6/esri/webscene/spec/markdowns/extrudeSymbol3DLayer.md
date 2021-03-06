# ExtrudeSymbol3DLayer

ExtrudeSymbol3DLayer is used to render Polygon geometries by extruding them upward from the ground, creating a 3D volumetric object.

### Properties

| Property | Details
| --- | ---
| enable | Type:`Boolean`
| [material](material.md) | The material used to shade the geometry.
| size | Extrusion height in meters.
| type | Specifies the type of symbol used<br>Value of this property must be `Extrude`


### Example

```json
{
  "symbolLayer": {
    "type": "Extrude",
    "material": {
      "color": [
        255,
        0,
        0
      ]
    },
    "size": 250
  }
}
```

