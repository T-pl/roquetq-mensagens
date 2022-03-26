const Database = require('../database/config')

module.exports ={
  async create(req, res) {

    const database = await Database()

    const password = req.body.password

    let roomId

    for (var i = 0; i < 6; i++){
      i == 0 ? roomId = roomId += Math.floor(Math.random()*10).toString() :
      roomId += Math.floor(Math.random()*10).toString()
    }

    await database.run(`INSERT INTO rooms(
      id,
      password
    ) VALUES(
      ${parseInt(roomId)},
      ${password}
    )`)
    await database.close()
    res.redirect(`/room/${roomId}`)

  }
}