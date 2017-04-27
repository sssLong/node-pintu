var mysql      = require('mysql');
var obj;
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'qian'
});
 
connection.connect();

module.exports = connection;
/*var sql = 'SELECT id,user_name,password,num from user_infor WHERE num="10"';
//增
connection.query(sql,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});*/
