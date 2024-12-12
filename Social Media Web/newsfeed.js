document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-button');
    const postContent = document.getElementById('post-content');
    const postsSection = document.querySelector('.posts');

    // Add a new post
    postButton.addEventListener('click', () => {
        const content = postContent.value.trim();
        if (content === '') {
            alert('Post content cannot be empty.');
            return;
        }

        // Create a new post element
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<p>${content}</p>`;

        // Add the new post to the top of the posts section
        postsSection.prepend(post);

        // Clear the textarea
        postContent.value = '';
    });
});
