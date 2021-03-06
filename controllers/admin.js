
const path = require('path');
const fs = require('fs');
module.exports = function(formidable, Group) {
    return {
        SetRouting: function(router){
            router.get('/dashboard', this.adminPage);

            router.post('/uploadFile', this.uploadFile);
            router.post('/dashboard',  this.adminPostPage);
        },
        adminPage: (req, res) => res.render('admin/dashboard')
        ,
        adminPostPage: (req, res) => {
            const newGroup = new Group();
            newGroup.name = req.body.group;
            newGroup.country = req.body.country;
            newGroup.image = req.body.upload;
            newGroup.save((err) => {
                res.render('admin/dashboard');
            })
        },
        uploadFile: (req, res) => {
            const form = new formidable.IncomingForm();
            form.uploadDir = path.join(__dirname, '../public/uploads');
            form.on('file', (field, file) => {
                fs.rename(file.path, path.join(form.uploadDir, file.name), (err) => {
                    if (err) throw err;
                    console.log('File renamed successfully');         
                })
            });
            form.on('error', (field, file) => {
                console.log(err);
            }); 
            form.on('end', () => {
                console.log('File upload is successful');
            });

            form.parse(req);
        } 
    }

}