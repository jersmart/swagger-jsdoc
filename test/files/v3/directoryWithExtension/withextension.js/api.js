// Imaginary API helper

module.exports = function (app) {
    /**
 * @swagger
 * /pets/withextension.js/:petId:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
    app.get('/pets/withextension.js/:petId', () => {});
  };
  