// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user){
    return user.userRole === "ADMIN" ? true : false
}

function getEmail(user){
    return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`
}

function getPlaylistLength(playlist){
    return playlist.songs.length
}

function getHardestHomework(homework){
    let returnObj = homework[0]
    for(x of homework){
        if(returnObj.averageScore > x.averageScore){
            returnObj = x
        }
    }
    return homework.length > 0 ? returnObj.name : ''
}

function createPhonebook(names, phoneNumbers){
    return names.reduce((obj, k, i) => ({...obj, [k]: phoneNumbers[i] }), {})
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};