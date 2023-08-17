/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j5ppwqe951wfdeb",
    "created": "2023-08-17 06:04:47.422Z",
    "updated": "2023-08-17 06:04:47.422Z",
    "name": "cards",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mfbiuw0y",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 40,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1njtqox9",
        "name": "desciption",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "efjvuulo",
        "name": "tags",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "design",
            "develop",
            "plan"
          ]
        }
      },
      {
        "system": false,
        "id": "wbtqogaw",
        "name": "cover",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j5ppwqe951wfdeb");

  return dao.deleteCollection(collection);
})
