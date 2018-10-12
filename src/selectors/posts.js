
export default (posts, { text, sortBy }) => {
    return posts.filter(post => {

        const textMatch =
            post.title.includes(text) ||
            post.content.includes(text)

        return textMatch;
    }).sort((post1, post2) => {
        if (sortBy === 'name') {
            return post1.title.localeCompare(post2.title);
        } else if (sortBy === 'content') {
            return post1.content.localeCompare(post2.content);
        }
        else return null;
    });
}

// result.sort(function(a,b){
//     // Turn your strings into dates, and then subtract them
//     // to get a value that is either negative, positive, or zero.
//     return new Date(b.date) - new Date(a.date);
//   });