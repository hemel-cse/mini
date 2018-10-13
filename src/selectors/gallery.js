
export default (posts, name) => {
    return posts.filter(post => {

        const match = post.tags.filter(tag => {
           return tag.name.toLowerCase() === name.toLowerCase();
        });

        const textMatch = match.length >= 1;

        return textMatch;
    });
}
