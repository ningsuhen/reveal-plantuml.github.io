let encoder = require('plantuml-encoder');
export default () => {
  id: 'plantuml',
  init: ( deck ) => {
    var config = Reveal.getConfig().plantuml || {};
            var server = config.serverPath || '//www.plantuml.com/plantuml/svg/';

            document.querySelectorAll('.reveal pre code.language-plantuml').forEach(function (block) {
                let img = document.createElement("img");
                img.setAttribute("src", server + encoder.encode(block.innerText));

                let pre = block.parentElement;
                pre.parentNode.replaceChild(img, pre);
            });
  }
}
