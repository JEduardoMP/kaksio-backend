const { Cats } = require('../models/cats.model')

exports.getAllCats = async (req, res, next) => {
  try {
    const kittens = await Cats.findAll();

    const catJson = (info, id) => {
      return{
        [`cat${id}`]: info
      }
    }
  
    const catFormat = kittens.map(cat => catJson(cat, cat.id))

    res.status(200).json({
      status: 'success',
      data: { catFormat },
    });
  } catch (error) {
    console.log(error);
  }
};