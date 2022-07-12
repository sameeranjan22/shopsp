import Orders from "../../models/Orders"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res)=> {
    if(req.method == 'POST'){
        console.log(req.body)
        for (let i=0; i<req.body.length; i++){
            let p = new Orders({
                name: req.body[i].name,
                email: req.body[i].email,
                phone: req.body[i].phone,
                products:[{
                    productName:req.body[i].productName,
                    quantity:req.body[i].quantity
                }],
                address: req.body[i].address,
                city: req.body[i].city,
                pincode: req.body[i].pincode,
                state: req.body[i].state,
                amount: req.body[i].amount,
            })
        await p.save()
        }
        res.status(200).json( {success: "success"})
    }
    else{
        res.status(400).json({error: "Not allowed"})

    }
}
export default connectDb(handler);
    
