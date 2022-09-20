const fs = require("fs");
//const {v4 : uuid4}=require('uuid')

//var moment = require('moment');

const timestamp = require("time-stamp");

exports.getOrders = function (req, res) {
  try {
    fs.readFile("./orders.json", "utf-8", (err, jsonString) => {
      console.log(req.body);
      if (err) return console.log(err);

      console.log("Orders: " + jsonString);
      res.write(jsonString);
      res.end();
    });
  } catch (e) {
    console.log(e.message);
  }
};

//generate orders

exports.createOrders = function (req, res) {
  try {
    const { userId, productId, timeStamp } = req.body;
    const myOrders = {
      userId: userId,
      productId: productId,
      //timeStamp:moment().format('MMMM Do YYYY, h:mm:ss a')
      //timeStamp: timestamp.utc("YYYY/MM/DD:HH:mm:ss"),
    };

    fs.readFile("orders.json", "utf-8", function (err, data) {
      let object = JSON.parse(data);
      object.push(myOrders);

      fs.writeFile(
        "orders.json",
        JSON.stringify(object, null, 2),
        function (err) {
          if (err) return console.log(err);
          res.send("orders added successfully!!");
          res.end();
        }
      );
    });
  } catch (e) {
    console.log(e.message);
  }
};

/*

exports.getOrdersByID=function(req,res,next){
    try{
console.log(req.body);
        let id=req.params.id;
        console.log(id);
        fs.readFile('orders.json','utf-8',function(err,data){
            if(err) return console.log(err.message);
            let object=JSON.parse(data,null,2);

            let ordersId=object.filter((data)=>data.userId == id)
            console.log(ordersId);
            res.send(ordersId);
        })

    }catch(e){
        console.log(e.message);
    }
}

*/
/*

exports.getOrdersByID = function (req, res) {
  
    let id = req.params.id;

    let result = [];
    console.log(id);
    fs.readFile("orders.json", "utf-8", function (err, data) {
      if (err) return console.log(err.message);
      let objOrder = JSON.parse(data);
      fs.readFile("products.json", "utf-8", function (err, data) {
        if (err) return console.log(err.message);
        let objProduct = JSON.parse(data);

        let userData = objOrder.filter((data) => data.userId == id);
        console.log(objProduct);
        console.log(userData);

        let productDetails=userData.map(element=>{


        })
      })
    })
  }
*/
       /* function getMatch(userData,objProduct) {
            var matches = [];
        
            for ( var i = 0; i < userData.length; i++ ) {
                for ( var e = 0; e < objProduct.length; e++ ) {
                    if ( userData[i] === objProduct[e] ) matches.push(userData[i] );
                }
            }
            return console.log(matches);
        }
        
        
        //getMatch(userData,objProduct)

      });
    });
  } catch (e) {
    console.log(e.message);
  }
};
*/