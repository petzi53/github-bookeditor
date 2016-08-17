// Generated by CoffeeScript 1.8.0
(function() {
  define(['aloha', 'aloha/plugin', 'jquery', 'aloha/ephemera', 'ui/ui', 'ui/button', 'semanticblock/semanticblock-plugin', 'css!quotation/css/quotation-plugin.css'], function(Aloha, Plugin, jQuery, Ephemera, UI, Button, semanticBlock) {
    var TEMPLATE;
    TEMPLATE = '<blockquote class="quote"></blockquote>';
    return Plugin.create('quotation', {
      selector: '.quote',
      getLabel: function() {
        return 'Quotation';
      },
      activate: function($element) {
        $element.attr('data-format-whitelist', '["p"]');
        Ephemera.markAttr($element, 'data-format-whitelist');
        $element.attr('placeholder', 'Type the text of your quotation here.');
        $element.aloha();
        return $element.addClass('aloha-block-dropzone');
      },
      deactivate: function($element) {
        $element.mahalo();
        return $element.attr('class', 'quote');
      },
      init: function() {
        semanticBlock.register(this);
        UI.adopt("insert-quotation", Button, {
          click: function(e) {
            e.preventDefault();
            return semanticBlock.insertAtCursor(jQuery(TEMPLATE));
          }
        });
        return UI.adopt("insertQuotation", Button, {
          click: function(e) {
            e.preventDefault();
            return semanticBlock.insertAtCursor(jQuery(TEMPLATE));
          }
        });
      }
    });
  });

}).call(this);