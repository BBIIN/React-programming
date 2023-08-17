/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7jchgkvom1agm2b",
    "created": "2023-08-17 06:09:29.975Z",
    "updated": "2023-08-17 06:09:29.975Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j0bsymmo",
        "name": "doit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "snqcp9pn",
        "name": "done",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("7jchgkvom1agm2b");

  return dao.deleteCollection(collection);
})
