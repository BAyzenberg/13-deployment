'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function(data) {
    ui();
    repos.all = data;
    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
