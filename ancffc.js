

console.log('before')

getUser(12, (user1) => { 
      console.log(user1)
    getRepos(user1.id, (repos) => {
        console.log(repos)
    })
 });


console.log('after')


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Retreive user from database')
        return callback({ id, name: "Mohamed" });
    }, 2000)
}



function getRepos(idUser, callback) {
    setTimeout(() => {
        console.log('Retreive repos from github')
        return callback(['repo1', 'repo2']);
    }, 2000)
}



