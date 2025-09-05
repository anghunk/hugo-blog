// 立即执行，避免延迟
(function() {
  var posts = window.siteSearchData || [];
  
  // DOM加载完成后执行
  document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    var debounceTimer;
    
    if (!searchInput || !searchResults) return;
    
    // 预先编译正则表达式
    function createSearchRegex(query) {
      return new RegExp(query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');
    }

    function performSearch(query) {
      if (!query) {
        searchResults.innerHTML = '';
        return;
      }
      
      var regex = createSearchRegex(query);
      
      var results = posts.filter(function(post) {
        return regex.test(post.title) || regex.test(post.content);
      });
      
      var html = '<ul class="widget__list">';
      if (results.length) {
        results.forEach(function(post) {
          html += `<li class="widget__item"><a class="widget__link" href="${post.url}">${post.title}</a></li>`;
        });
      } else {
        html += '<li class="widget__item"><span class="widget__link">未找到相关文章</span></li>';
      }
      html += '</ul>';
      searchResults.innerHTML = html;
    }

    searchInput.addEventListener('input', function() {
      var query = this.value.toLowerCase();

      if (!query || query.length < 3) {
        clearTimeout(debounceTimer);
        performSearch(query);
        return;
      }
      
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        performSearch(query);
      }, 150);
    });
  });
})(); 