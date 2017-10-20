'use strict';
const roomsCtrl = require('../../database/controllers/rooms');

/*  Gets a room from the database.

    PARAMS
      req (object): request object. Must contains the following properties in its params property
        name (string): name of the room
      res (object): response object

    RETURN
      none
*/
const getAll = (req, res) => {
  // Retrieve room information from database
  roomsCtrl.findAll(rooms => {
    return res.status(200).json(rooms);
  });
};

module.exports = getAll;