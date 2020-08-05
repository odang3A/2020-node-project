const MusicModel = require("../../models/music");
const mongoose = require("mongoose");

// id 유효성 체크
const checkId = (req, res, next) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).end();
    };
    
    next();
}

//목록조회 (localhost:3000/api/music?limit=10)
// -성공: limit수만큼 music 객체를 담은 배열을 리턴 (200: OK)
// -실패: limit가 숫자형이 아닌 경우 (400: Bad Request)
const list = (req, res, next) => {
    let limit = parseInt(req.query.limit || 10, 10);

    if(Number.isNaN(limit)) return res.status(400).end();
    
    //res.json(music.slice(0, limit));
    MusicModel.find((err, result) => {
        if(err) return res.status(500).end();   //next(err);  //throw err
        //res.json(result);
        res.render("music/list", {result}); //{ result: result }
    }).limit(limit).sort({_id: -1});
};

//상세조회 (localhost:3000/api/music/:id)
// -성공: id에 해당하는 music 객체 리턴 (200: OK)
// -실패: id가 숫자가 아닌 경우 (400: Bad Request)
//        해당하는 id가 없는 경우 (404: Not Found)
// -mongo 실패: 유효한 id가 아닌 경우(400: Bad Request)
//              해당하는 id가 없는 경우(404: Not Found)
const detail = (req, res) => {
    // const id = parseInt(req.params.id, 10);

    // if(Number.isNaN(id)) return res.status(400).end();

    //const result = music.find((m) => m.id === id);
    // const result = music.filter((m) => m.id === id)[0];

    // if(!result) return res.status(404).end();

    // res.json(result);

    const id = req.params.id;

    MusicModel.findById(id, (err, result) => {
        if(err) return res.status(500).end();
        if(!result) return res.status(404).end();
        //res.json(result);
        res.render("music/detail", {result});
    });

};

//등록
// -성공: id는 채번하고, 입력받은 singer, title로 새로운 객체를
//          만들어서 배열에 추가 (201: Created)
// -실패: singer, title 값이 없는 경우 (400: Bad Request)
const create = (req, res) => {
    const { singer, title } = req.body;
    if(!singer || !title) return res.status(400).send("누락된 필수 입력값이 있습니다.");

    // const m = { id: nextId++, singer, title };
    // music.push(m);
    // res.status(201).json(m);
    
    // 1. Document.save()
/*    const music = new MusicModel({ singer, title });
    music.save((err, result) => {
        if(err) return res.status(500).end();    //throw err;
        res.status(201).json(result);
    });
*/  
    // 2. MusicModel.create()
    MusicModel.create({ singer, title }, (err, result) => {
        if(err) return res.status(500).send("등록 시 오류가 발생했습니다.");
        res.status(201).json(result);
    });
};

//수정 (localhost:3000/api/music/:id)
// -성공: id에 해당하는 객체에 입력값으로 업데이트하고 객체 반환 (200: OK)
// -실패: id가 숫자가 아닐 경우 (400: Bad Request)
//          해당되는 Id가 없는 경우 (404: Not Found)
const update = (req, res) => {
    // const id = parseInt(req.params.id, 10);
    // if(Number.isNaN(id)) return res.status(400).end();

    // const result = music.find((m) => m.id === id);
    // if(!result) return res.status(404).end();

    //  const { singer, title } = req.body;
    //  if(singer) result.singer = singer;
    //  if(title) result.title = title;
    // res.json(result);

    const id = req.params.id;

    const { singer, title } = req.body;

    MusicModel.findByIdAndUpdate(id,
        { singer, title }, 
        { new: true },
        (err, result) => {
            if(err) return res.status(500).end();
            if(!result) return res.status(404).end();
            res.json(result);
    });
};

//삭제 (localhost:3000/api/music/:id)
// -성공: id에 해당하는 객체를 배열에서 삭제 후 배열 리턴 (200: OK)
// -실패: id가 숫자가 아닌 경우 (400: Bad Request)
//          해당하는 id가 없는 경우(404: Not Found)
const remove = (req, res) => {
    // const id = parseInt(req.params.id, 10);
    // if(Number.isNaN(id)) return res.status(400).end();

    // const result = music.find((m) => m.id === id);
    // if(!result) return res.status(404).end();

    // music = music.filter((m) => m.id !== id);
    // res.json(music);

    const id = req.params.id;

    MusicModel.findByIdAndRemove(id, (err, result) => {
        if(err) return res.status(500).end();
        if(!result) return res.status(404).end();
        res.json(result);
    });
};

const showCreatePage = (req, res) => {
    res.render("music/create");
}

const showUpdatePage = (req, res) => {
    const id = req.params.id;

    MusicModel.findById(id, (err, result) => {
        if(err) return res.status(500).send("조회 시 오류가 발생했습니다.");
        if(!result) return res.status(404).send("해당하는 정보가 없습니다.");
        res.render("music/update", {result});
    });
    
}

module.exports = { 
    list, 
    detail, 
    create, 
    update, 
    remove, 
    checkId, 
    showCreatePage, 
    showUpdatePage, 
};