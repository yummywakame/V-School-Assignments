// AJAX - asynchronous Javacript and XML

// https://rickandmortyapi.com/api/character   - res.data.results

// const xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const data = JSON.parse(xhr.responseText)
//         listData(data.results)
//     } else if(xhr.readyState === 4 && xhr.status === 404){
//         console.log(JSON.parse(xhr.responseText))
//     }
// }

// // OUr request configuration - METHOD, URL
// xhr.open("GET", "https://rickandmortyapi.com/api/characte")
// xhr.send()


// function listData(arr){
//     console.log(arr)
// }


function get(url){
    const xhr = new XMLHttpRequest()

    xhr.open("GET", url)
    xhr.send()

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                const data = JSON.parse(xhr.responseText)
                resolve(data)
            } else if(xhr.readyState === 4 && xhr.status !== 200){
                reject(JSON.parse(xhr.responseText))
            }
        }
    })
}

// get("https://rickandmortyapi.com/api/character")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// Promise Chaining
// Whenever you return your resolved promise, you create a new promise
// get("https://rickandmortyapi.com/api/episode")
//     .then(res => {
//         return res
//     })
//     .then(res => res)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Promise
    // 3 Possible stages
        // 1. Pending
        // Resolves - Rejects

//     const a = "hello"
//     const b = "goodbye"
// const myPromise = new Promise((resolve, reject) => resolve(a))

// myPromise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



// Async - Await

// const getAllThings = async () => {

// }



async function getAllRickAndMortyThings(){
    let chars, eip, loc
    try {
        chars = await get("https://rickandmortyapi.com/api/character")
        console.log(chars)
        epi = await get("https://rickandmortyapi.com/api/episode")
        console.log(epi)
        loc = await get("https://rickandmortyapi.com/api/location")
        console.log(loc)
    }
    catch(err){
        console.log(err)
    }
}

// getAllRickAndMortyThings()



// With Async - Await
    // authRouter.post("/signup", async (req, res, next) => {
    //     try {
    //         const user = await User.find({username: req.body.username.toLowerCase()})
    //         if(user){
    //             res.status(500)
    //             return next(new Error("username is taken"))
    //         }
    //         const newUser = new User(req.body)
    //         const savedUser = await newUser.save()
    //         const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
    //         return res.status(201).send({user: savedUser.withoutPassword(), token})

    //     }
    //     catch(err){
    //         res.status(500)
    //         return next(err)
    //     }
    // })

// Without Async Await
    // authRouter.post("/signup", (req, res, next) => {
    //     User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    //         if(err){
    //             res.status(500)
    //             return next(err)
    //         }
    //         if(user){
    //             res.status(500)
    //             return next(new Error("That username is already been taken."))
    //         }
    //         const newUser = new User(req.body)
    //         newUser.save((err, savedUser) => {
    //             if(err){
    //                 res.status(500)
    //                 return next(err)
    //             }
    //             const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
    //             return res.status(201).send({user: savedUser.withoutPassword(), token})
    //         })
    //     })
    // })