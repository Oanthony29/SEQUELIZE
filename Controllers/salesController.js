import saleModel from "../Models/salesModel.js";

// get all sales
export const allSales = async (req, res)=>{
    try{
        const sales = await saleModel.findAll();
        if(sales.length === 0) {
        res.status(404).json({
            message: 'An error occured',
        })
        // console.log("An error occured.")
    }else{
        res.status(200).json({
            message: 'All Sales' + sales.length,
            data: sales
        })
    }
    }catch(error){
        console.log(error)
    }
}

// Logic to get a single sale
export const singleSale = async (req, res) =>{
    try{
        //grab the id from the url
       const id = req.params.id;
        const sale = await saleModel.findAll({
            where: {id: id}
        });
        if(sale.length === 0){
            res.status(404).json({
                message: 'No such id: ${id}'
            });
            console.log(salesTable[0].id)
        }else{
            res.status(200).json({
                data: sale[0]
            });
        }
    }catch(e){
        res.status(404).json({
            message: e.message
        })
    }
}

// create a new student
export const newSale = async (req, res)=>{
    try{
        const sale = await saleModel.create(req.body);
        res.status(201).json({
            data: sale
        })
    }catch(e){
        res.status(404).json({
            message: e.message
        })
    }
}

// update a sale record
export const updateSale = async (req, res)=>{
    try{
        const id = req.params.id;
        const updatedSale = await saleModel.update( req.body, {where: {id: id}})
        if (updateSale[0] == 0){
            res.status(404).json({
                message: `No such id: ${id}`
            });
        }else{
            //return the result
            res.status(200).json({
                message: 'updated sucessfully',
                data: updatedSale
            })
        }
    }catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}


// delete/ remove sale record
export const deleteSale = async (req, res)=>{
    try{
        // grab id from the url
        const id = req.params.id;
        // removed the sale with the specified id passed
        const removedSale = await saleModel.destroy({
            where: {id: id}
        });
        // check for wrong id
        if (removedSale == 0){
            res.status(404).json({
                message: `No such id: ${id}`
            });
        }else{
            // return the result
            res.status(200).json({
                message: "sucessfully deleted.",
                data: removedSale
            })
        }
    }catch(e){
        res.status(400).json({
            message: e.message
        })
    }
}