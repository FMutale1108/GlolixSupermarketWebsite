<script>
    function likeProduct(productId) {
        const likeButton = document.querySelector(`.like-btn[onclick="likeProduct(${productId})"]`);

        if (likeButton) {
            // Toggle color by adding/removing a "liked" class
            likeButton.classList.toggle("liked");
        }
    }
</script>
