
export default (posts, name) => {
    return posts.filter(post => {
        const textMatch =
            post.category.name.toLowerCase() === name.toLowerCase();
        return textMatch;
    });
}
