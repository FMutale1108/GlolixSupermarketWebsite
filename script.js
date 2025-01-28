function likeProduct(productId) {
    const button = document.querySelector(like-btn[onclick="likeProduct(${productId})"]);
    const isLiked = button.dataset.liked === "true";
  
    if (!isLiked) {
      button.textContent = "👍 Liked"; // Update button text
      button.style.backgroundColor = "green"; // Change background color to green
      button.style.color = "white"; // Ensure text is visible
      button.dataset.liked = "true"; // Update the data-liked attribute
    } else {
      button.textContent = "Like"; // Revert button text
      button.style.backgroundColor = ""; // Revert to default background
      button.style.color = ""; // Revert to default text color
      button.dataset.liked = "false"; // Reset the data-liked attribute
    }
  }