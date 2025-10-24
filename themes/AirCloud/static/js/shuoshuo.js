function getGithubIssuesShuoshuo() {
  $(function () {
    const $list = $('#shuoshuo ul');
    marked.setOptions({
      breaks: true, // 换行符自动变成 <br>
      gfm: true, // GitHub 风格 Markdown
    });
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/repos/anghunk/hugo-blog/issues/152/comments', // 改成自己的
      dataType: 'json',
      success: function (comments) {
        comments.reverse();

        comments.forEach(function (item) {
          // 用 marked 解析 markdown
          const mdHtml = marked.parse(item.body);

          const html = `
      <li class="comment">
        <div class="meta">
          <span class="date">${new Date(item.created_at).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>

        </div>
        <div class="body">${mdHtml}</div>
      </li>`;
          $list.append(html);
        });
      },
      error: function (xhr) {
        $list.append('<li>加载失败：' + xhr.status + ' ' + xhr.statusText + '</li>');
      }
    });
  });
}

getGithubIssuesShuoshuo();