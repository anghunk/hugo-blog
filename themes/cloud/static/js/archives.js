document.addEventListener('DOMContentLoaded', function() {
  var archivesContainer = document.getElementById('archives-container');
  
  if (!archivesContainer) return;
  
  archivesContainer.addEventListener('click', function(e) {
    var target = e.target;
    
    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') === 'archive') {
      var posts = target.nextElementSibling;
      
      if (posts.style.display === "block") {
        posts.style.display = "none";
        return;
      }
      
      var allPosts = document.getElementsByClassName('archive-posts');
      for (var i = 0; i < allPosts.length; i++) {
        allPosts[i].style.display = "none";
      }
      
      posts.style.display = "block";
    }
  });
  
  function initArchives() {
    var allPosts = document.getElementsByClassName('archive-posts');
    for (var i = 0; i < allPosts.length; i++) {
      allPosts[i].style.display = "none";
    }
  }
  
  initArchives();
}); 