const fs=require('fs')
const {v4 : uuid4}=require('uuid')

exports.getProducts=function(req,res){
    try{
        fs.readFile('./products.json','utf-8',(err,jsonString)=>{

         //console.log(req.body);
         if(err) return console.log(err);
         
         console.log("products: "+jsonString);
         res.write(jsonString)
         res.end()

        })
    }catch(e){
       console.log(e.message);
    }
}


/*
exports.createProducts=function(req,res){

    try{
        const id=uuid4();

        const {product_name,description}=req.body;
        const myProduct={
            productId:id,
            product_name:product_name,
            description:description
        };

        fs.readFile("products.json","utf-8",function(err,data){
            let object=JSON.parse(data);
            object.push(myProduct);

            fs.writeFile('products.json',JSON.stringify(object,null,2),function(err){
                if(err) return console.log(err);
                res.send('Products added successfully!!')
                res.end();
            })
        })
    }catch(e){
        console.log(e.message);
    }

}
*/