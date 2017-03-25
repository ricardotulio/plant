# Plant API

This API provide a REST endpoint to maintain plants :)

## Creating plants

```
POST /v1/plant

{
    "name": "happy plant",
    "qty_liters_per_watering": 0.8
}

HTTP/1.1 201 Created

{
    "plant_id": "36bf002e3a684376-847c-b5bfb52fd088",
    "name": "happy plant",
    "qty_liters_per_watering": 0.8
}
```

## Getting plants

```
GET /v1/plant

HTTP/1.1 200 Ok
[
    {
        "plant_id": "36bf002e3a684376847cb5bfb52fd088",
        "name": "happy plant",
        "qty_liters_per_watering": 0.8
    },
    {
        "plant_id": "36bf002e3a684376847cdofdfioa3234ad",
        "name": "another plant",
        "qty_liters_per_watering": 2
    },
    {
        "plant_id": "fja0sd9fja09sdfja0d9fja0dfa0dfj0ad",
        "name": "another plant",
        "qty_liters_per_watering": 1.2
    }
]
```

## Getting a plant

```
GET /v1/plant

HTTP/1.1 200 Ok

{
    "plant_id": "36bf002e3a684376847cb5bfb52fd088",
    "name": "happy plant",
    "qty_liters_per_watering": 0.8
}
```

## Updating plants

```
PUT /v1/plant/36bf002e3a684376847cb5bfb52fd088

{
    "qty_liters_per_watering": 2.0
}


HTTP/1.1 200 Ok

{
    "plant_id": "36bf002e3a684376-847c-b5bfb52fd088",
    "name": "happy plant",
    "qty_liters_per_watering": 2.0
}
```

## Deleting plants

```
DELETE /v1/plant/36bf002e3a684376847cb5bfb52fd088

HTTP/1.1 200 Ok

{
    "success": true
}
```
