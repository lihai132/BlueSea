
var fs = require('fs');

const express = require('express')

const app = express()

app.get('/update/android', (req, res) => {
    let { minVersin, currentVersin, address, currentVersinDescription } = req.query
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    let data = {
        minVersin, currentVersin, address, currentVersinDescription
    }





    fs.writeFile('../appUpdate/android.txt', [minVersin, currentVersin, address, currentVersinDescription], function (err) {

        if (err) {
            throw err;
        }

    })

    res.send(data);

})

app.get('/update/ios', (req, res) => {
    let { minVersin, currentVersin, address, currentVersinDescription } = req.query
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    let data = {
        minVersin, currentVersin, address, currentVersinDescription
    }





    fs.writeFile('../appUpdate/ios.txt', [minVersin, currentVersin, address, currentVersinDescription], function (err) {

        if (err) {
            throw err;
        }

    })

    res.send(data);

})









app.get("/update/app", (req, res) => {
    let { version, system } = req.query
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');

    let arr1 = [];
    if (system == "android") {
        fs.readFile('../appUpdate/android.txt', function (err, data) {

            if (err) {
                throw err;
            }
            let text1 = data.toString()
            arr1 = text1.split(",");
            let old = arr1[0];
            let xin = arr1[1];
            let dz = arr1[2];
            let ms = arr1[3];

            if (old == xin) {
                let data = {
                    code: 0,
                    message: "SUCCESS",
                    data: {
                        upgradeMode: 0,
                        downloadUrl: dz,
                        changeLog: ms
                    }
                }

                res.send(data);
                return
            }
            if (version < xin && version > old) {
                let data = {
                    code: 0,
                    message: "SUCCESS",
                    data: {
                        upgradeMode: 0,
                        downloadUrl: dz,
                        changeLog: ms
                    }
                }

                res.send(data);
                return
            } if (version <= old) {
                let data = {
                    code: 0,
                    message: "SUCCESS",
                    data: {
                        upgradeMode: 0,
                        downloadUrl: dz,
                        changeLog: ms
                    }
                }

                res.send(data);
                return
            }
            if (version == xin) {
                let data = {
                    code: 0,
                    message: "SUCCESS",
                    data: {
                        upgradeMode: 0,
                        downloadUrl: dz,
                        changeLog: ms
                    }
                }

                res.send(data);
                return
            }


            res.send({
                code: 1, message: false
            });
            return



        });
    } if (system == "ios") {
        fs.readFile('../appUpdate/ios.txt', function (err, data) {

            if (err) {
                throw err;
            }
            let text1 = data.toString()
            arr1 = text1.split(",");
            let old = arr1[0];
            let xin = arr1[1];
            let dz = arr1[2];
            let ms = arr1[3];


            if (version < xin && version > old) {
                let data = {
                    code: 0,
                    message: "SUCCESS",
                    data: {
                        upgradeMode: 1,
                        downloadUrl: dz,
                        changeLog: ms
                    }
                }

                res.send(data);
                return
            } if (version <= old) {
                let data = {
                    code: 0,
                    message: "SUCCESS",
                    data: {
                        upgradeMode: 2,
                        downloadUrl: dz,
                        changeLog: ms
                    }
                }

                res.send(data);
                return
            }
            if (version == xin) {
                let data = {
                    code: 0,
                    message: "SUCCESS",
                    data: {
                        upgradeMode: 0,
                        downloadUrl: dz,
                        changeLog: ms
                    }
                }

                res.send(data);
                return
            }
            res.send({
                code: 1, message: false
            });
            return

        });
    }










})



app.listen(18081, () => {
    console.log('http://localhost:18081')
})