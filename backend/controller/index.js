const {BeastCard} = require('../../models/schema')

const homePage = (req,res)=>{
    res.render('pages/home')
}

const libraryPage = async (req, res) => {
    try {
      const cards = await BeastCard.find(); 
      
      res.render('pages/library', { cards });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching card data' });
    }
}

const cardPage = async (req, res) =>{
  try {
    const {cardID} = req.params;
    const card =  await BeastCard.findById(cardID);
    res.render('pages/card', {card})
  } catch(error) {
    console.error(error)
    res.json({message: 'error'})
  }
}

const marketplace = (req, res) =>{
  res.render('pages/marketplace')
}


module.exports = {homePage, libraryPage, cardPage, marketplace}